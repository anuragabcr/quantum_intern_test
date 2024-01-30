import prismadb from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prismadb.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return NextResponse.json({ status: 200, res: user });
  } catch (error) {
    console.log(["CODE_ERROR"], error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
