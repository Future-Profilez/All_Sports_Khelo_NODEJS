const cron = require("node-cron");

async function extractConsole({ sport }) {
        // console.log(`{${sport} tournament extractions finished.}`);
        logger.info(`${sport} tournament extractions finished.`);
}
const {
    extractChessTournaments,
    extractTableTennisTournament,
    extractHandballTournament,
    extractpickleballTournament,
    extractSquashTournament,
    extractbasketballTournament,
    extractAllTournaments
} = require("../controller/extractController");
const logger = require("../utils/logger");

// cron.schedule("0 */12 * * *", async () => {
cron.schedule("*/2 * * * *", async () => {
    // console.log("Running tournament extraction cron...");
    logger.info(`⏰ Cron triggered at: ${new Date().toISOString()}`)
    try {

        await extractChessTournaments();
        await extractConsole("Chess");

        await extractTableTennisTournament();
        await extractConsole("Table Tennis");

        await extractHandballTournament();
        await extractConsole("Handball");

        await extractpickleballTournament();
        await extractConsole("Pickleball");

        await extractSquashTournament();
        await extractConsole("Squash");

        await extractbasketballTournament();
        await extractConsole("Basketball");

        
        logger.info(`🎉 All tournament extractions completed`)
        logger.info(`⏰ Cron ended at: ${new Date().toISOString()}`)

    } catch (error) {
        logger.error(`Cron extraction failed: ${error.message}`)
    }
});