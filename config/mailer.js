const nodemailer = require('nodemailer');
const { getEmailOtpTemplate } = require('../utils/emailTemplate');

const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        // user: "mern.dev.fp01@gmail.com",
        // pass: "xqblmcptbmvozyrn",
    },
});


transporter.verify()
    .then(() => console.log("SMTP is connected"))
    .catch(err => console.error("SMTP error:", err));


exports.sendOTPEmail = async (email, name, otp) => {

    const html = getEmailOtpTemplate({ name, otp });

    return transporter.sendMail({
        from: `"My App" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Email OTP verification",
        html,
    });
};