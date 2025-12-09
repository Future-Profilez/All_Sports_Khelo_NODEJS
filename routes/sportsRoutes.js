const express = require('express')
const {fetchSports} = require('../controller/sportsController.js')
const router = express.Router()

router.get('/sports/fetch',fetchSports)

module.exports = router 