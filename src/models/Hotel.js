import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    city: String,
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    images: [String],
    pricePerNight: {
      type: Number,
      required: [true, "Please add price per night"],
    },
    starRating: {
      type: Number,
      default: 3,
      min: 1,
      max: 5,
    },
    ratingAverage: {
      type: Number,
      default: 0,
      min: [0, "Rating must be at least 0"],
      max: [5, "Rating must be at most 5"],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    amenities: [String],
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    rooms: [
      {
        type: String,
        description: String,
        pricePerNight: Number,
        maxOccupancy: Number,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Hotel", HotelSchema);
