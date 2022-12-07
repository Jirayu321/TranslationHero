import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: false },
  mobilePhone: { type: String, required: false },
  profilePicture: { type: Array, require: false },
  imageURLs: { type: Array, require: false },
  address: { type: String, required: false },
  district: { type: String, required: false },
  province: { type: String, required: false },
  country: { type: String, required: false },
  postalCode: { type: String, required: false },
});

export default mongoose.model("User", UserSchema);
