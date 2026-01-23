const express = require("express")
// const { tournamentOverview, tournament, tournamentGalleryFolder, tournamentGallery} = require("../controller/tournamentController.js")
// const validate = require("../middleware/validate.js")
// const { tournament } = require("../validation/tournamentValidation.js")
const router = express.Router()
const upload = require('../middleware/uploadMiddleware');
const { list_ask_tournaments, asktournamentOverview, add_ask_tournament } = require("../controller/ask_tournamentController");


// TK ROUTES
// router.get('/', tournament),
// router.get('/:slug', tournamentOverview)
// router.get('/gallery-folder/:slug', tournamentGalleryFolder)
// router.get('/gallery/:slug', tournamentGallery)


// ASK ROUTES
router.post('/create', 
    upload.fields([
    { name: "bannerimage", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "brochure", maxCount: 1 },
  ]), 
  add_ask_tournament);

router.get('/ask/tournaments/:type',list_ask_tournaments);
router.get('/:slug', asktournamentOverview)


module.exports = router