// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import User from "@/app/models/User";
// import mongoose from "mongoose";
// import { connectDB } from "@/app/lib/mongodb";

// const connectToDB = async () => {
//   if (mongoose.connections[0].readyState) {
//     return;
//   }
//   await connectDB();
// };

// export async function POST(req: Request) {
//   try {
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return NextResponse.json({ message: "All fields are required" }, { status: 400 });
//     }

//     await connectToDB();

//    const userExists = await User.findOne({ email });
//     if (userExists) {
//       return NextResponse.json({ message: "User already exists" }, { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       provider: "credentials"
//     });

//     return NextResponse.json({ message: "Signup successful" }, { status: 201 });

//   } catch (error: any) {
//     console.error("Signup error:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error", error: error.message },
//       { status: 500 }
//     );
//   }
// }


import clientPromise from "@/app/lib/mongodb";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    await db.collection("users").insertOne({ name, email, password: hashedPassword });

    return new Response(JSON.stringify({ message: "User created" }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error creating user" }), { status: 500 });
  }
}
