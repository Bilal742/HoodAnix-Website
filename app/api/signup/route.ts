import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import { connectDB } from "@/app/lib/mongodb";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        await connectDB();

        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            provider: "credentials"
        });

        return NextResponse.json({ message: "Signup successful" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
