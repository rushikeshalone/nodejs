import mongoose from "mongoose";
import "../config/env.js";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI?.trim();
  if (!mongoUri) {
    throw new Error("MONGO_URI is not set. Add it to the project .env file.");
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
};

export default connectDB;
