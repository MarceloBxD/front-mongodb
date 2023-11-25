import mongoose, { ConnectOptions } from "mongoose"

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
}
