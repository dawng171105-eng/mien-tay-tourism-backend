import Booking from '../models/Booking.js';
import Tour from '../models/Tour.js';
import Article from '../models/Article.js';
import User from '../models/User.js';

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
