import Hotel from "../models/Hotel.js";

export async function getHotels(req, res, next) {
  try {
    const { province, search, minPrice, maxPrice, starRating, featured } =
      req.query;
    const filter = { active: true };

    if (province) filter.province = province;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (minPrice || maxPrice) {
      filter.pricePerNight = {};
      if (minPrice) filter.pricePerNight.$gte = Number(minPrice);
      if (maxPrice) filter.pricePerNight.$lte = Number(maxPrice);
    }
    if (starRating) filter.starRating = Number(starRating);
    if (featured === "true") filter.featured = true;

    const hotels = await Hotel.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json(hotels);
  } catch (err) {
    next(err);
  }
}

export async function getHotelById(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }
    res.json(hotel);
  } catch (err) {
    next(err);
  }
}

export async function createHotel(req, res, next) {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    next(err);
  }
}

export async function updateHotel(req, res, next) {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }
    res.json(hotel);
  } catch (err) {
    next(err);
  }
}

export async function deleteHotel(req, res, next) {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }
    res.json({ message: "Đã xóa khách sạn" });
  } catch (err) {
    next(err);
  }
}

export async function getAllHotelsAdmin(req, res, next) {
  try {
    const hotels = await Hotel.find().sort({ createdAt: -1 });
    res.json(hotels);
  } catch (err) {
    next(err);
  }
}
