const prisma = require("../lib/prisma");
const convertBigIntToString = require('../helper/convertBigInt')

exports.fetchSports = async (req, res) => {
    try {
        const sport = await prisma.sports.findMany();
        const data = convertBigIntToString(sport)
        return res.status(200).json({ message: "Sports fetch successfully!", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

exports.send_sport_enquiry = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            organization,
            sport_id,
            description
        } = req.body;
        if (!name || !sport_id || !phone) {
            return res.status(200).json({
                status: false,
                message: "Required fields missing"
            })
        }
        
        const sport_enquiry = await prisma.ask_sports_enquiries.create({
            data: {
                name,
                phone,
                email,
                organization,
                sport_id: Number(sport_id),
                description
            },
        });
        if (!sport_enquiry) {
            return res.status(200).json({
                status: false,
                message: "Unable to send your enquiry. Try after some time",
            })
        }
        return res.status(200).json({
            status: true,
            message: "Enquiry send succesfully",
            data: convertBigIntToString(sport_enquiry)
        })
    } catch (error) {
        console.log("ERROR : ", error);
        return res.status(500).json({
            status: false,
            error: error,
            message: "Something went wrong"
        })
    }
}
