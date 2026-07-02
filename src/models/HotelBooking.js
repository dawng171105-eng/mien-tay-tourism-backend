import mongoose from "mongoose";

const HotelBookingSchema = new mongoose.Schema(
  {
    checkIn: {
      type: Date,
      required: [true, "Please add check-in date"],
    },
    checkOut: {
      type: Date,
      required: [true, "Please add check-out date"],
    },
    guests: {
      type: Number,
      required: [true, "Please add number of guests"],
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: [true, "Please add total price"],
      min: 0,
    },
    notes: {
      type: String,
      default: "",
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
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("HotelBooking", HotelBookingSchema);
