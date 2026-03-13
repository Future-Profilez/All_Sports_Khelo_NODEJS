const cron = require("node-cron");

const {
    extractChessTournaments,
    extractTableTennisTournament,
    extractHandballTournament,
    extractpickleballTournament,
    extractSquashTournament,
    extractbasketballTournament
} = require("../controller/extractController");

cron.schedule("0 3 * * *", async () => {
    console.log("Running tournament extraction cron...");
    try {
        await Promise.all([
            extractChessTournaments(),
            extractTableTennisTournament(),
            extractHandballTournament(),
            extractpickleballTournament(),
            extractSquashTournament(),
            extractbasketballTournament(),
        ]);
        console.log("Tournament extraction completed");
    } catch (error) {
    console.log("Cron extraction failed:", error.message);
}
});