import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: Number,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
