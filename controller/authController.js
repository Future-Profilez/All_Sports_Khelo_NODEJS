const bcrypt = require('bcryptjs')
const { sendOTPEmail } = require('../config/mailer.js')
const jwt = require('jsonwebtoken');
const { generateOTP, otpExpiry } = require('../utils/otp');
const prisma = require('../lib/prisma.js');

exports.register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const isEmailExist = await prisma.ask_users.findUnique({ where: { email } });
        if (isEmailExist && isEmailExist.otp_verified) {
            return res.status(200).json({ success: true, message: "Email already register. Please login" })
        }

        const isPhoneExist = await prisma.ask_users.findUnique({ where: { phone } });
        if (isPhoneExist) {
            return res.status(200).json({ success: true, message: "Phone already exists." })
        }

        if (!isEmailExist) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.ask_users.create({
                data: {
                    name,
                    phone,
                    email,
                    password: hashedPassword,
                }
            });
            return res.status(200).json({ success: true, message: "User register successfully. Please veriy email", user })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error", error })
    }
}

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ success: false, message: "User not found." })
        }

        if (user.otp_verified) {
            return res.status(200).json({ success: false, message: "Email already verified" })
        }

        const otp = generateOTP();

        await prisma.ask_users.update({
            where: { email },
            data: {
                otp,
                otp_expires_at: otpExpiry(),
            }
        })

        await sendOTPEmail(email, user.name, otp);
        return res.status(200).json({ success: true, message: "OTP sent successfully." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error", error })
    }
}

exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ success: false, message: "User not found" })
        }
        if (!user.otp) {
            return res.status(200).json({ success: false, message: "Otp not generated." })
        }
        if (user.otp !== otp) {
            return res.status(200).json({ success: false, message: "Invalid otp" })
        }
        if (user.otp_expires_at < new Date()) {
            return res.status(200).json({ success: false, message: "Otp expired" })
        }

        await prisma.ask_users.update({
            where: { email },
            data: {
                otp_verified: true,
                otp:null,
                otp_expires_at:null
            },
        });
        return res.status(200).json({ success: true, message: "Otp verification successfully." })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error", error })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ success: false, message: "User not found" })
        }

        if (!user.otp_verified) {
            return res.status(403).json({success: false, message:"Verify your otp first"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).json({ success: false, message: "Invalid credentials" })
        }
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        return res.status(200).json({ success: true, message: "Login successfully", token, user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error", error })
    }
}