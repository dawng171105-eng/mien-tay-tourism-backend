import { planTravel } from '../services/aiTravelPlanner.js';

export async function createTravelPlan(req, res, next) {
  try {
    const result = await planTravel({
      province: req.body.province,
      startDate: req.body.startDate,
      days: Number(req.body.days),
      travelers: Number(req.body.travelers),
      interests: req.body.interests,
      budget: req.body.budget === undefined || req.body.budget === null || req.body.budget === ''
        ? null
        : Number(req.body.budget),
      notes: req.body.notes || '',
    });
    res.json(result);
  } catch (err) {
    if (err?.code === 'AI_NOT_CONFIGURED' || err?.code === 'AI_UNAVAILABLE' || err?.code === 'AI_RATE_LIMITED') {
      return res.status(err.status || 503).json({
        message: err.message,
        weather: err.weather || null,
        recommendedTours: err.recommendedTours || [],
      });
    }
    next(err);
  }
}
