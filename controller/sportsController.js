const prisma = require('../lib/prisma')
const convertBigIntToString = require('../helper/convertBigInt')

const fetchSports = async (Req, res) => {
    try {
        const sport = await prisma.sports.findMany({
            where : { 
                slug:"tennis"
            }
        });
        const data = convertBigIntToString(sport)
        return res.status(200).json({ message: "Sports fetch successfully!", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { fetchSports }