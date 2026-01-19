const express = require('express');
const { add_ask_tournament } = require('../controller/ask_tournamentController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/createtournament', 
    upload.fields([
    { name: "bannerimage", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "brochure", maxCount: 1 },
  ]), 
  add_ask_tournament);


module.exports = router