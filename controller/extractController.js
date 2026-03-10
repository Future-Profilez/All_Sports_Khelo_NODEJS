const axios = require('axios');
const { title } = require('process');
const puppeteer = require('puppeteer');
const { saveTournament } = require('./ask_tournamentController');
const sports = require("../utils/sports.json");

function parseDate(dateStr) {
    if (!dateStr) return null;

    dateStr = dateStr.replace(/\n/g, "").trim();

    // Format: DD.MM.YYYY or DD-MM-YYYY or DD/MM/YYYY
    const match = dateStr.match(/^(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})$/);

    if (match) {
        const day = match[1].padStart(2, "0");
        const month = match[2].padStart(2, "0");
        const year = match[3];

        return new Date(`${year}-${month}-${day}`);
    }

    // Format like "20 Jan 2026"
    const d = new Date(dateStr);

    if (isNaN(d.getTime())) {
        console.log("Invalid date detected:", dateStr);
        return null;
    }
    return d;
}

const extractChessTournaments = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://aicf.in/all-events/", {
        waitUntil: "networkidle2"
    });

    const tournaments = await page.evaluate(() => {
        const rows = document.querySelectorAll("table tbody tr");

        return Array.from(rows).map(row => {
            const cols = row.querySelectorAll("td");

            return {
                name: cols[0] ? cols[0].innerText.trim() : null,
                eventCode: cols[1] ? cols[1].innerText.trim() : null,
                startDate: cols[2] ? cols[2].innerText.trim() : null,
                endDate: cols[3] ? cols[3].innerText.trim() : null,
                address: cols[4] ? cols[4].innerText.trim() : null,
                brochure: cols[5] ? cols[5].querySelector("a")?.href : null
            };
        });
    });
    console.log("tournaments : ", tournaments);
    for (const tournament of tournaments) {

        const formatted = {
            name: tournament.name,
            startdate: parseDate(tournament.startDate),
            enddate: parseDate(tournament.endDate),
            address: tournament.address,
            url: tournament.url,
            sport_id: "019ab5337", // chess sport id
            organizer_name: "AICF"
        };
        console.log("formatted chess data ", formatted);
        if (!formatted.startdate || !formatted.enddate) {
            console.log("Skipping tournament due to invalid date:", formatted.name);
            continue;
        }

        await saveTournament(formatted, 1); // user_id = 1
    }
    await browser.close();

}


const tabletennisTournament = async (req, res) => {

    const browser = await puppeteer.launch();
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

            return {
                name,
                date,
                address,
                link
            };

        });

    });

    console.log(events);

    await browser.close();
}


// International
const squashTournament = async (req, res) => {
    try {
        const response = await axios.get("https://api.indiasquash.com/tournament/tourweb/AL/2026/AL/AL");
        const tournaments = response.data;

        const formatedTournament = tournaments.map(tournament => {
            return {
                TournamentName: tournament.TournamentName,
                TournamentStartDate: tournament.TournamentStartDate,
                TournamentEndDate: tournament.TournamentEndDate,
                Month: tournament.Month,
                Venue: tournament.Venue,
                EntryFees: tournament.EntryFees
            }
        });

        console.log(formatedTournament)
    } catch (error) {
        console.log("Error:", error.message);
    }
}


const handballTournament = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://handballfederationofindia.com/calendar/", {
        waitUntil: "networkidle2"
    });

    const tournaments = await page.evaluate(() => {
        const cards = document.querySelectorAll(".etn-event-item");

        return Array.from(cards).map(card => {
            return {
                name: card.querySelector(".etn-event-title a")?.innerText,
                link: card.querySelector(".etn-event-title a")?.href,
                address: card.querySelector(".etn-event-location")?.innerText.trim(),
                image: card.querySelector(".etn-event-thumb img")?.src,
                startDate: card.querySelector(".etn-event-date span:nth-child(1)")?.innerText,
                endDate: card.querySelector(".etn-event-date span:nth-child(2)")?.innerText,
            };
        });
    });
    console.log(tournaments);

    await browser.close();
};


const pickleballTournament = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.ipaofficial.com/tournaments", {
        waitUntil: "networkidle2",
    });

    const tournaments = await page.evaluate(() => {
        const cards = document.querySelectorAll(".gallery-item-container");

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
                title,
                image,
                ...data,
            };
        });
    });

    console.log(tournaments);

    await browser.close();
};


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
