const convertBigIntToString = require("../helper/convertBigInt");
const prisma = require("../lib/prisma");
const { toSlug } = require("../utils/toSlug");


async function getCityData(c_id) {
      if (!c_id) return null;
      const city = await prisma.cities.findFirst({
        where: { id: c_id },
      });
      return city ? convertBigIntToString(city) : null;
}

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

    const bannerImagePath = () => {
      if (req?.body?.bannerimage_path || req?.files?.bannerimage) {
        if (req?.body?.bannerimage_path) {
          return `/uploads/${req?.body?.bannerimage_path}`
        } else {
          return `/uploads/${req?.files?.bannerimage && req?.files?.bannerimage[0]?.filename}`
        }
      }
      return `/uploads/tournament-default-banner/1.png`
    }

    const thumbnailImagePath = () => {
      if (req?.body?.thumbnail_path || req?.files?.thumbnail) {
        if (req?.body?.thumbnail_path) {
          return `/uploads/${req?.body?.thumbnail_path}`
        } else {
          return `/uploads/${req?.files?.thumbnail && req?.files?.thumbnail[0]?.filename}`
        }
      }
      return `/uploads/tournament-default-thumb/1.png`
    }

    if (!sport_id || !name || !country_id || !state_id) {
      return res.status(200).json({
        status: false,
        message: "Required fields missing",
      });
    }
    if (fees && isNaN(Number(fees))) {
      return res.status(200).json({
        status: false,
        message: "Fees must be a number",
      });
    }

    if (participation_limit && Number(participation_limit) <= 0) {
      return res.status(200).json({
        status: false,
        message: "Participation limit must be greater than 0",
      });
    }
    if (description && description.length > 500) {
      return res.status(200).json({
        status: false,
        message: "Description cannot exceed 500 characters",
      });
    }

    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
    const updateduser_id = Number(req?.user?.id);
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
    const existingTournament = await prisma.ask_tournaments.findFirst({
      where: { slug_name },
    });
    if (existingTournament) {
      return res.status(200).json({
        status: false,
        message: "Tournament name already exists in our database. List your tournament with some other unique name",
      });
    }
    const BASE_URL = process.env.APP_URL + "/uploads/";

    const bannerimage = req.files?.bannerimage
      ? BASE_URL + req.files.bannerimage[0].filename
      : req.body.bannerimage || null;
    const thumbnail = req.files?.thumbnail
      ? BASE_URL + req.files.thumbnail[0].filename
      : req.body.thumbnail || null;

    const brochure = 'fsdf'
    // const brochure = req.files?.brochure
    //   ? BASE_URL + req.files.brochure[0].filename
    //   : null;
    const tournament = await prisma.ask_tournaments.create({
      data: {
        sport_id : sport_id !== undefined ? sport_id : null,
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
      content: convertBigIntToString(tournament),
    });
  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

// exports.list_ask_tournaments = async (req, res) => {
//   try {
//     const typeParam = req.params.type;
//     const sports_id = req.query?.sports_id; 
//     let list_ask_tournaments_whereClause;

//     if(sports_id){
//       list_ask_tournaments_whereClause = await prisma.ask_tournaments.findMany({
//         where: { sport_id: sports_id},
//         include: {
//           country: true,
//           state: true,
//           city: true,
//         },
//         orderBy: {
//           id: "desc",
//         }
//       });
//     } else { 
//       if (Number(typeParam) !== 0) {
//         list_ask_tournaments_whereClause = await prisma.ask_tournaments.findMany({
//           where: {
//             user_id: Number(typeParam)
//           },
//           include: {
//             country: true,
//             state: true,
//             city: true,
//           },
//           orderBy: {
//             id: "desc",
//           }
//         });
//       } else {
//         list_ask_tournaments_whereClause = await prisma.ask_tournaments.findMany({
//           include: {
//             country: true,
//             state: true,
//             city: true,
//           },
//           orderBy: {
//             id: "desc",
//           }
//         });
//       }
//     }



//     const data = convertBigIntToString(list_ask_tournaments_whereClause);

//     const updateddata = data.map((item, i) => {
//       return {
//         ...item,
//         thumbnail: item?.thumbnail ? `${process.env.APP_URL}${item?.thumbnail}` : false,
//         bannerimage: item?.bannerimage ? `${process.env.APP_URL}${item?.bannerimage}` : false
//       }
//     })

//     return res.status(200).json({
//       message: "All tournaments fetched successfully!",
//       status: false,
//       data: updateddata
//     })
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json(
//       {
//         status: false,
//         message: "Internal server error",
//         error: error
//       })
//   }
// };

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


exports.list_ask_tournaments = async (req, res) => {
  try {
    const typeParam = Number(req?.params?.type);
    const sports_id = req.query?.sports_id;
    const country_id = req.query?.country_id;
    const state_id = req.query?.state_id;
    const city_id = req.query?.city_id;
    const search = req.query?.search;
    const startdate = req.query?.startdate;
    const enddate = req.query?.enddate;
    const include = {
      country: true,
      state: true,
      // city: true,
    };
    // const include = {
    //   city: city_id ? true : false,
    // };

    let where = {};
    // Sports ID filter
    if (sports_id !== '' || sports_id !== undefined) {
      where.sport_id = sports_id;
    }
    if (country_id && country_id !== undefined) {
      where.country_id = Number(country_id);
    }
    if (state_id && state_id !== undefined) {
      where.state_id = Number(state_id);
    }
    if (city_id && city_id != undefined) {
      where.city_id = Number(city_id);
    }
    if (startdate && enddate) {
      const start = new Date(startdate);
      const end = new Date(enddate);

      where.AND = [
        { startdate: { lte: end } },  // tournament starts before range ends
        { enddate: { gte: start } }   // tournament ends after range starts
      ];
    }
    if (search && search.trim() !== "") {
      where.OR = [
        {
          name: {
            contains: search,
            // mode: "insensitive",
          },
        },
      ];
    }


    
    // Logged in user tournaments filter
    if (typeParam) {
      where.user_id = Number(req?.user?.id);
    }
    const tournaments = await prisma.ask_tournaments.findMany({
      where,
      include,
      // orderBy: {startdate: "asc",}
      orderBy: { startdate: "desc", }
    });


    async function getCityData(c_id) {
      if (!c_id) return null;

      const city = await prisma.cities.findFirst({
        where: { id: c_id },
      });

      return city ? convertBigIntToString(city) : null;
    }


    const data = convertBigIntToString(tournaments);
    const updateddata = await Promise.all(
      data.map(async (item) => {
        const city = await getCityData(item.city_id);
        return {
          ...item,
          city: city, // full city object or null
          thumbnail: item?.thumbnail
            ? `${process.env.APP_URL}${item.thumbnail}`
            : false,
          bannerimage: item?.bannerimage
            ? `${process.env.APP_URL}${item.bannerimage}`
            : false,
        };
      })
    );

    return res.status(200).json({
      status: true,
      message: "All tournaments fetched successfully!",
      content: updateddata,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
};



// All sports listing that are included in tournaments
exports.all_tournaments_sports = async (req, res) => {
  try {
    const tournaments = await prisma.ask_tournaments.findMany({
      select: {
        sport_id: true,
      },
      orderBy: {
        startdate: "desc",
      },
    });

    // Convert BigInt → string if needed
    const data = convertBigIntToString(tournaments);

    // Get unique sport IDs
    const activeSportIds = [...new Set(data.map(t => t.sport_id))];

    return res.status(200).json({
      status: true,
      message: "All active sports tournaments fetched successfully!",
      activeSports: activeSportIds,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
};



exports.delete_ask_tournament = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res.status(200).json({ status: false, message: "Invalid tournament id." })
    }
    if (!req.user?.id) {
      return res.status(401).json({ status: false, message: "Unauthorized" });
    }

    const tournament = await prisma.ask_tournaments.findFirst({
      where: {
        id,
        user_id: Number(req.user.id),
      },
    });

    if (!tournament) {
      return res.status(404).json({ status: false, message: "Tournament not found or access denied" });
    }
    await prisma.ask_tournaments.delete({
      where: { id: id }
    })
    return res.status(200).json({ status: true, message: "Tournament deleted successfully.", })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: false, message: "Internal server error", error })
  }
}


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
        city: false
      },
    });
    let city = null;
    if (data?.city_id) {
      city = await prisma.cities.findUnique({
        where: { id: data.city_id },
      });
    }
    city = convertBigIntToString(city);
    const content = convertBigIntToString(data);
    const updateddata = {
      ...content,
      city,
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

exports.editTournament = async (req, res) => {
  try {
    const slug_name = req.params.slug;
    const existingtour = await prisma.ask_tournaments.findUnique({
      where: { slug_name }
    });
    if (!existingtour) {
      return res.status(200).json({
        status: false,
        message: "This Tournament doesnt exist in our database"
      })
    }


    // console.log("red body", req.body);

    // return false;
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
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
    if (!sport_id || !name || !country_id || !state_id) {
      return res.status(200).json({
        status: false,
        message: "Required fields missing",
      });
    }
    if (endDateObj < startDateObj) {
      return res.status(200).json({
        status: false,
        message: "End date cannot be before start date",
      });
    }
    const bannerImagePath = () => {
      if (req?.body?.bannerimage_path || req?.files?.bannerimage) {
        if (req?.body?.bannerimage_path) {
          return `/uploads/${req?.body?.bannerimage_path}`
        } else {
          return `/uploads/${req?.files?.bannerimage && req?.files?.bannerimage[0]?.filename}`
        }
      }
      return `/uploads/tournament-default-banner/1.png`
    }
    const thumbnailImagePath = () => {
      if (req?.body?.thumbnail_path || req?.files?.thumbnail) {
        if (req?.body?.thumbnail_path) {
          return `/uploads/${req?.body?.thumbnail_path}`
        } else {
          return `/uploads/${req?.files?.thumbnail && req?.files?.thumbnail[0]?.filename}`
        }
      }
      return `/uploads/tournament-default-thumb/1.png`
    }
    if (fees && isNaN(Number(fees))) {
      return res.status(200).json({
        status: false,
        message: "Fees must be a number",
      });
    }

    if (participation_limit && Number(participation_limit) <= 0) {
      return res.status(200).json({
        status: false,
        message: "Participation limit must be greater than 0",
      });
    }
    if (description && description.length > 500) {
      return res.status(200).json({
        status: false,
        message: "Description cannot exceed 500 characters",
      });
    }



    
    const updatedSlug = name ? toSlug(name) : existingtour.slug_name;
    const updatedTour = await prisma.ask_tournaments.update({
      where: {
        slug_name: existingtour?.slug_name,
      },
      data: {
        sport_id,
        user_id,
        name,
        slug_name: updatedSlug,
        description,
        content,
        tournament_type,
        startdate: startDateObj,
        enddate: endDateObj,
        address,
        country_id: Number(country_id),
        state_id: Number(state_id),
        city_id: Number(city_id),
        // bannerimage: bannerImagePath(),
        // thumbnail: thumbnailImagePath(),
        // brochure,
        url,
        prize,
        fees,
        participation_limit: Number(participation_limit),
        publish_status: Number(publish_status),
      },
    })
    console.log("Updated country : ", country_id);
    console.log("Updated State : ", state_id);
    if (!updatedTour) {
      return res.status(200).json({
        status: false,
        message: "Unable to edit tournament. Try again later",
        error: updatedTour
      })
    }
    return res.status(200).json({
      status: true,
      message: "Tournament updated successfully",
      data: convertBigIntToString(updatedTour),
    })
  } catch (error) {
    console.log("ERROR ", error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error
    })
  }
};


exports.send_enquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      description,
      mark_as_read,
      tournament_id,
      gender
    } = req.body;
    if (!name || !tournament_id || !phone) {
      return res.status(200).json({
        status: false,
        message: "Required fields missing"
      })
    }
    const tour_enquiry = await prisma.ask_tournament_enquiries.create({
      data: {
        name,
        phone,
        email,
        description,
        mark_as_read,
        tournament_id,
        gender
      },
    });
    if (!tour_enquiry) {
      return res.status(200).json({
        status: false,
        message: "Unable to send your enquiry. Try after some time",

      })
    }
    return res.status(200).json({
      status: true,
      message: "Enquiry send succesfully",
      data: convertBigIntToString(tour_enquiry)
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

exports.list_enquiries = async (req, res) => {
  try {
    const typeParam = req.params.tour_id;
    const all_enquiries = await prisma.ask_tournament_enquiries.findMany({
      where: {
        tournament_id: Number(typeParam)
      }
    });
    const data = convertBigIntToString(all_enquiries)
    return res.status(200).json({ status: true, message: "Tournament enquiries fetched successfully!", data })
  } catch (error) {
    return res.status(500).json({ status: false, message: "Something went wrong" })
  }
};

exports.mark_Enquiry = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return res.status(400).json({ status: false, message: "Invalid enquiry id" });
    }

    const enquiryExists = await prisma.ask_tournament_enquiries.findUnique({
      where: { id },
    });

    if (!enquiryExists) {
      return res.status(404).json({
        status: false,
        message: "Enquiry not found",
      });
    }

    const enquiry = await prisma.ask_tournament_enquiries.update({
      where: { id },
      data: {
        mark_as_read: 1,
      },
    });

    return res.status(200).json({ status: true, message: "Enquiry marked as read successfully", enquiry, });

  } catch (error) {
    console.error("mark_Enquiry error:", error);
    return res.status(500).json({ status: false, message: "Internal server error", });
  }
};

exports.mark_AllEnquiry = async (req, res) => {
  try {
    const tournament_id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid tournament id",
      });
    }
    const enquiry = await prisma.ask_tournament_enquiries.updateMany({
      where: { tournament_id: tournament_id },
      data: {
        mark_as_read: 1
      },
    });
    return res.status(200).json({ status: true, message: "All Enquiries approved.", enquiry })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: false, message: "Something went wrong" })
  }
}


exports.delete_enquiries = async (req, res) => {
  try {
    const id = req.params.id;
    const enquiry = await prisma.ask_tournament_enquiries.delete({
      where: {
        id: Number(id)
      }
    });
    return res.status(200).json({ status: true, message: "Enquriy delete successfully.", enquiry })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" }, error)
  }
}


//**********address**********
exports.tournamentCountriesList = async (req, res) => {
  try {
    const all_tournament_countries = await prisma.ask_tournaments.findMany({
      distinct: ['country_id'],
      select: {
        country: true
      }
    });
    const data = convertBigIntToString(all_tournament_countries);
    const all_country = data.map(item => ({
      ...item?.country
    }));
    return res.status(200).json({ message: "Countries fetched successfully!", data: all_country })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" })
  }
}

exports.tournamentStatesList = async (req, res) => {
  try {
    const countryid = req?.params?.countryid || 105;
    const all_states = await prisma.ask_tournaments.findMany({
      where: { country_id: countryid },
      distinct: ['state_id'],
      select: {
        state: true
      }
    });
    const data = convertBigIntToString(all_states);
    const all_states_lists = data.map(item => ({
      ...item?.state
    }));
    return res.status(200).json({ message: "Countries fetched successfully!", data: all_states_lists })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" })
  }
}

exports.tournamentCitiesList = async (req, res) => {
  try {
    const stateid = req?.params?.stateid || 105;
    const all_cities = await prisma.ask_tournaments.findMany({
      where: { state_id: stateid },
      distinct: ['city_id'],
      select: {
        city: true
      }
    });
    const data = convertBigIntToString(all_cities);
    const all_cities_lists = data.map(item => ({
      ...item?.city
    }));
    return res.status(200).json({ message: "Cities fetched successfully!", data: all_cities_lists })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" })
  }
}