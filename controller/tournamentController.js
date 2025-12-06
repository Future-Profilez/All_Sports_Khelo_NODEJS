const prisma = require("../lib/prisma")
const convertBigIntToString = require('../helper/convertBigInt')

// const convertBigIntToString = (data) => {
//   return JSON.parse(JSON.stringify(data, (_, value) =>
//     typeof value === "bigint" ? value.toString() : value
//   ));
// };

const fetchTournament = async (req, res) => {
    try {
        const tournament = await prisma.tournaments.findMany();
        const tournaments = convertBigIntToString(tournament);
        
        return res.status(200).json({
            message: "Tournaments fetched successfully!",
            data : tournaments
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

module.exports = { fetchTournament }
