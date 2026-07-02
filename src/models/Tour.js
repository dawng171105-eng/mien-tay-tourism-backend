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
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    duration: {
      type: String,
      required: [true, "Please add duration"],
    },
    maxSlots: {
      type: Number,
      required: [true, "Please add max slots"],
    },
    availableSlots: {
      type: Number,
      required: [true, "Please add available slots"],
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
    province: String,
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    provincesVisited: [String],
    departurePoint: String,
    minSlots: Number,
    inclusions: [String],
    exclusions: [String],
    itinerary: String,
    dailyItinerary: [
      {
        day: Number,
        title: String,
        activities: [String],
      },
    ],
    departures: [Date],
    startDates: [Date],
  },
  { timestamps: true },
);

export default mongoose.model("Tour", TourSchema);
