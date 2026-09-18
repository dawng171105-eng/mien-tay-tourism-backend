import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { getStats, getRevenue } from '../controllers/adminController.js';

const router = Router();

router.get('/stats', protect, authorize('admin'), getStats);
router.get('/revenue', protect, authorize('admin'), getRevenue);

export default router;
