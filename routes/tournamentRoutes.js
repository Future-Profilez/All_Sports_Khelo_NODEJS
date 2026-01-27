const express = require("express")
// const { tournamentOverview, tournament, tournamentGalleryFolder, tournamentGallery} = require("../controller/tournamentController.js")
// const validate = require("../middleware/validate.js")
// const { tournament } = require("../validation/tournamentValidation.js")
const router = express.Router()
const upload = require('../middleware/uploadMiddleware');
const { list_ask_tournaments, asktournamentOverview, add_ask_tournament, send_enquiry, list_enquiries, delete_enquiries, mark_Enquiry, mark_AllEnquiry } = require("../controller/ask_tournamentController");
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

// router.get('/ask/tournaments/:type',list_ask_tournaments);
router.get('/ask/tournaments/:type',protect, list_ask_tournaments);
router.get('/:slug', asktournamentOverview)

//Enquiry routes
router.post('/add/enquiry',send_enquiry);
router.get('/enquiries/:tour_id',list_enquiries);
router.delete('/enquiry/:id', delete_enquiries);
router.put('/mark/:id', mark_Enquiry);
router.put('/markall/:id', mark_AllEnquiry);


module.exports = router