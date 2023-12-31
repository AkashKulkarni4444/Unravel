import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  userType: { type: String, required:true}, //"Client" | "HealthcareProvider" | "InsuranceProvider" | "Admin"
});
export default mongoose.model("User", userSchema);
