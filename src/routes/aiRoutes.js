import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { createTravelPlan } from '../controllers/aiController.js';
import { AI_PROVINCES } from '../services/aiTravelPlanner.js';

const router = Router();

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array().map((e) => e.msg).join(', '),
    });
  }
  next();
}

const today = new Date();
today.setHours(0, 0, 0, 0);
const maxStart = new Date(today);
maxStart.setDate(maxStart.getDate() + 365);

router.post(
  '/travel-plan',
  [
    body('province')
      .trim()
      .notEmpty()
      .withMessage('Vui lòng chọn điểm đến')
      .isIn(AI_PROVINCES)
      .withMessage('Tỉnh/thành không hợp lệ'),
    body('startDate')
      .isISO8601()
      .withMessage('Ngày khởi hành không hợp lệ (định dạng YYYY-MM-DD)')
      .custom((value) => {
        const d = new Date(`${value}T00:00:00+07:00`);
        if (Number.isNaN(d.getTime())) throw new Error('Ngày khởi hành không hợp lệ');
        if (d < today) throw new Error('Ngày khởi hành không được trong quá khứ');
        if (d > maxStart) throw new Error('Ngày khởi hành tối đa 12 tháng tới');
        return true;
      }),
    body('days')
      .isInt({ min: 1, max: 10 })
      .withMessage('Số ngày phải từ 1 đến 10'),
    body('travelers')
      .isInt({ min: 1, max: 20 })
      .withMessage('Số khách phải từ 1 đến 20'),
    body('interests')
      .isArray({ min: 1, max: 8 })
      .withMessage('Vui lòng chọn ít nhất 1 sở thích'),
    body('interests.*')
      .trim()
      .isLength({ min: 1, max: 30 })
      .withMessage('Sở thích không hợp lệ'),
    body('budget')
      .optional({ nullable: true, checkFalsy: true })
      .isFloat({ min: 0, max: 1000000000 })
      .withMessage('Ngân sách không hợp lệ'),
    body('notes')
      .optional({ nullable: true })
      .trim()
      .isLength({ max: 500 })
      .withMessage('Ghi chú tối đa 500 ký tự'),
  ],
  handleValidationErrors,
  createTravelPlan,
);

export default router;
