import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
const prisma = require("../../libs/prismadb");
const saltRounds = 10;
export default async function POST(req, res) {
  const { email, name, password } = req.body;
  console.log(req.body);

  const hashedPassword = password ? await bcrypt.hash(password, saltRounds) : '';

  const user = await prisma?.user?.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}


