import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://ajithkumararun1111:cUOpbsv0Y2fomPPA@123456.e47oxpw.mongodb.net/`
  );
  console.log("MongoDB Connected...");
};
