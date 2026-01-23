const express = require("express")
// const { tournamentOverview, tournament, tournamentGalleryFolder, tournamentGallery} = require("../controller/tournamentController.js")
// const validate = require("../middleware/validate.js")
// const { tournament } = require("../validation/tournamentValidation.js")
const router = express.Router()
const upload = require('../middleware/uploadMiddleware');
const { list_ask_tournaments, asktournamentOverview, add_ask_tournament, send_enquiry } = require("../controller/ask_tournamentController");
const { protect } = require("../middleware/authMiddleware");


// TK ROUTES
// router.get('/', tournament),
// router.get('/:slug', tournamentOverview)
// router.get('/gallery-folder/:slug', tournamentGalleryFolder)
// router.get('/gallery/:slug', tournamentGallery)


// ASK ROUTES
router.post('/create',
  protect, 
    upload.fields([
    { name: "bannerimage", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "brochure", maxCount: 1 },
  ]),protect, 
  add_ask_tournament);

router.get('/ask/tournaments/:type',list_ask_tournaments);
router.get('/:slug', asktournamentOverview)

//Enquiry routes
router.post('/add/enquiry',send_enquiry);


module.exports = router