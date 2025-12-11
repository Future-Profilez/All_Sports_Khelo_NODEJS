const prisma = require('../lib/prisma')
const convertBigIntToString = require('../helper/convertBigInt')

const academies = async (req, res) => {
    try {
        const list = await prisma.academies.findMany({
                where: { status: 1 , is_active: 1 },
                select: {
                    id: true,
                    slug_name: true,
                    address: true,
                }
            });
        const data = convertBigIntToString(list);
        console.log('no of academies :', data.length);
        if (data && data.length < 1) {
            return res.status(200).json({
                status: false,
                message: "No academies found"
            })
        }
        return res.status(200).json({
            status: true,
            message: "Academies fetched succesfully",
            academies: data
        })
    } catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error
        })
    }
}

module.exports = { academies }