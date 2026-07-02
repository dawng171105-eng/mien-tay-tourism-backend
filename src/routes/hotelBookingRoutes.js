import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
  createHotelBooking,
  getMyHotelBookings,
  getAllHotelBookings,
  updateHotelBookingStatus,
  cancelMyHotelBooking,
} from '../controllers/hotelBookingController.js';

const router = Router();

router.post('/', protect, authorize('customer'), createHotelBooking);
router.get('/my', protect, authorize('customer'), getMyHotelBookings);
router.delete('/:id/cancel', protect, authorize('customer'), cancelMyHotelBooking);
router.get('/', protect, authorize('admin'), getAllHotelBookings);
router.put('/:id/status', protect, authorize('admin'), updateHotelBookingStatus);

export default router;
