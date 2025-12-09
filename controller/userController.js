const prisma = require("../lib/prisma")

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const isExist = await prisma.user.findUnique({ where: { email } })
        if (isExist) {
            res.status(400).json({ message: "User already exist." })
        }

        const user = await prisma.user.create({
            data: { name, email }
        })
        res.status(200).json({ message: "User created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Interval server error." })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(201).json({ message: "User fetched successfully", users })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error." })
    }
}

const editUser = async (req, res) => {
    try {
        const id  = Number(req.params.id);
        const { name, email } = req.body;

        const isExist = await prisma.user.findUnique({ where: { id } });
        if (!isExist) {
            return res.status(400).json({ message: "User not found." });
        }

        const user = await prisma.user.update({
            where: { id },
            data: { name, email }
        })
        return res.status(200).json({ message: "User updated successfully.", user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const isExist = await prisma.user.findUnique({ where: { id } });
        if (!isExist) {
            return res.status(400).json({ message: "User not found." })
        }

        const user = await prisma.user.delete({
            where: { id }
        })
        return res.status(200).json({ message: "User deleted successfully.", user });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internl server error." })
    }
}

module.exports = { createUser, getAllUsers, editUser, deleteUser }