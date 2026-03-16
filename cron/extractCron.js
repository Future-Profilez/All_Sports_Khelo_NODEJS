const cron = require("node-cron");

const {
    extractChessTournaments,
    extractTableTennisTournament,
    extractHandballTournament,
    extractpickleballTournament,
    extractSquashTournament,
    extractbasketballTournament,
    extractAllTournaments
} = require("../controller/extractController");

cron.schedule("0 */12 * * *", async () => {
    // console.log("Running tournament extraction cron...");
    console.log("⏰ Cron triggered at:", new Date().toISOString());
    try {
        // await Promise.all([
        //     extractChessTournaments(),
        //     extractTableTennisTournament(),
        //     extractHandballTournament(),
        //     extractpickleballTournament(),
        //     extractSquashTournament(),
        //     extractbasketballTournament(),
        // ]);
         await extractAllTournaments();
        console.log("Tournament extraction completed");
    } catch (error) {
    console.log("Cron extraction failed:", error.message);
}
});