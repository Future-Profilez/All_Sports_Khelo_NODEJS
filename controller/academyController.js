const prisma = require('../lib/prisma')
const convertBigIntToString = require('../helper/convertBigInt')

exports.academies = async (req, res) => {
    try {
        const list = await prisma.academies.findMany({
            where: { status: 1, is_active: 1 },
            include: {
                academy_details: {
                    select: {
                        img: true,
                    },
                },
            }
            // select: {
            //     id: true,
            //     slug_name: true,
            //     address: true,
            // }
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

// exports.academyDetails = async(req,res) => {
//     try{
//         const slug = req.params.slug;
//         const data = await prisma.academies.findFirst({
//             where: { slug_name: slug },
//             include: {
//                 academy_seo_contents: {
//                     where: { name: "page_description" }
//                 },
//                 academy_details: true,
//                 academy_amenities:  true,
//                 academy_timings: true
//             }
//         });


//         if(!data){
//             return res.status(200).json({
//                 status:false,
//                 message:"Academy not found",
//                 error:data
//             })
//         }
//         // Get all the social media handles of this academy
//         const a_urls = await prisma.academy_urls.findFirst({
//             where: { user_id: data?.user_id },
//         });
//         const academyurls = convertBigIntToString(a_urls);

//         const content = convertBigIntToString(data);
//         return res.status(200).json({
//             status:true,
//             message:"Academy details fetched succesfully",
//             academy:{...content, academyurls: academyurls}
//         })
//     }catch(error){
//         console.log("error: ",error);
//         return res.status(500).json({
//             status: false,
//             message:"Something went wrong",
//             error:error
//         })
//     }
// }

exports.academyDetailsByType = async (req, res) => {
    try {
        const baseInclude = {
            academy_details: true,
        };

        const getAcademyIncludeByType = (type) => {
            switch (type) {
                case 'overview':
                    return {
                        academy_seo_contents: {
                            where: { name: "page_description" }
                        },
                        academy_details: true,
                        // academy_amenities: true,
                        academy_timings: true,
                    };
                case 'programs':
                    return {
                        academy_details: true,
                        academy_programs: true,
                    };
                case 'coaches':
                    return {
                        academy_details: true,
                        academy_coaches: true,
                    }
                case 'gallery':
                    return{
                        academy_details: true,
                        academy_galleries: true
                    }
                case 'tournament':
                    return{
                        academy_details: true
                    }
                case 'achievements':
                    return{
                        academy_details: true,
                        academy_achievements : true
                    }
                case 'basic':
                    return {
                        ...baseInclude,
                    };
                default:
            }
        };

        const slug = req?.params?.slug;
        const type = req?.params?.type;
        const include = getAcademyIncludeByType(type);
        const data = await prisma.academies.findFirst({
            where: { slug_name: slug },
            include
        });
        if (!data) {
            return res.status(200).json({
                status: false,
                message: "Academy not found",
                error: data
            })
        }
        // Get all the social media handles of this academy
        let academyurls;
        if (type === 'overview') {
            const a_urls = await prisma.academy_urls.findFirst({
                where: { user_id: data?.user_id },
            });
            academyurls = convertBigIntToString(a_urls);
        }
        let academyTournaments
        if (type === 'tournament'){
            const a_tournament = await prisma.tournaments.findFirst({
                where: {id: data?.academy_id},
            });
            academyTournaments = convertBigIntToString(a_tournament);
        }
        const content = convertBigIntToString(data);
        return res.status(200).json({
            status: true,
            message: "Academy details fetched succesfully",
            academy: { ...content, academyurls: academyurls, academyTournaments: academyTournaments }
        })
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error
        })
    }
}


