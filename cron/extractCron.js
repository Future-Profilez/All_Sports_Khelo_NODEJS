const cron = require("node-cron");

async function extractConsole({ sport }) {
        console.log(`{${sport} tournament extractions finished.}`);
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

// cron.schedule("0 */12 * * *", async () => {
cron.schedule("*/5 * * * *", async () => {
    // console.log("Running tournament extraction cron...");
    console.log("⏰ Cron triggered at:", new Date().toISOString());
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

        console.log("🎉 All tournament extractions completed");

    } catch (error) {
        console.log("Cron extraction failed:", error.message);
    }
});