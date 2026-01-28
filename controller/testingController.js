const prisma = require("../lib/prisma")

const addDate = async (req, res) => {
  try {
    const { startdate } = req.body;
    const test = await prisma.testing_date.create({
      data: {
        startdate: new Date(startdate),
      },
    });
    res.status(201).json({
      message: "Date added successfully",
      data: test,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addDate }