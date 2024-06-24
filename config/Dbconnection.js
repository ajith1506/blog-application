import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  await mongoose.connect(process.env.DB_HOST);
  console.log("MongoDB Connected...");
};
