const nodemailer = require('nodemailer');
const { getEmailOtpTemplate, setForgotPasswordTemplate } = require('../utils/emailTemplate');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


transporter.verify()
    .then(() => console.log("SMTP is connected"))
    .catch(err => console.error("SMTP error:", err));


exports.sendOTPEmail = async (email, name, otp) => {

    const html = getEmailOtpTemplate({ name, otp });
    const sent = transporter.sendMail({
        from: `"All Sports Khelo" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Email OTP verification",
        html,   
    });
    return await sent;
};

exports.sendForgotPasswordEmail = async (email, name, reset_link) => {
    
    const html = setForgotPasswordTemplate({ name, reset_link });

    return transporter.sendMail({
        from:`"All Sports Khelo" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Reset your password",
        html,
    })
}
