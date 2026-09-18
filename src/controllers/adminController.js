import Booking from '../models/Booking.js';
import HotelBooking from '../models/HotelBooking.js';
import Tour from '../models/Tour.js';
import Hotel from '../models/Hotel.js';
import Article from '../models/Article.js';
import User from '../models/User.js';

const REVENUE_STATUSES = ['approved', 'completed'];
const ACTIVE_REVENUE = { status: { $in: REVENUE_STATUSES } };
const PAID = { $eq: ['$paymentStatus', 'paid'] };

export async function getStats(req, res, next) {
  try {
    const [totalRevenue, bookingCount, tourCount, articleCount, userCount, bookings, topTours] =
      await Promise.all([
        Booking.aggregate([
          { $match: { paymentStatus: 'paid' } },
          { $group: { _id: null, total: { $sum: '$totalPrice' } } },
        ]),
        Booking.countDocuments(),
        Tour.countDocuments(),
        Article.countDocuments(),
        User.countDocuments({ role: 'customer' }),
        Booking.find()
          .populate('tour', 'name province')
          .sort({ createdAt: -1 })
          .limit(10),
        Booking.aggregate([
          { $match: { status: { $in: ['approved', 'completed'] } } },
          { $group: { _id: '$tour', count: { $sum: 1 }, revenue: { $sum: '$totalPrice' } } },
          { $sort: { count: -1 } },
          { $limit: 5 },
        ]),
      ]);

    const tourIds = topTours.map((t) => t._id);
    const tours = await Tour.find({ _id: { $in: tourIds } }).select('name province');
    const tourMap = Object.fromEntries(tours.map((t) => [t._id.toString(), t]));

    const popularTours = topTours.map((item) => ({
      tour: tourMap[item._id.toString()],
      bookings: item.count,
      revenue: item.revenue,
    }));

    const statusBreakdown = await Booking.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    const provinceInterest = await Tour.aggregate([
      { $group: { _id: '$province', tourCount: { $sum: 1 } } },
      { $sort: { tourCount: -1 } },
    ]);

    res.json({
      totalRevenue: totalRevenue[0]?.total || 0,
      bookingCount,
      tourCount,
      articleCount,
      userCount,
      recentBookings: bookings,
      popularTours,
      statusBreakdown,
      provinceInterest,
    });
  } catch (err) {
    next(err);
  }
}

function last12Months() {
  const result = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    result.push({
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
      start: d,
      label: d.toLocaleDateString('vi-VN', { month: '2-digit', year: '2-digit' }),
    });
  }
  return result;
}

function buildMonthlySummary(rows, defaults) {
  const map = Object.fromEntries(rows.map((r) => [r._id, r]));
  return defaults.map(({ key, label }) => ({
    key,
    label,
    orders: map[key]?.orders || 0,
    revenue: map[key]?.revenue || 0,
    collected: map[key]?.collected || 0,
  }));
}

export async function getRevenue(req, res, next) {
  try {
    const months = last12Months();
    const since = months[0].start;

    const [tourKpi, hotelKpi, tourMonthlyAgg, hotelMonthlyAgg, statusBreakdown, paymentBreakdown] =
      await Promise.all([
        Booking.aggregate([
          { $match: ACTIVE_REVENUE },
          {
            $group: {
              _id: null,
              revenue: { $sum: '$totalPrice' },
              orders: { $sum: 1 },
              collected: {
                $sum: { $cond: [PAID, '$totalPrice', 0] },
              },
            },
          },
        ]),
        HotelBooking.aggregate([
          { $match: ACTIVE_REVENUE },
          {
            $group: {
              _id: null,
              revenue: { $sum: '$totalPrice' },
              orders: { $sum: 1 },
              collected: {
                $sum: { $cond: [PAID, '$totalPrice', 0] },
              },
            },
          },
        ]),
        Booking.aggregate([
          { $match: { ...ACTIVE_REVENUE, createdAt: { $gte: since } } },
          {
            $group: {
              _id: {
                $dateToString: { format: '%Y-%m', date: '$createdAt' },
              },
              revenue: { $sum: '$totalPrice' },
              orders: { $sum: 1 },
              collected: { $sum: { $cond: [PAID, '$totalPrice', 0] } },
            },
          },
        ]),
        HotelBooking.aggregate([
          { $match: { ...ACTIVE_REVENUE, createdAt: { $gte: since } } },
          {
            $group: {
              _id: {
                $dateToString: { format: '%Y-%m', date: '$createdAt' },
              },
              revenue: { $sum: '$totalPrice' },
              orders: { $sum: 1 },
              collected: { $sum: { $cond: [PAID, '$totalPrice', 0] } },
            },
          },
        ]),
        Booking.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
        HotelBooking.aggregate([
          { $group: { _id: '$paymentStatus', count: { $sum: 1 } } },
        ]),
      ]);

    const tourKy = tourKpi[0] || { revenue: 0, orders: 0, collected: 0 };
    const hotelKy = hotelKpi[0] || { revenue: 0, orders: 0, collected: 0 };
    const totalRevenue = tourKy.revenue + hotelKy.revenue;
    const totalOrders = tourKy.orders + hotelKy.orders;
    const totalCollected = tourKy.collected + hotelKy.collected;

    const tourMonthly = buildMonthlySummary(tourMonthlyAgg, months);
    const hotelMonthly = buildMonthlySummary(hotelMonthlyAgg, months);

    const monthly = tourMonthly.map((m, i) => ({
      ...m,
      hotelOrders: hotelMonthly[i].orders,
      hotelRevenue: hotelMonthly[i].revenue,
      hotelCollected: hotelMonthly[i].collected,
    }));
    monthly.forEach((m) => {
      m.revenue = m.revenue + m.hotelRevenue;
      m.orders = m.orders + m.hotelOrders;
      m.collected = m.collected + m.hotelCollected;
    });

    const [topTours, topHotels, provinceAgg] = await Promise.all([
      Booking.aggregate([
        { $match: ACTIVE_REVENUE },
        { $group: { _id: '$tour', revenue: { $sum: '$totalPrice' }, orders: { $sum: 1 } } },
        { $sort: { revenue: -1 } },
        { $limit: 10 },
      ]),
      HotelBooking.aggregate([
        { $match: ACTIVE_REVENUE },
        { $group: { _id: '$hotel', revenue: { $sum: '$totalPrice' }, orders: { $sum: 1 } } },
        { $sort: { revenue: -1 } },
        { $limit: 10 },
      ]),
      Booking.aggregate([
        { $match: ACTIVE_REVENUE },
        {
          $lookup: {
            from: 'tours',
            localField: 'tour',
            foreignField: '_id',
            as: 'tour',
          },
        },
        { $unwind: '$tour' },
        { $group: { _id: '$tour.province', revenue: { $sum: '$totalPrice' }, orders: { $sum: 1 } } },
      ]),
    ]);

    const tourIds = topTours.map((t) => t._id);
    const hotelIds = topHotels.map((h) => h._id);
    const [tours, hotels] = await Promise.all([
      Tour.find({ _id: { $in: tourIds } }).select('name province price'),
      Hotel.find({ _id: { $in: hotelIds } }).select('name province city pricePerNight'),
    ]);
    const tourMap = Object.fromEntries(tours.map((t) => [t._id.toString(), t]));
    const hotelMap = Object.fromEntries(hotels.map((h) => [h._id.toString(), h]));

    const topToursData = topTours.map((t) => ({
      tour: tourMap[t._id.toString()],
      revenue: t.revenue,
      orders: t.orders,
    }));

    const topHotelsData = topHotels.map((h) => ({
      hotel: hotelMap[h._id.toString()],
      revenue: h.revenue,
      orders: h.orders,
    }));

    const thisMonth = monthly[monthly.length - 1];
    const prevMonth = monthly[monthly.length - 2];
    const growth =
      prevMonth && prevMonth.revenue > 0
        ? ((thisMonth.revenue - prevMonth.revenue) / prevMonth.revenue) * 100
        : null;

    res.json({
      monthly,
      topTours: topToursData,
      topHotels: topHotelsData,
      byProvince: provinceAgg,
      summaries: {
        tour: tourKy,
        hotel: hotelKy,
        totalRevenue,
        totalOrders,
        totalCollected,
        collectionRate:
          totalRevenue > 0 ? Math.round((totalCollected / totalRevenue) * 1000) / 10 : 0,
        avgOrderValue: totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0,
        growth: growth === null ? null : Math.round(growth * 10) / 10,
      },
      statusBreakdown,
      paymentBreakdown,
      generatedAt: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
}
