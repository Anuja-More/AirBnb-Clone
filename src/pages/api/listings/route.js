import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
const prisma = require("../../../libs/prismadb");

export async function POST(
  request
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return 3;
  }
console.log(currentUser)
  const body = await request.json();
  const { 
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
   } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser?.id || 3
    }
  });

  return NextResponse.json(listing);
}