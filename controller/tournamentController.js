const prisma = require("../lib/prisma")
const convertBigIntToString = require('../helper/convertBigInt')

exports.tournament = async (req, res) => {
    try {
        const tournament = await prisma.tournaments.findMany();
        const tournaments = convertBigIntToString(tournament);
        return res.status(200).json({
            status: true,
            message: "Tournaments fetched successfully!",
            data: tournaments
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error
        });
    }
}

exports.tournamentOverview = async (req, res) => {
    try {
        const slug = req?.params?.slug;
        const data = await prisma.tournaments.findFirst({
            where: {
                slug_name: slug,
            },
            include: {
                contents: {
                    where: {
                        name: "description",
                    }
                }
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
            message: "Internal server error",
            error
        });
    }
};

exports.tournamentGalleryFolder = async (req, res) => {
    try {
        const slug = req?.params?.slug;

        const tournament = await prisma.tournaments.findFirst({
            where: { slug_name: slug }
        });

        if (!tournament) {
            return res.status(404).json({
                status: false,
                message: "Tournament not found"
            });
        }

        const folder = await prisma.tournament_galleries_folders.findMany({
            where: {
                tournament_id: tournament.id,
                deleted_at: null
            }
        });

        if (folder.length === 0) {
            return res.status(200).json({
                status: false,
                message: "Folder not found."
            });
        }

        const images = [];
        for (let index = 0; index < folder.length; index++) {
            const folderimages = await prisma.tournament_galleries.findMany({
                where: {
                    tournament_galleries_folder_id: folder[index].id,
                    deleted_at: null
                },
                select:{
                    image:true
                },
                take: 4
            });

            images.push({
                folder_id: folder[index].id,
                images: folderimages
            });
        }

        return res.status(200).json({
            status: true,
            message: "Folder fetch successfully",
            folders: convertBigIntToString(folder),
            images: convertBigIntToString(images)
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error
        });
    }
};


exports.tournamentGallery = async (req, res) => {
    try {
        const slug = req?.params?.slug;
        const tournament = await prisma.tournaments.findFirst({
            where: {
                slug_name: slug
            }
        })
        const folder = await prisma.tournament_galleries_folders.findFirst({
            where: {
                tournament_id: tournament.id
            }
        })
        const gallery = await prisma.tournament_galleries.findMany({
            where: {
                tournament_id: tournament.id,
                tournament_galleries_folder_id: folder.id
            }
        })
        const galleries = convertBigIntToString(gallery)
        return res.status(200).json({
            status: true,
            message: "Gallery fetched succesfully",
            galleries
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error
        })
    }
}