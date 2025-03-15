import { connectToDatabase } from "@/lib/db";
import Family from "@/app/models/Family";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { familyName, parentId } = await req.json();
  await connectToDatabase();

  const newFamily = new Family({ name: familyName, members: [parentId] });
  await newFamily.save();

  return NextResponse.json({ success: true, family: newFamily });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const familyId = searchParams.get("familyId");

  await connectToDatabase();
  const family = await Family.findById(familyId).populate("members");
  if (!family) return NextResponse.json({ success: false, message: "Family not found" }, { status: 404 });

  return NextResponse.json({ success: true, family });
}
