import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    departureDate: {
      type: Date,
      required: [true, "Please add a departure date"],
    },
    passengers: {
      type: Number,
      required: [true, "Please add number of passengers"],
      min: 1,
    },
    notes: {
      type: String,
      default: "",
    },
    totalPrice: {
      type: Number,
      required: [true, "Please add total price"],
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "completed"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Booking", BookingSchema);
