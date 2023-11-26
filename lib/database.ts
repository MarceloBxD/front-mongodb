import mongoose from "mongoose"

export default async function connect () {
  try {
    await mongoose.connect("mongodb+srv://pes:materiapes123@tickets.wldcwet.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("MongoDB connected");
  } catch (err:any) {
    throw new Error(err.message);
  }
}
