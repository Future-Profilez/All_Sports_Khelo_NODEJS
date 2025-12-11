const prisma = require("../lib/prisma")

const TournamentService = {
    getTournament: async (slug, includeContents = false) => {
        if (includeContents) {
            return await prisma.tournaments.findFirst({
                where: { slug_name: slug },
                include: includeContents ? { contents: true } : {},
            })
        }
        return await prisma.tournaments.findFirst({
            where: { slug_name: slug }
        })
    }
}

module.exports = { TournamentService };