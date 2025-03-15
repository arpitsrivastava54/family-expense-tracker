import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["parent", "child"], default: "child" },
  familyId: { type: mongoose.Schema.Types.ObjectId, ref: "Family" }, // Link to family
}, { timestamps: true });

export default models.User || model("User", UserSchema);
