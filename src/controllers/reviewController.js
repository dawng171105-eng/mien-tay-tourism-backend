import Review from '../models/Review.js';

export async function getReviews(req, res, next) {
  try {
    const { tourId } = req.query;
    const filter = tourId ? { tour: tourId } : {};
    const reviews = await Review.find(filter)
      .populate('user', 'name avatar')
      .populate('tour', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    next(err);
  }
}

export async function createReview(req, res, next) {
  try {
    const { tourId, rating, comment } = req.body;
    const review = await Review.create({
      user: req.user._id,
      tour: tourId,
      rating,
      comment,
    });

    const populated = await Review.findById(review._id).populate('user', 'name avatar');
    res.status(201).json(populated);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Bạn đã đánh giá tour này rồi' });
    }
    next(err);
  }
}

export async function deleteReview(req, res, next) {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Đánh giá không tồn tại' });
    }
    res.json({ message: 'Đã xóa đánh giá' });
  } catch (err) {
    next(err);
  }
}
