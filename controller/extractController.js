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

const tabletennisTournament = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto("https://www.ttfi.org/events", {
        waitUntil: "networkidle2"
    })
}