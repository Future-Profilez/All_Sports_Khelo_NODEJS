const express = require('express')
const {fetchSports, send_sport_enquiry} = require('../controller/sportsController.js')
const router = express.Router()

router.get('/sports/fetch',fetchSports)
router.post('/enquiry/add',send_sport_enquiry)

module.exports = router 