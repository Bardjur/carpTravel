import { NextResponse } from "next/server";
import { slides } from '../data';

export async function GET() {
  return await NextResponse.json(slides);
}