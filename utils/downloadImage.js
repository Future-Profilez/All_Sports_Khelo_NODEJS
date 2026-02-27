const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function downloadImage(url, folderName) {
  try {
    const uploadsDir = path.join(
      __dirname,
      "../public/uploads",
      folderName
    );

    // ensure folder exists
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const fileName =
      Date.now() + "-" + path.basename(url.split("?")[0]);

    const filePath = path.join(uploadsDir, fileName);

    const response = await axios({
      method: "GET",
      url,
      responseType: "stream",
    });

    await new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    return `/uploads/${folderName}/${fileName}`;
  } catch (error) {
    console.log("Download error:", error.message);
    return null;
  }
}

module.exports = { downloadImage };