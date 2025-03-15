import mongoose, { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ["income", "expense"], required: true },
});

export default models.Transaction || model("Transaction", TransactionSchema);
