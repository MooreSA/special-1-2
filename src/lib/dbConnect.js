import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/test";

if (!MONGO_URI) {
  throw new Error("You must provide a MongoDB URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opt = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opt).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
