const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendOTPEmail = async(email, otp)=>{
    await transporter.sendMail({
        from:`"My App" <${process.env.SMTP_USER}>`,
        to:email,
        subject: "Email OTP verification",
        html: `<h3>Your otp is<b>${otp}</b></h3> <p>Valid for 10 minutes.</p>`
    });
};