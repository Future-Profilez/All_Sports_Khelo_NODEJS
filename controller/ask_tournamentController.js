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
    const updateduser_id = Number(user_id);
    const updatedstate_id = Number(state_id);
    const updatedcity_id = Number(city_id)
    const updatedcountry_id = Number(country_id);
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
        user_id: updateduser_id,
        name,
        slug_name,
        description,
        content,
        tournament_type,
        startdate: startDateObj,
        enddate: endDateObj,
        address,
        country_id: updatedcountry_id,
        state_id: updatedstate_id,
        city_id: updatedcity_id,
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
   const typeParam = req.params.type;
    let list_ask_tournaments_whereClause;
    if (Number(typeParam) !== 0) {
      list_ask_tournaments_whereClause = await prisma.ask_tournaments.findMany({
        where : {
          user_id  : Number(typeParam)
        },
        include: {
          country: true,
          state: true,
          city: true,
        },
        orderBy: {
          id: "desc",
        }
      });
    } else { 
      list_ask_tournaments_whereClause = await prisma.ask_tournaments.findMany({
        include: {
          country: true,
          state: true,
          city: true,
        },
        orderBy: {
          id: "desc",
        }
      });
    }
    

    const data = convertBigIntToString(list_ask_tournaments_whereClause);

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

// exports.list_ask_tournaments = async (req, res) => {
//   try {
//     const typeParam = req.params.type;

//     // ✅ validate param first
//     if (!typeParam || isNaN(typeParam)) {
//       return res.status(400).json({
//         status: false,
//         message: "Invalid type parameter",
//       });
//     }

//     const isAll = typeParam === "0";

//     const whereClause = isAll
//       ? {}
//       : { user_id: BigInt(typeParam) };

//     const all_ask_tournaments = await prisma.ask_tournaments.findMany({
//       where: whereClause,
//       include: {
//         country: true,
//         state: true,
//         city: true,
//       },
//       orderBy: {
//         id: "desc",
//       },
//     });

//     const data = convertBigIntToString(all_ask_tournaments);

//     const updateddata = data.map((item) => ({
//       ...item,
//       thumbnail: item.thumbnail
//         ? `${process.env.APP_URL}${item.thumbnail}`
//         : false,
//       bannerimage: item.bannerimage
//         ? `${process.env.APP_URL}${item.bannerimage}`
//         : false,
//     }));

//     return res.status(200).json({
//       status: true,
//       message: "All tournaments fetched successfully!",
//       data: updateddata,
//     });

//   } catch (error) {
//     console.error("Prisma error:", error);
//     return res.status(500).json({
//       status: false,
//       message: "Internal server error",
//       error: error.message,
//     });
//   }
// };

exports.asktournamentOverview = async (req, res) => {
  try {
    const slug = req?.params?.slug;
    const data = await prisma.ask_tournaments.findFirst({
      where: {
        slug_name: slug,
      },
      include: {
        country: true,
        state: true,
        city: true
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