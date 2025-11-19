import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: "HoodAnix <onboarding@resend.dev>",
            to: "bilalusman1291@gmail.com",
            subject: "New Contact Message",
            html: `
        <h2>New Message from HoodAnix Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
