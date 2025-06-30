import  connectDB  from "@/db/connection";
import { Email } from "@/lib/Model";
import { NextResponse } from "next/server";

export async function POST(request) {
   connectDB();

  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const exists = await Email.findOne({ email });
    if (exists) {
      return new Response(JSON.stringify({ error: 'Email already exists' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await Email.create({ email });

    return new Response(JSON.stringify({ message: 'Email saved successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Database error',err }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Get request for getting Emails

export async function GET() {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });

    const formattedEmails = emails.map((item) => {
      const dateObj = new Date(item.createdAt);
      return {
        email: item.email,
        date: dateObj.toLocaleDateString('en-PK'),
        time: dateObj.toLocaleTimeString('en-PK'),
        day: dateObj.toLocaleDateString('en-PK', { weekday: 'long' }),
      };
    });

    return NextResponse.json(formattedEmails);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch emails',err });
  }
}

