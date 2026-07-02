import HotelBooking from '../models/HotelBooking.js';
import Hotel from '../models/Hotel.js';

// Tính số đêm giữa 2 ngày
function calcNights(checkIn, checkOut) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / msPerDay));
}

export async function createHotelBooking(req, res, next) {
  try {
    const { hotelId, checkIn, checkOut, guests, notes } = req.body;

    if (!hotelId || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin đặt phòng' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      return res.status(400).json({ message: 'Ngày nhận phòng không thể ở quá khứ' });
    }
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({ message: 'Ngày trả phòng phải sau ngày nhận phòng' });
    }

    const hotel = await Hotel.findById(hotelId);
    if (!hotel || !hotel.active) {
      return res.status(404).json({ message: 'Khách sạn không tồn tại hoặc đã ngưng hoạt động' });
    }

    const nights = calcNights(checkIn, checkOut);
    const totalPrice = hotel.pricePerNight * nights * guests;

    const booking = await HotelBooking.create({
      user: req.user._id,
      hotel: hotelId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      notes: notes || '',
      totalPrice,
    });

    const populated = await HotelBooking.findById(booking._id)
      .populate('hotel')
      .populate('user', 'name email phone');

    res.status(201).json(populated);
  } catch (err) {
    next(err);
  }
}

export async function getMyHotelBookings(req, res, next) {
  try {
    const bookings = await HotelBooking.find({ user: req.user._id })
      .populate('hotel')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}

export async function getAllHotelBookings(req, res, next) {
  try {
    const bookings = await HotelBooking.find()
      .populate('hotel')
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}

export async function updateHotelBookingStatus(req, res, next) {
  try {
    const { status, paymentStatus } = req.body;
    const booking = await HotelBooking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Đơn đặt không tồn tại' });
    }

    if (status) booking.status = status;
    if (paymentStatus) booking.paymentStatus = paymentStatus;
    await booking.save();

    const updated = await HotelBooking.findById(booking._id)
      .populate('hotel')
      .populate('user', 'name email phone');

    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function cancelMyHotelBooking(req, res, next) {
  try {
    const booking = await HotelBooking.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!booking) {
      return res.status(404).json({ message: 'Đơn đặt không tồn tại' });
    }
    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Đơn đặt đã được hủy rồi' });
    }
    if (booking.status === 'completed') {
      return res.status(400).json({ message: 'Không thể hủy đơn đã hoàn thành' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({ message: 'Hủy đặt phòng thành công', booking });
  } catch (err) {
    next(err);
  }
}
