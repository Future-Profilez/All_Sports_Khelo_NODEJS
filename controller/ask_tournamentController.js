const convertBigIntToString = require("../helper/convertBigInt");
const prisma = require("../lib/prisma");
const { toSlug } = require("../utils/toSlug");
const sports = require("../utils/sports.json");
const XLSX = require("xlsx");
const fs = require("fs");
const { downloadImage } = require("../utils/downloadImage");
const logger = require("../utils/logger");

async function getCityData(c_id) {
  if (!c_id) return null;
  const city = await prisma.cities.findFirst({
    where: { id: c_id },
  });
  return city ? convertBigIntToString(city) : null;
}
async function readExcelFile(excelFile) {
  // console.log("excel file ",excelFile);
  if (!excelFile) {
    return res.status(200).json({
      status: false,
      message: "Excel/csv file is required"
    })
  }
  const filepath = excelFile.path;
  console.log("filepath ", filepath);
  const workbook = XLSX.readFile(filepath);   //read the excel file
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];   //extract first sheet content
  const rows = XLSX.utils.sheet_to_json(sheet, {
    raw: false,
    dateNF: "yyyy-mm-dd"
  });
  fs.unlinkSync(filepath);    //delete the file from server
  console.log("Json data : ", rows);
  return rows;
}
const getSportID = async (name) => {
  const item = sports?.filter((s, i) => s?.title == name);
  const sport = item && item?.length ? item[0] : '';
  if (sport) {
    // return sport?.id ||'019ab531-da3f-7066-a647-bce5abe65642'
    return sport?.id || '0000000000000000000000000000000'
  }
  else {
    throw new Error(`Sports entered - ${name} is not in our database`);
  }
}

exports.saveTournament = async (row, user_id) => {
  try {

    const startDateObj = new Date(row.startdate);
    const endDateObj = new Date(row.enddate);

    if (!row.name) throw new Error("Tournament name missing");

    if (endDateObj < startDateObj) {
      throw new Error("End date must be after start date");
    }

    const slug_name = toSlug(row.name);

    const existing = await prisma.ask_tournaments.findFirst({
      where: { slug_name },
    });

    if (existing) {
      throw new Error(`Tournament ${row.name} already exists`);
    }

    const tournament = await prisma.ask_tournaments.create({
      data: {
        user_id,
        name: row.name,
        slug_name,
        description: row.description || null,
        tournament_type: row.tournament_type || null,
        startdate: startDateObj,
        enddate: endDateObj,
        address: row.address || null,
        url: row.url || null,
        prize: row.prize ? `${row.prize}` : null,
        fees: row.fees ? `${row.fees}` : null,
        bannerimage: row.bannerimage || "/uploads/tournament-default-banner/ASKhomeBanner.png",
        thumbnail: row.thumbnail || "/uploads/tournament-default-thumb/ASKhomeBanner.png",
        publish_status: 1,
        bulk_upload: 1,
        sport_id: row.sport_id,
        organizer_name: row.organizer_name || null,
        extracted: row.extracted ? 1 : 0
      }
    });

    return tournament;

  } catch (error) {
    console.log("Save Tournament Error:", error.message);
    return null;
  }
}



exports.add_ask_tournament = async (req, res) => {
  try {
    const isBulk = req.params?.bulk === "bulk";
    if (isBulk) {
      try {
        const rows = await readExcelFile(req.files.excel[0] || null)
        let success = 0;
        let failedRows = [];
        if (rows) {
          for (let i = 0; i < rows.length; i++) {
            const raw = rows[i];
            let row = { ...raw }
            console.log("row", row)
            try {
              if (!row.name) {
                throw new Error("tournament name missing");
              }

              const startDateObj = new Date(row.startdate)
              const endDateObj = new Date(row.enddate);
              console.log("row start date ", row.startdate);
              console.log("start Date object ", startDateObj);

              if (!startDateObj || isNaN(startDateObj.getTime())) {
                throw new Error("Please enter a valid start date (Use YYYY-MM-DD)");
              }
              if (!endDateObj || isNaN(endDateObj.getTime())) {
                throw new Error("Please enter a valid end date (Use YYYY-MM-DD)");
              }
              if (endDateObj < startDateObj) {
                throw new Error("End date must be after start date");
              }
              if (!row.sport) {
                throw new Error("Sport field missing");
              }
              let bannerPath = "/uploads/tournament-default-banner/ASKhomeBanner.png";
              let thumbPath = "/uploads/tournament-default-thumb/ASKhomeBanner.png";

              if (row.bannerImage && row.bannerImage.startsWith("http")) {
                const savedBanner = await downloadImage(
                  row.bannerImage,
                  "tournament-default-banner"
                );
                console.log("saved banner ", savedBanner);
                console.log("row banner ", row.bannerImage)
                if (savedBanner) bannerPath = savedBanner;
              }

              if (row.thumbnail && row.thumbnail.startsWith("http")) {
                const savedThumb = await downloadImage(
                  row.thumbnail,
                  "tournament-default-thumb"
                );
                console.log("saved thumnnail ", savedThumb);
                console.log("row thumbnail  ", row.thumbnail);
                if (savedThumb) thumbPath = savedThumb;
              }
              let sport_id = null;
              const excelSport = String(row.sport).toLowerCase().trim();
              for (let j = 0; j < sports && sports.length; j++) {
                if (
                  sports[j].title &&
                  sports[j].title.toLowerCase().trim() === excelSport.toLowerCase().trim()
                ) {
                  sport_id = sports[j].id;
                  break;
                }
              }
              const slug_name = toSlug(row.name);

              const existing = await prisma.ask_tournaments.findFirst({
                where: { slug_name },
              });
              if (existing) {
                // return res.status(200).json({
                //   status: false,
                //   message: "Tournament name already exists",
                // })
                throw new Error(`Tournament ${row.name} already exists.`);
              }
              const updateduser_id = Number(req?.user?.id);

              const data = await prisma.ask_tournaments.create({
                data: {
                  user_id: updateduser_id,
                  name: row.name,
                  slug_name,
                  description: row.description || null,
                  // content,
                  tournament_type: row.tournament_type || null,
                  startdate: startDateObj,
                  enddate: endDateObj,
                  address: row.address || null,
                  country_id: null,
                  state_id: null,
                  city_id: null,
                  url: row.url || null,
                  prize: `${row.prize}` || null,
                  fees: row.fees ? `${row.fees}` : null,
                  publish_status: 1,
                  bannerimage: bannerPath,
                  thumbnail: thumbPath,
                  bulk_upload: 1,
                  sport_id: await getSportID(row.sport),
                  organizer_name: `${row.organization_name}` || null
                }
              });
              success++;
            }
            catch (error) {
              console.log("error ", error);
              failedRows.push({
                row: i + 2,
                name: row.name || 'N/A',
                error: error.message,
              })
            }
          }
          return res.status(200).json({
            status: true,
            message: "Tournaments added via bulk upload",
            total: rows.length,
            success,
            failed: failedRows.length,
            failedRows
          })
        }
      }
      catch (error) {
        console.error("ERROR ", error);
        return res.status(500).json({
          status: false,
          message: "Something went wrong",
          error: error
        })
      }
    }
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
        sport_id: sport_id !== undefined ? sport_id : null,
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
  }
  catch (error) {
    console.error("ERROR ", error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error
    })
  }
}



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
    const extracted = req.query?.extracted;
    // const country_id = req.query?.country_id;
    // const state_id = req.query?.state_id;
    // const city_id = req.query?.city_id;
    const search = req.query?.search;
    const startdate = req.query?.startdate;
    const enddate = req.query?.enddate;
    const type = req.query?.type;
    // const include = {
    //   country: true,
    //   state: true,
    //   city: true,
    // };
    // const include = {
    //   city: city_id ? true : false,
    // };

    let where = {};
    // Sports ID filter
    if (sports_id && sports_id !== '') {
      where.sport_id = sports_id;
    }
    // if (country_id && country_id !== undefined) {
    //   where.country_id = Number(country_id);
    // }
    // if (state_id && state_id !== undefined) {
    //   where.state_id = Number(state_id);
    // }
    // if (city_id && city_id != undefined) {
    //   where.city_id = Number(city_id);
    // }
    if (type === "trending") {
      return this.getTrendingTournaments(req, res);
    }

    if (type === "featured") {
      return this.getFeaturedTournaments(req, res);
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
        {
          country: {
            name: {
              contains: search,
            },
          },
        },
        {
          state: {
            name: {
              contains: search,
            },
          },
        },
        {
          city: {
            name: {
              contains: search,
            },
          },
        },
        {
          address: {
            contains: search,
          }
        }
      ];
    }
    // Logged in user tournaments filter
    if (typeParam) {
      where.user_id = Number(req?.user?.id);
    }

    const tournaments = await prisma.ask_tournaments.findMany({
      where,
      include: {
        country: true,
        state: true,
        city: true
      },
      orderBy: { created_at: "desc", }
    });


    // async function getCityData(c_id) {
    //   if (!c_id) return null;

    //   const city = await prisma.cities.findFirst({
    //     where: { id: c_id },
    //   });

    //   return city ? convertBigIntToString(city) : null;
    // }


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

// exports.all_tournaments_sports = async (req, res) => {
//   try {

//     const includeExtracted = req.query.includeExtracted === "true";

//     const where = includeExtracted ? {} : { extracted: 0 };

//     const tournaments = await prisma.ask_tournaments.findMany({
//       where,
//       select: {
//         sport_id: true,
//       }
//     });

//     const activeSportIds = [...new Set(tournaments.map(t => t.sport_id))];

//     return res.status(200).json({
//       status: true,
//       activeSports: activeSportIds,
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       status: false,
//       message: "Internal server error",
//     });
//   }
// };



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
    if (!tournament_id || isNaN(tournament_id)) {
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

exports.toggleFeatured = async (req, res) => {
  try {
    const tourid = Number(req.params.id);

    const tour = await prisma.ask_tournaments.findUnique({
      where: { id: tourid },
    });

    if (!tour) {
      return res.status(404).json({
        status: false,
        message: "Tournament not found",
      });
    }

    const now = new Date();

    const isActive =
      tour.featured_expiry && tour.featured_expiry > now;

    const updated = await prisma.ask_tournaments.update({
      where: { id: tourid },
      data: isActive
        ? {
          featured: null,
          featured_expiry: null,
        }
        : {
          featured: now,
          featured_expiry: new Date(
            now.getTime() + 7 * 24 * 60 * 60 * 1000
          ),
        },
    });

    return res.status(200).json({
      status: true,
      message: isActive
        ? "Removed from featured"
        : "Marked as featured for 7 days",
      data: convertBigIntToString(updated),
    });

  } catch (error) {
    console.error("Toggle feature error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

exports.getFeaturedTournaments = async (req, res) => {
  try {
    const now = new Date();

    const tournaments = await prisma.ask_tournaments.findMany({
      where: {
        featured: { not: null },
        featured_expiry: {
          gte: now,
        },
        publish_status: 1,
        deleted_at: null,
      },
      orderBy: {
        featured: "desc", // latest featured first
      },
      // take: 10, // limit for homepage
    });

    const updateddata = tournaments.map((item) => {
      return {
        ...item,
        thumbnail: item?.thumbnail
          ? `${process.env.APP_URL}${item.thumbnail}`
          : false,
        bannerimage: item?.bannerimage
          ? `${process.env.APP_URL}${item.bannerimage}`
          : false,
      };
    });

    return res.status(200).json({
      status: true,
      data: convertBigIntToString(updateddata),
    });

  } catch (error) {
    console.error("Fetch featured error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};


// Listing trending tournaments
// if enquiry count is more than threshhold(5) then those tournaments are considered trending
exports.getTrendingTournaments = async (req, res) => {
  try {
    const now = new Date();

    // 🔥 Step 1: group enquiries
    const enquiryCounts = await prisma.ask_tournament_enquiries.groupBy({
      by: ["tournament_id"],
      _count: {
        tournament_id: true,
      },
    });

    const MIN_ENQUIRIES = 5;

    const trendingIds = enquiryCounts
      .filter((e) => e._count.tournament_id >= MIN_ENQUIRIES)
      .map((e) => e.tournament_id);

    if (trendingIds.length === 0) {
      return res.status(200).json({
        status: true,
        data: [],
      });
    }

    // 🔥 Step 2: fetch tournaments
    const tournaments = await prisma.ask_tournaments.findMany({
      where: {
        id: { in: trendingIds },
        enddate: { gte: now },
        publish_status: 1,
        deleted_at: null,
      },
    });

    // ✅ STEP 3: SORT HERE (THIS IS YOUR CODE)
    const countMap = {};

    enquiryCounts.forEach((e) => {
      countMap[e.tournament_id] = e._count.tournament_id;
    });

    const sorted = tournaments.sort(
      (a, b) => countMap[b.id] - countMap[a.id]
    );

    const updateddata = sorted.map((item) => {

      return {
        ...item,
        thumbnail: item?.thumbnail
          ? `${process.env.APP_URL}${item.thumbnail}`
          : false,
        bannerimage: item?.bannerimage
          ? `${process.env.APP_URL}${item.bannerimage}`
          : false,
      };
    });
    // ✅ STEP 4: return sorted data
    return res.status(200).json({
      status: true,
      data: convertBigIntToString(updateddata),
    });

  } catch (error) {
    console.error("Trending error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

