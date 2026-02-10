const bcrypt = require('bcryptjs')
const { sendOTPEmail, sendForgotPasswordEmail } = require('../config/mailer.js')
const jwt = require('jsonwebtoken');
const { generateOTP, otpExpiry } = require('../utils/otp');
const prisma = require('../lib/prisma.js');

exports.register = async (req, res) => {
    try {
        const { name, phone, email, password, country_code } = req.body;
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
      return res.json({ status: false, message: "User not found" });
    }

    if (!user.otp) {
      return res.json({ status: false, message: "Otp not generated" });
    }

    if (user.otp_expires_at < new Date()) {
      return res.json({ status: false, message: "Otp expired" });
    }

    if (user.otp !== otp) {
      return res.json({ status: false, message: "Invalid OTP" });
    }

    await prisma.ask_users.update({
      where: { email },
      data: {
        otp_verified: true,
        otp: null,
        otp_expires_at: null
      }
    });

    return res.json({ status: true, message: "OTP verified successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// exports.checkIsloggedIn = async (req, res) => {
//     try {
//         if (req?.user) {
//             return res.status(200).json({ status: true, message: "You are logged in already.", user: req?.user })
//         } else {
//             return res.status(200).json({ status: false, message: "Unauthenticated !!" })
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ status: false, message: "Internal server error", error })
//     }
// }

exports.checkIsloggedIn = async (req, res) => {
    try {
        if (!req.user?.id) {
            return res.status(200).json({ status: false, message: "Unauthenticated" });
        }
        const user = await prisma.ask_users.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                otp_verified: true
            }
        });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" });
        }
        return res.status(200).json({ status: true, message: "You are logged in", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" })
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

exports.fetchUser = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const user = await prisma.ask_users.findUnique({
            where: { id: id },
        })
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" });
        }
        return res.status(200).json({ status: true, message: "User fetch successfully.", user })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal server error." });
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, phone, email, oldpassword, newpassword } = req.body;
        const user = await prisma.ask_users.findUnique({ where: { id: id } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found." });
        }

        const emailChanged = email && email !== user.email;
        if (emailChanged) {
            await prisma.ask_users.update({
                where: { id: id },
                data: {
                    otp_verified: false
                }
            })
        }

        const updateData = {
            name,
            email,
            phone,
            updated_at: new Date()
        };

        if (oldpassword && newpassword) {
            const isMatch = await bcrypt.compare(oldpassword, user.password);
            if (!isMatch) {
                return req.status(400).json({ status: false, message: "Old password is incorrect." });
            }

            updateData.password = await bcrypt.hash(newpassword, 10);
        }

        await prisma.ask_users.update({
            where: { id: id },
            data: updateData
        });
        return res.status(200).json({ status: true, message: "Profile updated successfully." })
    } catch (error) {
        console.log(error);
        return res.return(500).json({ status: false, message: "Internal server error", error })
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await prisma.ask_users.findUnique({ where: { email } });
        if (!user) {
            return res.status(200).json({ status: false, message: "User not found" });
        }

        const resetToken = jwt.sign(
            { id: user.id, email: user.email, type: "reset" },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )

        const reset_link = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        sendForgotPasswordEmail(user.email, user.name, reset_link)
        return res.status(200).json({ status: true, message: "Reset password link sent to your email. Please Verify." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal server error", error })
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;

        if (!token) {
            return res.status(200).json({ status: false, message: "Token missing." });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (decode.type !== "reset") {
            return res.status(200).json({ status: false, message: "Invalid token." });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await prisma.ask_users.update({
            where: { id: decode.id },
            data: {
                password: hashPassword,
            }
        });
        return res.status(200).json({ status: true, message: "Password reset successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Internal server error." })
    }
}