import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import hotelBookingRoutes from "./routes/hotelBookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Mien Tay Tourism API",
    environment: NODE_ENV,
    nodeVersion: process.version,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/hotel-bookings", hotelBookingRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Mien Tay Tourism API đang chạy",
    health: "/api/health",
  });
});

app.use(errorHandler);

async function start() {
  try {
    await connectDB();
    console.log("✅ Database connected");
  } catch (err) {
    console.error(
      "❌ Database connection failed, but server will still start:",
      err.message,
    );
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`====================================`);
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`✅ Healthcheck available at /api/health`);
    console.log(`====================================`);
  });
}

start();
