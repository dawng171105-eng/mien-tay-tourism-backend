import mongoose from "mongoose";

const TourSchema = new mongoose.Schema(
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
    shortDescription: String,
    images: [String],
    priceAdult: {
      type: Number,
      required: [true, "Please add adult price"],
    },
    priceChild: {
      type: Number,
      required: [true, "Please add child price"],
    },
    duration: {
      type: String,
      required: [true, "Please add duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "Please add max group size"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
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
    isCombo: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ["combo", "single"],
      default: "single",
    },
    provincesVisited: [String],
    departurePoint: String,
    minSlots: Number,
    inclusions: [String],
    exclusions: [String],
    dailyItinerary: [
      {
        day: Number,
        title: String,
        activities: [String],
      },
    ],
    startDates: [Date],
  },
  { timestamps: true },
);

export default mongoose.model("Tour", TourSchema);
