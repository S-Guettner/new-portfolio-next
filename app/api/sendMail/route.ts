import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Wrong Request method' }, { status: 405 });
    }

    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'your-smtp-server.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password',
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'your-email@example.com',
            subject: `New message from ${name}`,
            text: message,
        });

        return NextResponse.json({}, { status: 200 });
    } catch (err) {
        console.error('Error in POST route:', err);

        return NextResponse.json({ message: 'Internal server error' }, { status: 400 });
    }
};
