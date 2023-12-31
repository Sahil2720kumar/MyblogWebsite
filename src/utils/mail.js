import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

async function main() {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: "user@gmail.com",
        subject: "hello world",
        html: "html"
    });
    return info?.messageId;
}
