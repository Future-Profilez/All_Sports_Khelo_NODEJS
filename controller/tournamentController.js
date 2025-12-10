const prisma = require("../lib/prisma")
const convertBigIntToString = require('../helper/convertBigInt')

const fetchTournament = async (req, res) => {
    try {
        const tournament = await prisma.tournaments.findMany();
        const tournaments = convertBigIntToString(tournament);
        return res.status(200).json({ message: "Tournaments fetched successfully!", data: tournaments });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error });
    }
}

const fetchContent = async (req, res) => {
    try {
        const slug = req.params.slug;
        const data = await prisma.tournaments.findFirst({
            where: { slug_name: slug },
            include: {
                contents: true,
            },
        });
        if (!data) {
            return res.status(404).json({ message: "Tournament not found", });
        }
        const content = convertBigIntToString(data);
        return res.status(200).json({ message: "Tournament content fetched successfully!", content: content, });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};


module.exports = { fetchTournament, fetchContent }
