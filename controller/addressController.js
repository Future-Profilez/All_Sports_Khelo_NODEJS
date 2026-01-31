const prisma = require('../lib/prisma.js')
const convertBigIntToString = require('../helper/convertBigInt')


exports.countriesList = async (req, res) => {
    try {
        const all_countries = await prisma.countries.findMany();
        const data = convertBigIntToString(all_countries)
        return res.status(200).json({ message: "Countries fetched successfully!", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" })
    }
}



exports.statesList = async (req, res) => {
    try {
        const countryid = req.params.countryid;
        const all_states = await prisma.states.findMany({ where: { country_id: countryid } });
        const data = convertBigIntToString(all_states);
        return res.status(200).json({ message: "states fetched succesfully ", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" })
    }
}

exports.cityList = async (req, res) => {
    try {
        const stateid = req.params.stateid;
        const all_cities = await prisma.cities.findMany({ where: { state_id: stateid } });
        const data = convertBigIntToString(all_cities);
        return res.status(200).json({ message: "cities fetched succesfully ", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" })
    }
}
