const express = require("express")
const { tournamentOverview, tournament} = require("../controller/tournamentController.js")
// const validate = require("../middleware/validate.js")
// const { tournament } = require("../validation/tournamentValidation.js")
const router = express.Router()

router.get('/', tournament),
router.get('/:slug', tournamentOverview)

module.exports = router