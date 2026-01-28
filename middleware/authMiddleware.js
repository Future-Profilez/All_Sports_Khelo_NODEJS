const prisma = require("../lib/prisma");
const jwt = require('jsonwebtoken')

exports.protect = async (req, res, next) => {
    try {
        const tokenkey = req?.headers?.authorization || req?.headers?.Authorization;
        const token = tokenkey && tokenkey.split(" ")[1];

        if (!token) {
            return res.status(200).json({ success: false, message: "Unauthorize user" })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await prisma.ask_users.findFirst({
            where: { id: decode.id },
            select: { id: true, email: true, name: true }
        });
        if (!user) {
            return res.status(200).json({ success: false, message: "User not found." })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(200).json({ success: false, message: "Internal server error" });
    }
}