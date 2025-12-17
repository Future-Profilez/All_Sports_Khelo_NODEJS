const express = require("express")
const { tournamentOverview, tournament, tournamentGalleryFolder, tournamentGallery} = require("../controller/tournamentController.js")
// const validate = require("../middleware/validate.js")
// const { tournament } = require("../validation/tournamentValidation.js")
const router = express.Router()

router.get('/', tournament),
router.get('/:slug', tournamentOverview)
router.get('/gallery-folder/:slug', tournamentGalleryFolder)
router.get('/gallery/:slug', tournamentGallery)

module.exports = router