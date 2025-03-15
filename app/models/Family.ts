import mongoose, { Schema, model, models } from "mongoose";

const FamilySchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

export default models.Family || model("Family", FamilySchema);
