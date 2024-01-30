import prismadb from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, user, email, dob, password } = body;

    const newUser = await prismadb.user.create({
      data: {
        username: user,
        email,
        password,
        dob,
        name,
      },
    });

    return NextResponse.json({ status: 200, res: newUser });
  } catch (error) {
    console.log(["CODE_ERROR"], error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const users = await prismadb.user.findMany();

    return NextResponse.json({ status: 200, res: users });
  } catch (error) {
    console.log(["CODE_ERROR"], error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
