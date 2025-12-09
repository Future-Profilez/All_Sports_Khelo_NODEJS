const express = require("express")
const {fetchTournament} = require("../controller/tournamentController.js")
const router = express.Router()

router.get('/fetch',fetchTournament)

module.exports = router