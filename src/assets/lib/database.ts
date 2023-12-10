import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || "");
  } catch (err: any) {
    throw new Error(err.message);
  }
}
