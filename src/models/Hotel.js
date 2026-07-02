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
    city: {
      type: String,
      required: [true, "Please add a city"],
    },
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    images: [String],
    pricePerNight: {
      type: Number,
      required: [true, "Please add price per night"],
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
