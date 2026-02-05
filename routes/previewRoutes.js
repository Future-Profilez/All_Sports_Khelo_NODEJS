const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/email-otp", (req, res) => {
  const name = req.query.name || "Ankit";
  const otp = req.query.otp || "123456";

  const filePath = path.join(
    process.cwd(),
    "template",
    "emailOtp.html"
  );

  let html = fs.readFileSync(filePath, "utf8");

  html = html.replace(/{{name}}/g, name);
  html = html.replace(/{{otp}}/g, otp);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});


router.get("/reset-password-email", (req, res) => {
  const name = req.query.name || "Ankit";
  const resetLink =
    req.query.link || "http://localhost:3000/reset-password?token=sampletoken";

  const filePath = path.join(
    process.cwd(),
    "template",
    "forgotPassword.html"   // <-- your HTML file
  );

  let html = fs.readFileSync(filePath, "utf8");

  html = html.replace(/{{name}}/g, name);
  html = html.replace(/{{reset_link}}/g, resetLink);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

module.exports = router;
