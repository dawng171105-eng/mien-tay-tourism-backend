import mongoose from "mongoose";

export async function connectDB() {
  const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URI;
  if (!mongoURI) {
    throw new Error("MongoDB URI not provided in environment variables");
  }

  await mongoose.connect(mongoURI);
  console.log("✅ MongoDB connected successfully");
}
