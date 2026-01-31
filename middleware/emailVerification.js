const prisma = require("../lib/prisma");

exports.emailVerification = async (req, res) => {
    try {
        const id = Number(req.user.id);

        const user = await prisma.ask_users.findUnique({ where: { id: id } })
        if (!user) {
            return res.status(200).json({status:false, message:"User not found."});
        }
        
    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal server error." });
    }
}