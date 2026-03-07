const axios = require('axios');
const puppeteer = require('puppeteer');

// const chessTournaments = async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://aicf.in/all-events/", {
//         waitUntil: "networkidle2"
//     });

//     const tournaments = await page.evaluate(() => {
//         const rows = document.querySelectorAll("table tbody tr");

//         return Array.from(rows).map(row => {
//             const cols = row.querySelectorAll("td");

//             return {
//                 name: cols[0] ? cols[0].innerText.trim() : null,
//                 eventCode: cols[1] ? cols[1].innerText.trim() : null,
//                 startDate: cols[2] ? cols[2].innerText.trim() : null,
//                 endDate: cols[3] ? cols[3].innerText.trim() : null,
//                 place: cols[4] ? cols[4].innerText.trim() : null,
//                 brochure: cols[5] ? cols[5].querySelector("a")?.href : null
//             };
//         });
//     });
//     console.log("tournaments : ", tournaments);
//     await browser.close();
// }

// chessTournaments();


// const tabletennisTournament = async () => {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://www.ttfi.org/events", {
//         waitUntil: "networkidle2"
//     });

//     await page.waitForSelector(".post_footer");

//     const events = await page.evaluate(() => {

//         const cards = document.querySelectorAll(".post_footer");

//         return Array.from(cards).map(card => {

//             const titleEl = card.querySelector("h6 a");

//             const title = titleEl?.innerText.trim();

//             const link = titleEl
//                 ? "https://www.ttfi.org" + titleEl.getAttribute("href")
//                 : null;

//             const date = card
//                 .querySelector(".news-date")
//                 ?.innerText.replace("[", "")
//                 .replace("]", "")
//                 .trim();

//             const venue = card
//                 .querySelector(".fa-map-marker-alt")
//                 ?.parentElement.innerText.trim();

//             return {
//                 title,
//                 date,
//                 venue,
//                 link
//             };

//         });

//     });

//     console.log(events);

//     await browser.close();
// }

// tabletennisTournament();


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

