import Tour from "../models/Tour.js";

export async function getTours(req, res, next) {
  try {
    const { 
      province, 
      search, 
      minPrice, 
      maxPrice, 
      duration, 
      featured,
      isCombo,
      type,
      sort = "-featured -createdAt"
    } = req.query;
    
    const filter = { active: true };

    if (province) filter.province = province;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (duration) {
      filter.duration = { $regex: duration, $options: "i" };
    }
    if (featured === "true") filter.featured = true;
    if (isCombo === "true") filter.isCombo = true;
    if (isCombo === "false") filter.isCombo = false;
    if (type) filter.type = type;

    const tours = await Tour.find(filter).sort(sort);
    res.json(tours);
  } catch (err) {
    next(err);
  }
}

export async function getTourById(req, res, next) {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tour không tồn tại" });
    }
    res.json(tour);
  } catch (err) {
    next(err);
  }
}

export async function createTour(req, res, next) {
  try {
    const data = { ...req.body };
    if (data.availableSlots === undefined) {
      data.availableSlots = data.maxSlots;
    }
    const tour = await Tour.create(data);
    res.status(201).json(tour);
  } catch (err) {
    next(err);
  }
}

export async function updateTour(req, res, next) {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tour) {
      return res.status(404).json({ message: "Tour không tồn tại" });
    }
    res.json(tour);
  } catch (err) {
    next(err);
  }
}

export async function deleteTour(req, res, next) {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tour không tồn tại" });
    }
    res.json({ message: "Đã xóa tour" });
  } catch (err) {
    next(err);
  }
}

export async function getAllToursAdmin(req, res, next) {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json(tours);
  } catch (err) {
    next(err);
  }
}
