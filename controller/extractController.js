const axios = require('axios');
const { title } = require('process');
const puppeteer = require('puppeteer');
const { saveTournament } = require('./ask_tournamentController');
const sports = require("../utils/sports.json");
const logger = require('../utils/logger');

function parseDate(dateStr) {

    if (!dateStr) return null;

    dateStr = dateStr.replace(/\n/g, " ").trim();

    dateStr = dateStr.replace("[", "").replace("]", "");

    dateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/g, "$1");

    // Only split true ranges
    if (dateStr.includes(" - ")) {
        dateStr = dateStr.split(" - ")[0].trim();
    }

    const match = dateStr.match(/^(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})$/);

    if (match) {
        const day = match[1].padStart(2, "0");
        const month = match[2].padStart(2, "0");
        const year = match[3];

        return new Date(`${year}-${month}-${day}`);
    }

    const d = new Date(dateStr);

    if (isNaN(d.getTime())) {
        return null;
    }
    return d;
}

function parseTTFIDate(dateStr) {

    if (!dateStr) return null;

    dateStr = dateStr
        .replace(/\[|\]/g, "")
        .replace("Date:", "")
        .replace(/(\d+)(st|nd|rd|th)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();

    const parts = dateStr.split("-");

    // single date
    if (parts.length === 1) {
        const d = new Date(parts[0].trim());
        if (isNaN(d)) return null;
        return { start: d, end: d };
    }

    // range case
    let startPart = parts[0].trim();
    let endPart = parts[1].trim();

    // if start has only day number → attach month/year from end
    if (/^\d+$/.test(startPart)) {
        const match = endPart.match(/([A-Za-z]+)\s*(\d{4})?/);
        if (match) {
            startPart = `${startPart} ${match[1]} ${match[2] || new Date().getFullYear()}`;
        }
    }

    const start = new Date(startPart);
    const end = new Date(endPart);

    if (isNaN(start) || isNaN(end)) return null;

    return { start, end };
}
const extractChessTournaments = async (req = null, res = null) => {

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });

    try {
        const page = await browser.newPage();
        await page.goto("https://aicf.in/all-events/", {
            waitUntil: "networkidle2"
        });

        const tournaments = await page.evaluate(() => {

            const rows = document.querySelectorAll("table tbody tr");

            return Array.from(rows).map(row => {

                const cols = row.querySelectorAll("td");

                const clean = (text) =>
                    text ? text.replace(/\n/g, " ").replace(/\s+/g, " ").trim() : null;

                return {
                    name: clean(cols[0]?.innerText),
                    startDate: clean(cols[2]?.innerText),
                    endDate: clean(cols[3]?.innerText),
                    address: clean(cols[4]?.innerText),
                    brochure: cols[5]?.querySelector("a")?.href
                };
            });
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedRange = 0;
        let skippedDuplicate = 0;

        for (const tournament of tournaments) {

            const start = parseDate(tournament.startDate);
            const end = parseDate(tournament.endDate);

            if (!start || !end) {
                skippedInvalid++;
                continue;
            }

            if (end < today) {
                skippedPast++;
                continue;
            }

            if (end < start) {
                skippedRange++;
                continue;
            }

            const formatted = {
                name: tournament.name,
                startdate: start,
                enddate: end,
                address: tournament.address,
                url: tournament.brochure,
                sport_id: "019ab5337",
                user_id: 1,
                organizer_name: "AICF",
                bannerimage: "/uploads/tournament-default-banner/chess1.webp",
                thumbnail: "/uploads/tournament-default-thumb/chess1.png"
            };
            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch {
                skippedDuplicate++;
            }
        }
        console.log("Chess Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Range:", skippedRange);
        console.log("Skipped Duplicate:", skippedDuplicate);
        

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedRange,
                skippedDuplicate,
                total: tournaments.length
            });
        }
    } catch (error) {
        console.error("Chess Extraction Error:", error.message);
        if (res) {
            return res.status(500).json({
                success: false,
                message: "Extraction failed"
            });
        }
    } finally {
        await browser.close();
    }
};


const extractTableTennisTournament = async (req = null, res = null) => {

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    try {
        const page = await browser.newPage();
        await page.goto("https://www.ttfi.org/events", {
            waitUntil: "networkidle2"
        });

        await page.waitForSelector(".post_footer");
        const events = await page.evaluate(() => {
            const cards = document.querySelectorAll(".post_footer");
            return Array.from(cards).map(card => {

                const titleEl = card.querySelector("h6 a");
                const name = titleEl?.innerText.trim();

                const link = titleEl
                    ? "https://www.ttfi.org" + titleEl.getAttribute("href")
                    : null;

                const date = card
                    .querySelector(".news-date")
                    ?.innerText.replace("[", "")
                    .replace("]", "")
                    .trim();

                const address = card
                    .querySelector(".fa-map-marker-alt")
                    ?.parentElement.innerText.trim();

                return { name, date, address, link };
            });
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedDuplicate = 0;

        for (const event of events) {

            const parsed = parseTTFIDate(event.date);

            if (!parsed) {
                skippedInvalid++;
                continue;
            }

            // Skip past tournaments
            if (parsed.end < today) {
                skippedPast++;
                continue;
            }

            const formatted = {
                name: event.name,
                startdate: parsed.start,
                enddate: parsed.end,
                address: event.address,
                url: event.link,
                sport_id: "019ab531-3b8f-730c-a2a0-4eeb9fca1568",
                user_id: 1,
                organizer_name: "TTFI",

                bannerimage: "/uploads/tournament-default-banner/tennis1.jpg",
                thumbnail: "/uploads/tournament-default-thumb/tennis1.webp"
            };

            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch (error) {
                skippedDuplicate++;
            }
        }

        console.log("Table Tennis Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid Date:", skippedInvalid);
        console.log("Skipped Duplicate:", skippedDuplicate);

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedDuplicate,
                total: events.length
            });
        }

    } catch (error) {
        console.log("Extraction Error:", error);
        if (res) {
            return res.status(500).json({
                success: false,
                message: "Extraction failed"
            });
        }
    } finally {
        await browser.close();
    }

};


// International
const extractSquashTournament = async (req = null, res = null) => {
    try {
        const response = await axios.get(
            "https://api.indiasquash.com/tournament/tourweb/AL/2026/AL/AL"
        );

        const tournaments = response.data;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedDuplicate = 0;

        for (const tournament of tournaments) {

            const start = new Date(tournament.TournamentStartDate);
            const end = new Date(tournament.TournamentEndDate);

            if (isNaN(start) || isNaN(end)) {
                skippedInvalid++;
                continue;
            }

            if (end < today) {
                skippedPast++;
                continue;
            }

            const formatted = {
                name: tournament.TournamentName,
                startdate: start,
                enddate: end,
                address: tournament.Venue,
                url: null,
                sport_id: "019ab5334", // squash sport id
                user_id: 1,
                organizer_name: "India Squash Federation",
                fees: tournament.EntryFees,

                bannerimage: "/uploads/tournament-default-banner/squash1.webp",
                thumbnail: "/uploads/tournament-default-banner/squash2.webp"
            };

            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch (error) {
                skippedDuplicate++;
            }
        }

        console.log("Squash Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Duplicate:", skippedDuplicate);

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedDuplicate,
                total: tournaments.length
            });
        }
    } catch (error) {
        console.log("Squash API Error:", error.message);
        if (res) {
            return res.status(500).json({
                success: false,
                message: "Squash extraction failed"
            });
        }
    }
};

const extractHandballTournament = async (req = null, res = null) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    try {
        const page = await browser.newPage();
        await page.goto("https://handballfederationofindia.com/calendar/", {
            waitUntil: "networkidle2"
        });

        const tournaments = await page.evaluate(() => {
            const cards = document.querySelectorAll(".etn-event-item");
            const clean = (text) =>
                text ? text.replace(/\n/g, " ").replace(/\s+/g, " ").trim() : null;

            return Array.from(cards).map(card => ({
                name: clean(card.querySelector(".etn-event-title a")?.innerText),
                link: card.querySelector(".etn-event-title a")?.href,
                address: clean(card.querySelector(".etn-event-location")?.innerText),
                image: card.querySelector(".etn-event-thumb img")?.src,
                startdate: clean(card.querySelector(".etn-event-date span:nth-child(1)")?.innerText),
                enddate: clean(card.querySelector(".etn-event-date span:nth-child(2)")?.innerText)
            }));

        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedRange = 0;
        let skippedDuplicate = 0;

        for (const tournament of tournaments) {

            let start = parseDate(tournament.startdate);
            let end = parseDate(tournament.enddate);

            // single day event fix
            if (!end && start) {
                end = start;
            }

            if (!start || !end) {
                skippedInvalid++;
                continue;
            }

            if (start < today) {
                skippedPast++;
                continue;
            }

            if (end < start) {
                skippedRange++;
                continue;
            }

            const formatted = {
                name: tournament.name,
                startdate: start,
                enddate: end,
                address: tournament.address,
                url: tournament.link,
                sport_id: "019ab5335", // your handball sport id
                user_id: 1,
                organizer_name: "Handball Federation of India",

                bannerimage: "/uploads/tournament-default-banner/handball1.webp",
                thumbnail: "/uploads/tournament-default-thumb/handball1.webp"
            };

            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch {
                skippedDuplicate++;
            }

        }

        console.log("Handball Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Range:", skippedRange);
        console.log("Skipped Duplicate:", skippedDuplicate);

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedRange,
                skippedDuplicate,
                total: tournaments.length
            });
        }

    } catch (error) {
        console.error("Handball Extraction Error:", error.message);
        if (res) {
            return res.status(500).json({
                success: false,
                message: "Extraction failed"
            });
        }
    } finally {
        await browser.close();
    }

};

const extractpickleballTournament = async (req = null, res = null) => {
    try {
        const response = await axios.get(
            "https://api.gorally.app/user/v1/ipc-activities?startDate=2026-01-01"
        );

        const tournaments = response.data?.data || [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedRange = 0;
        let skippedDuplicate = 0;

        for (const event of tournaments) {

            const start = new Date(event.startDatetime);
            const end = new Date(event.endDatetime);

            if (isNaN(start) || isNaN(end)) {
                skippedInvalid++;
                continue;
            }

            if (end < today) {
                skippedPast++;
                continue;
            }

            if (end < start) {
                skippedRange++;
                continue;
            }

            const formatted = {
                name: event.name,
                startdate: start,
                enddate: end,
                description: event.description?.replace(/<[^>]*>?/gm, ""),
                address: event.streetAddress || event.venue || event.city,
                url: null,
                sport_id: "019ab531-da3f-7066-a647-bce5abe65642", // pickleball sport id
                user_id: 1,
                organizer_name: event.organizer?.name || "Indian Pickleball Association",
                bannerimage: "/uploads/tournament-default-banner/pickleball1.webp",
                thumbnail: "/uploads/tournament-default-thumb/pickleball1.webp"
            };
            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch {
                skippedDuplicate++;
            }
        }

        console.log("Pickleball API Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Range:", skippedRange);
        console.log("Skipped Duplicate:", skippedDuplicate);

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedRange,
                skippedDuplicate,
                total: tournaments.length
            });
        }

    } catch (error) {
        console.error("Pickleball API Extraction Error:", error.message);

        if (res) {
            return res.status(500).json({
                success: false,
                message: "Extraction failed"
            });
        }
    }

};


const extractbasketballTournament = async (req = null, res = null) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    try {
        const page = await browser.newPage();
        await page.goto("https://www.basketballfederationindia.org/national-calender/", {
            waitUntil: "networkidle2",
        });
        const tournaments = await page.evaluate(() => {
            const rows = document.querySelectorAll("table tr");
            return Array.from(rows).slice(1).map(row => {
                const cols = row.querySelectorAll("td");
                const clean = (text) =>
                    text ? text.replace(/\n/g, " ").replace(/\s+/g, " ").trim() : null;
                return {
                    category: clean(cols[0]?.innerText.trim() || ""),
                    name: clean(cols[1]?.innerText.trim() || ""),
                    address: clean(cols[2]?.innerText.trim() || ""),
                    date: clean(cols[3]?.innerText.trim() || ""),
                    link: clean(cols[1]?.querySelector("a")?.href || "")
                }
            })
        });
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedDuplicate = 0;
        for (const tournament of tournaments) {
            const parsed = parseTTFIDate(tournament.date);
            if (!parsed) {
                skippedInvalid++;
                continue;
            }
            if (parsed.end < today) {
                skippedPast++;
                continue;
            }
            const formatted = {
                name: tournament.name,
                startdate: parsed.start,
                enddate: parsed.end,
                address: tournament.address,
                url: tournament.link,
                sport_id: "019ab5336",
                user_id: 1,
                bannerimage: "/uploads/tournament-default-banner/basketball1.webp",
                thumbnail: "/uploads/tournament-default-thumb/basketball1.png"
            };
            console.log("formatted", formatted);
            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch (error) {
                skippedDuplicate++;
            }
        }
        console.log("Basketball extraction summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped invalid date:", skippedInvalid);
        console.log("Skipped duplicate:", skippedDuplicate);
        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedDuplicate,
                total: tournaments.length
            });
        }
    } catch (error) {
        console.error("Basketball Extraction Error:", error.message);
        if (res) {
            return res.status(500).json({
                success: false,
                message: "Extraction failed"
            });
        }
    } finally {
        await browser.close();
    }
};

const extractBadmintonTournament = async (req = null, res = null) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    try {
        const page = await browser.newPage();
        await page.goto("https://www.badmintonindia.org/beta/events/tournaments/domestic/", {
            waitUntil: "networkidle2",
        });
        const tournaments = await page.evaluate(() => {

            const rows = document.querySelectorAll("table tr");

            const clean = (text) =>
                text ? text.replace(/\n/g, " ").replace(/\s+/g, " ").trim() : null;

            return Array.from(rows).slice(1).map(row => {

                const type = row.querySelector(".type")?.innerText;
                const date = row.querySelector(".startdate")?.innerText;
                const name = row.querySelector(".title")?.innerText;
                const address = row.querySelector(".venue")?.innerText;
                const link = row.querySelector(".title a")?.href;

                return {
                    type: clean(type),
                    date: clean(date),
                    name: clean(name),
                    address: clean(address),
                    link
                };

            });

        });
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedDuplicate = 0;
        for (const tournament of tournaments) {
            const parsed = parseTTFIDate(tournament.date);
            if (!parsed) {
                skippedInvalid++;
                continue;
            }
            if (parsed.end < today) {
                skippedPast++;
                continue;
            }
            const formatted = {
                name: tournament.name,
                startdate: parsed.start,
                enddate: parsed.end,
                address: tournament.address,
                url: tournament.link,
                sport_id: "019ab533",
                user_id: 1,
                bannerimage: "/uploads/tournament-default-banner/badminton2.webp",
                thumbnail: "/uploads/tournament-default-thumb/badminton1.png"
            };
            console.log("formatted", formatted);
            try {
                await saveTournament(formatted, 1);
                inserted++;
            } catch (error) {
                skippedDuplicate++;
            }
        }
        console.log("Basketball extraction summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped invalid date:", skippedInvalid);
        console.log("Skipped duplicate:", skippedDuplicate);
        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedDuplicate,
                total: tournaments.length
            });
        }
    } catch (error) {
        logger.error("Badminton extraction error : ", error.message);
        if (res) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    } finally {
        await browser.close();
    }
}

const extractTennisTournament = async (req = null, res = null) => {
    try {

        const response = await axios.get(
            "https://tenniskhelo.com/api/ask/tournament/lists"
        );

        const tournaments = response.data?.data || [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let inserted = 0;
        let skippedPast = 0;
        let skippedInvalid = 0;
        let skippedDuplicate = 0;

        for (const tournament of tournaments) {

            const start = new Date(tournament.start_date);
            const end = new Date(tournament.end_date);

            if (isNaN(start) || isNaN(end)) {
                skippedInvalid++;
                continue;
            }

            if (end < today) {
                skippedPast++;
                continue;
            }

            const formatted = {

                name: tournament.name,
                startdate: start,
                enddate: end,
                description: tournament.description,

                address: `${tournament.city?.name || ""}, ${tournament.state?.name || ""}`,
                city_id:tournament.city?.id,
                state_id:tournament.state?.id,

                url: `https://tenniskhelo.com/tournament/${tournament.slug}`,

                sport_id: "019a92fe-7ccf-7282-bccf-ba3ec4f780ce",
                user_id: 1,

                organizer_name: "Tennis Khelo",

                bannerimage: tournament.image || "/uploads/tournament-default-banner/tennis1.jpg",
                thumbnail: tournament.image || "/uploads/tournament-default-thumb/tennis1.webp"
            };
            console.log("banner image ",formatted.bannerimage);
            console.log("thumbnail image ",formatted.thumbnail);

            try {

                await saveTournament(formatted, 1);
                inserted++;

            } catch (error) {

                skippedDuplicate++;

            }

        }

        console.log("Tennis Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Duplicate:", skippedDuplicate);

        if (res) {
            return res.json({
                success: true,
                inserted,
                skippedPast,
                skippedInvalid,
                skippedDuplicate,
                total: tournaments.length
            });
        }

    } catch (error) {

        console.error("Tennis extraction error:", error.message);

        if (res) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }

    }
};

async function extractAllTournaments() {

    console.log("Starting all tournament extractions...");

    try {

        await Promise.all([
            extractChessTournaments(),
            extractTableTennisTournament(),
            extractSquashTournament(),
            extractHandballTournament(),
            extractpickleballTournament(),
            extractbasketballTournament(),
            extractTennisTournament()
        ]);

        console.log("All tournament extractions finished.");

    } catch (error) {

        console.error("Extraction error:", error.message);

    }

}

module.exports = {
    extractChessTournaments,
    extractTableTennisTournament,
    extractSquashTournament,
    extractHandballTournament,
    extractpickleballTournament,
    extractbasketballTournament,
    extractBadmintonTournament,
    extractTennisTournament,
    extractAllTournaments
};
