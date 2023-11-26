import mongoose from "mongoose"

export default async function connect () {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
  } catch (err:any) {
    throw new Error(err.message);
  }
}
