import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { getReviews, createReview, deleteReview } from '../controllers/reviewController.js';

const router = Router();

router.get('/', getReviews);
router.post('/', protect, authorize('customer'), createReview);
router.delete('/:id', protect, authorize('admin'), deleteReview);

export default router;
