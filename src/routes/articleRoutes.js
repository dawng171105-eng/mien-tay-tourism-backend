import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticlesAdmin,
} from '../controllers/articleController.js';

const router = Router();

router.get('/', getArticles);
router.get('/admin/all', protect, authorize('admin'), getAllArticlesAdmin);
router.get('/:id', getArticleById);
router.post('/', protect, authorize('admin'), createArticle);
router.put('/:id', protect, authorize('admin'), updateArticle);
router.delete('/:id', protect, authorize('admin'), deleteArticle);

export default router;
