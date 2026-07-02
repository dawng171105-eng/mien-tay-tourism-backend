import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { getStats } from '../controllers/adminController.js';

const router = Router();

router.get('/stats', protect, authorize('admin'), getStats);

export default router;
