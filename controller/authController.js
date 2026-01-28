const bcrypt = require('bcryptjs')
const { sendOTPEmail } = require('../config/mailer.js')
const jwt = require('jsonwebtoken');
const { generateOTP, otpExpiry } = require('../utils/otp');
const prisma = require('../lib/prisma.js');

exports.register = async (req, res) => {
    try {
        const { name, phone, email, password,country_code } = req.body;
        const isEmailExist = await prisma.ask_users.findUnique({ where: { email } });
        if (isEmailExist && isEmailExist.otp_verified) {
            return res.status(200).json({ status: true, message: "Email already register. Please login" })
        }

        const isPhoneExist = await prisma.ask_users.findUnique({ where: { phone } });
        if (isPhoneExist) {
            return res.status(200).json({ status: true, message: "Phone already exists." })
        }

        if (!isEmailExist) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.ask_users.create({
                data: {
                    name,
                    phone,
                    email,
                    country_code,
                    password: hashedPassword,
                }
            });
            return res.status(200).json({ status: true, message: "User register successfully. Please veriy email", user })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal server error", error })
    }
}

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found." })
        }

        if (user.otp_verified) {
            return res.status(200).json({ status: false, message: "Email already verified" })
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
        return res.status(200).json({ status: true, message: "OTP sent successfully." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal server error", error })
    } 
}

exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" })
        }
        if (!user.otp) {
            return res.status(200).json({ status: false, message: "Otp not generated." })
        }
        if (user.otp !== otp) {
            return res.status(200).json({ status: false, message: "Invalid otp" })
        }
        if (user.otp_expires_at < new Date()) {
            return res.status(200).json({ status: false, message: "Otp expired" })
        }

        await prisma.ask_users.update({
            where: { email },
            data: {
                otp_verified: true,
                otp: null,
                otp_expires_at: null
            },
        });
        return res.status(200).json({ status: true, message: "Otp verification successfully." })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal server error", error })
    }
}
exports.checkIsloggedIn = async (req, res) => {
    try {
        if (req?.user) {
            return res.status(200).json({ status: true, message: "You are logged in already.", user: req?.user })
        } else {
            return res.status(200).json({ status: false, message: "Unauthenticated !!" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal server error", error })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" })
        }

        if (!user.otp_verified) {
            return res.status(403).json({ status: false, message: "Verify your otp first" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).json({ status: false, message: "Invalid credentials" })
        }
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        const { password: _, ...safeUser } = user;

        return res.status(200).json({ status: true, message: "Login successfully", token, user: safeUser });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal server error", error })
    }
}