const axios = require('axios');
const { title } = require('process');
const puppeteer = require('puppeteer');

const chessTournaments = async () => {
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
    await browser.close();
}

chessTournaments();


const tabletennisTournament = async () => {

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

tabletennisTournament();


// International
// const squashTournament = async () => {
//     try {
//         const response = await axios.get("https://api.indiasquash.com/tournament/tourweb/AL/2026/AL/AL");
//         const tournaments = response.data;

//         const formatedTournament = tournaments.map(tournament => {
//             return {
//                 TournamentName: tournament.TournamentName,
//                 TournamentStartDate: tournament.TournamentStartDate,
//                 TournamentEndDate: tournament.TournamentEndDate,
//                 Month: tournament.Month,
//                 Venue: tournament.Venue,
//                 EntryFees: tournament.EntryFees
//             }
//         });

//         console.log(formatedTournament)
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// squashTournament();

const handballTournament = async () => {
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

handballTournament();


const pickleballTournament = async () => {
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

pickleballTournament();

