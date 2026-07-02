import Booking from '../models/Booking.js';
import Tour from '../models/Tour.js';

export async function createBooking(req, res, next) {
  try {
    const { tourId, departureDate, passengers, notes } = req.body;
    const tour = await Tour.findById(tourId);

    if (!tour || !tour.active) {
      return res.status(404).json({ message: 'Tour không tồn tại' });
    }

    if (passengers > tour.availableSlots) {
      return res.status(400).json({ message: 'Không đủ chỗ trống cho tour này' });
    }

    const duplicate = await Booking.findOne({
      user: req.user._id,
      tour: tourId,
      departureDate: new Date(departureDate),
      status: { $in: ['pending', 'approved'] },
    });

    if (duplicate) {
      return res.status(400).json({ message: 'Bạn đã đặt tour này cho ngày khởi hành đã chọn' });
    }

    const totalPrice = tour.price * passengers;
    const booking = await Booking.create({
      user: req.user._id,
      tour: tourId,
      departureDate,
      passengers,
      notes,
      totalPrice,
    });

    tour.availableSlots -= passengers;
    await tour.save();

    const populated = await Booking.findById(booking._id)
      .populate('tour')
      .populate('user', 'name email phone');

    res.status(201).json(populated);
  } catch (err) {
    next(err);
  }
}

export async function getMyBookings(req, res, next) {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('tour')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}

export async function getAllBookings(req, res, next) {
  try {
    const bookings = await Booking.find()
      .populate('tour')
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}

export async function updateBookingStatus(req, res, next) {
  try {
    const { status, paymentStatus } = req.body;
    const booking = await Booking.findById(req.params.id).populate('tour');

    if (!booking) {
      return res.status(404).json({ message: 'Đơn đặt không tồn tại' });
    }

    const oldStatus = booking.status;

    if (status) booking.status = status;
    if (paymentStatus) booking.paymentStatus = paymentStatus;

    if (status === 'cancelled' && oldStatus !== 'cancelled') {
      const tour = await Tour.findById(booking.tour._id || booking.tour);
      if (tour) {
        tour.availableSlots += booking.passengers;
        await tour.save();
      }
    }

    await booking.save();

    const updated = await Booking.findById(booking._id)
      .populate('tour')
      .populate('user', 'name email phone');

    res.json(updated);
  } catch (err) {
    next(err);
  }
}
