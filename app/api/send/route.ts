import { NextRequest, NextResponse } from 'next/server';
import * as postmark from 'postmark';


export const POST = async (req: NextRequest, res: NextResponse) => {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Wrong Request method' }, { status: 405 });
    }

    const ServerClientKey = process.env.ServerClientKey as string;
   

    const { name, email, message } = await req.json();
    var client = new postmark.ServerClient(ServerClientKey);
    

    try {
   
       await client.sendEmail({
           From: 'sven@sven-guettner.dev',
           To: 'sven@sven-guettner.dev',
           Subject: 'Hello from Postmark',
           HtmlBody: `<p><strong>${name}</strong></p><p><strong>${email}</strong></p><p><strong>${message}</strong></p>`,
           TextBody: message,
           MessageStream: 'outbound',
       });

        return NextResponse.json({ name, email, message }, { status: 200 });
    } catch (err) {
        console.error('Error in POST route:', err);

        return NextResponse.json({ message: 'Internal server error' }, { status: 400 });
    }
};
