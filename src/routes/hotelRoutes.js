import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotelsAdmin,
} from '../controllers/hotelController.js';

const router = Router();

router.get('/', getHotels);
router.get('/admin/all', protect, authorize('admin'), getAllHotelsAdmin);
router.get('/:id', getHotelById);
router.post('/', protect, authorize('admin'), createHotel);
router.put('/:id', protect, authorize('admin'), updateHotel);
router.delete('/:id', protect, authorize('admin'), deleteHotel);

export default router;
