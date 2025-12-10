const express = require("express")
const {fetchTournament, fetchContent} = require("../controller/tournamentController.js")
const router = express.Router()

router.get('/fetch',fetchTournament),
router.get('/fetch-content/:slug', fetchContent)

module.exports = router