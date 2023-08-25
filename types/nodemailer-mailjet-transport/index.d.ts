// types/nodemailer-mailjet-transport/index.d.ts

declare module 'nodemailer-mailjet-transport' {
    import { Transporter, SendMailOptions, SentMessageInfo } from 'nodemailer';

    interface AuthOptions {
        apiKey: string;
        apiSecret: string;
    }

    interface MailjetTransportOptions {
        auth: AuthOptions;
    }

    function mailjetTransport(options: MailjetTransportOptions): Transporter<SendMailOptions, SentMessageInfo>;

    export = mailjetTransport;
}
