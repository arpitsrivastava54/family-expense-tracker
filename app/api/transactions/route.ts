import { connectToDatabase } from "@/lib/db";
import Transaction from "@/app/models/Transaction";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, amount, category, date, type } = await req.json();
    await connectToDatabase();
    
    const transaction = new Transaction({ userId, amount, category, date, type });
    await transaction.save();

    return NextResponse.json({ success: true, transaction });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  await connectToDatabase();
  const transactions = await Transaction.find({ userId }).sort({ date: -1 });

  return NextResponse.json({ success: true, transactions });
}

export async function DELETE(req: Request) {
  const { transactionId } = await req.json();
  await connectToDatabase();

  const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
  if (!deletedTransaction) return NextResponse.json({ success: false, message: "Transaction not found" }, { status: 404 });

  return NextResponse.json({ success: true, message: "Transaction deleted" });
}

export async function PATCH(req: Request) {
  const { transactionId, amount, category, type } = await req.json();
  await connectToDatabase();

  const updatedTransaction = await Transaction.findByIdAndUpdate(transactionId, { amount, category, type }, { new: true });
  if (!updatedTransaction) return NextResponse.json({ success: false, message: "Transaction not found" }, { status: 404 });

  return NextResponse.json({ success: true, updatedTransaction });
}

