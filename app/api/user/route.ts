import { connectToDatabase } from "@/lib/db";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (!userId) return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });

  await connectToDatabase();
  const user = await User.findById(userId);
  if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

  return NextResponse.json({ success: true, user });
}

export async function PATCH(req: Request) {
  const { userId, name, email } = await req.json();
  await connectToDatabase();

  const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
  if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

  return NextResponse.json({ success: true, user });
}
