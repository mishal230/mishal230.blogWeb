import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    
    console.log("Form submitted:", { name, email, message });

    return NextResponse.json({ message: "Your message was sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred while sending your message." }, { status: 500 });
  }
}
