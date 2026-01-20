const convertBigIntToString = require("../helper/convertBigInt");
const prisma = require("../lib/prisma");
const { toSlug } = require("../utils/toSlug");

exports.add_ask_tournament = async (req, res) => {
  try {
    const {
      sport_id,
      user_id,
      name,
      description,
      content,
      tournament_type,
      startdate,
      enddate,
      address,
      country_id,
      state_id,
      city_id,
      url,
      prize,
      fees,
      participation_limit,
      publish_status,
    } = req.body;
    console.log("req.body ", req.body);

    if (!sport_id || !name) {
      return res.status(200).json({
        status: false,
        message: "Required fields missing",
      });
    }
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);

    if (endDateObj < startDateObj) {
      return res.status(200).json({
        status: false,
        message: "End date cannot be before start date",
      });
    }

    const slug_name = toSlug(name);
    const BASE_URL = process.env.APP_URL + "/uploads/";

    const bannerimage = req.files?.bannerimage
      ? BASE_URL + req.files.bannerimage[0].filename
      : null;

    const thumbnail = req.files?.thumbnail
      ? BASE_URL + req.files.thumbnail[0].filename
      : null;

    const brochure = req.files?.brochure
      ? BASE_URL + req.files.brochure[0].filename
      : null;
    // console.log("model ",await prisma);
    const tournament = await prisma.ask_tournaments.create({
      data: {
        sport_id,
        user_id,
        name,
        slug_name,
        description,
        content,
        tournament_type,
        startdate: startDateObj,
        enddate: endDateObj,
        address,
        country_id,
        state_id,
        city_id,
        bannerimage,
        thumbnail,
        brochure,
        url,
        prize,
        fees,
        participation_limit: Number(participation_limit),
        publish_status: Number(publish_status),
      },
    });

    return res.status(200).json({
      status: true,
      message: "Tournament added successfully",
      data: convertBigIntToString(tournament),
    });
  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

exports.list_ask_tournaments = async (req, res) => {
  try {
    const all_tournaments = await prisma.ask_tournaments.findMany();
    const data = convertBigIntToString(all_tournaments)
    return res.status(200).json({
      message: "All tournaments fetched successfully!",
      status: false,
      data: data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json(
      {
        status: false,
        message: "Internal server error",
        error: error
      })
  }
};

exports.asktournamentOverview = async (req, res) => {
  try {
    const slug = req?.params?.slug;
    const data = await prisma.ask_tournaments.findFirst({
      where: {
        slug_name: slug,
      },
    });
    if (!data) {
      return res.status(200).json({
        status: false,
        message: "Tournament not found"
      });
    }
    const content = convertBigIntToString(data);
    return res.status(200).json({
      status: true,
      message: "Tournament content fetched successfully!",
      content: content,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error
    });
  }
};