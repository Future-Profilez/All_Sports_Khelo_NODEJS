const axios = require('axios');
const { title } = require('process');
const puppeteer = require('puppeteer');
const { saveTournament } = require('./ask_tournamentController');
const sports = require("../utils/sports.json");

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

const extractChessTournaments = async (req, res) => {

    const browser = await puppeteer.launch();

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
                organizer_name: "AICF"
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

        return res.json({
            success: true,
            inserted,
            skippedPast,
            skippedInvalid,
            skippedRange,
            skippedDuplicate,
            total: tournaments.length
        });

    } catch (error) {

        console.error("Chess Extraction Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Extraction failed"
        });

    } finally {

        await browser.close();

    }

};



const extractTableTennisTournament = async (req, res) => {

    const browser = await puppeteer.launch();

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
                organizer_name: "TTFI"
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

        return res.json({
            success: true,
            inserted,
            skippedPast,
            skippedInvalid,
            skippedDuplicate,
            total: events.length
        });

    } catch (error) {

        console.log("Extraction Error:", error);

        return res.status(500).json({
            success: false,
            message: "Extraction failed"
        });

    } finally {

        await browser.close();

    }

};


// International
const extractSquashTournament = async (req, res) => {

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
                organizer_name: "India Squash Federation",
                fees: tournament.EntryFees
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

        return res.json({
            success: true,
            inserted,
            skippedPast,
            skippedInvalid,
            skippedDuplicate,
            total: tournaments.length
        });

    } catch (error) {

        console.log("Squash API Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Squash extraction failed"
        });

    }

};



const extractHandballTournament = async (req, res) => {

    const browser = await puppeteer.launch();

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
                startDate: clean(card.querySelector(".etn-event-date span:nth-child(1)")?.innerText),
                endDate: clean(card.querySelector(".etn-event-date span:nth-child(2)")?.innerText)
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
                url: tournament.link,
                sport_id: "019ab5335", // your handball sport id
                organizer_name: "Handball Federation of India"
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

        return res.json({
            success: true,
            inserted,
            skippedPast,
            skippedInvalid,
            skippedRange,
            skippedDuplicate,
            total: tournaments.length
        });

    } catch (error) {

        console.error("Handball Extraction Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Extraction failed"
        });

    } finally {

        await browser.close();

    }

};

const extractpickleballTournament = async (req, res) => {

    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();
        await page.goto("https://www.ipaofficial.com/tournaments", {
            waitUntil: "domcontentloaded",
        });
        const tournaments = await page.evaluate(() => {

            const cards = document.querySelectorAll(".gallery-item-container");

            const clean = (text) =>
                text ? text.replace(/\n/g, " ").replace(/\s+/g, " ").trim() : null;

            return Array.from(cards).map((card) => {

                const title =
                    card.querySelector('[data-hook="item-title"] span')?.innerText || "";

                const descText =
                    card.querySelector('[data-hook="item-description"]')?.innerText || "";

                const image =
                    card.querySelector('[data-hook="gallery-item-image-img"]')?.src || "";

                const lines = descText.split("\n");
                const data = {};

                lines.forEach((line) => {

                    const parts = line.split(":");

                    if (parts.length === 2) {
                        const key = parts[0].trim();
                        const value = parts[1].trim();
                        data[key] = value;
                    }

                });

                return {
                    name: clean(title),
                    image,
                    date: data["Date"] || null,
                    address: data["Venue"] || null,
                    fees: data["Entry Fee"] || null
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

            if (!tournament.date) {
                skippedInvalid++;
                continue;
            }

            const parts = tournament.date.split("-");

            const start = parseDate(parts[0]?.trim());
            const end = parseDate(parts[1]?.trim() || parts[0]?.trim());

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
                url: null,
                prize: null,
                fees: tournament.fees,
                sport_id: "019ab53311", // your pickleball sport id
                organizer_name: "Indian Pickleball Association"
            };

            try {

                await saveTournament(formatted, 1);
                inserted++;

            } catch {

                skippedDuplicate++;

            }

        }

        console.log("Pickleball Extraction Summary");
        console.log("Inserted:", inserted);
        console.log("Skipped Past:", skippedPast);
        console.log("Skipped Invalid:", skippedInvalid);
        console.log("Skipped Range:", skippedRange);
        console.log("Skipped Duplicate:", skippedDuplicate);

        return res.json({
            success: true,
            inserted,
            skippedPast,
            skippedInvalid,
            skippedRange,
            skippedDuplicate,
            total: tournaments.length
        });

    } catch (error) {

        console.error("Pickleball Extraction Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Extraction failed"
        });

    } finally {

        await browser.close();

    }

};

<<<<<<< HEAD

const basketballTournament = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.basketballfederationindia.org/national-calender/", {
        waitUntil: "networkidle2",
    });

    const tournaments = await page.evaluate(() => {
        const rows = document.querySelectorAll("table tr");

        return Array.from(rows)
            .slice(1)
            .map((row) => {
                const cols = row.querySelectorAll("td");

                return {
                    category: cols[0]?.innerText.trim() || "",
                    name: cols[1]?.innerText.trim() || "",
                    address: cols[2]?.innerText.trim() || "",
                    date: cols[3]?.innerText.replace(/\n/g, "").trim() || "",
                    link: cols[1]?.querySelector("a")?.href || null
                };
            });
    });

    console.log(tournaments);

    await browser.close();
};

module.exports = {
    extractChessTournaments,
    tabletennisTournament,
    squashTournament,
    handballTournament,
    pickleballTournament,
    basketballTournament
};
=======

module.exports = {
    extractChessTournaments,
    extractTableTennisTournament,
    extractSquashTournament,
    extractHandballTournament,
    extractpickleballTournament
};
>>>>>>> 57d44e58d6325db4c3c750ddf967b23e9c5132e1
