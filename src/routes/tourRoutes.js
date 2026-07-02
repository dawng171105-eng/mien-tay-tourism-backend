import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  getAllToursAdmin,
} from '../controllers/tourController.js';

const router = Router();

router.get('/', getTours);
router.get('/admin/all', protect, authorize('admin'), getAllToursAdmin);
router.get('/:id', getTourById);
router.post('/', protect, authorize('admin'), createTour);
router.put('/:id', protect, authorize('admin'), updateTour);
router.delete('/:id', protect, authorize('admin'), deleteTour);

export default router;
