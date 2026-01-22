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
    console.log("bannerimage ", req.body?.bannerimage);

    console.log("bannerimage_path", req?.body?.bannerimage_path);
    console.log("Added File", req?.files?.bannerimage && req?.files?.bannerimage[0]?.filename);

    const bannerImagePath = () => {
      if (req?.body?.bannerimage_path) {
        return `/uploads/default${req?.body?.bannerimage_path}`
      } else {
        return `/uploads/${req?.files?.bannerimage && req?.files?.bannerimage[0]?.filename}`
      }
    }

    const thumbnailImagePath = () => {
      if (req?.body?.thumbnail_path) {
        return `/uploads/default${req?.body?.thumbnail_path}`
      } else {
        return `/uploads/userthumnail/${req?.files?.thumbnail && req?.files?.thumbnail[0]?.filename}`
      }
    }

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
      : req.body.bannerimage || null;
    console.log("banner image ", bannerimage);
    const thumbnail = req.files?.thumbnail
      ? BASE_URL + req.files.thumbnail[0].filename
      : req.body.thumbnail || null;

    const brochure = 'fsdf'
    // const brochure = req.files?.brochure
    //   ? BASE_URL + req.files.brochure[0].filename
    //   : null;
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
        bannerimage: bannerImagePath(),
        thumbnail: thumbnailImagePath(),
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
    const all_tournaments = await prisma.ask_tournaments.findMany({
      include: {
            country: true,
            state:true,
            city:true
        },
    });
    const data = convertBigIntToString(all_tournaments);

    const updateddata = data.map((item, i) => {
      return {
        ...item,
        thumbnail: item?.thumbnail ? `${process.env.APP_URL}${item?.thumbnail}` : false,
        bannerimage: item?.bannerimage ? `${process.env.APP_URL}${item?.bannerimage}` : false
      }
    })

    return res.status(200).json({
      message: "All tournaments fetched successfully!",
      status: false,
      data: updateddata
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
    const content = convertBigIntToString(data);
    const updateddata = {
      ...content,
      thumbnail: content?.thumbnail
        ? `${process.env.APP_URL}${content.thumbnail}`
        : false,
      bannerimage: content?.bannerimage
        ? `${process.env.APP_URL}${content.bannerimage}`
        : false,
    };

    if (!updateddata) {
      return res.status(200).json({
        status: false,
        message: "Tournament not found"
      });
    }
    return res.status(200).json({
      status: true,
      message: "Tournament content fetched successfully!",
      content: updateddata,
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