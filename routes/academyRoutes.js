const express = require('express')
const { academies } = require('../controller/academyController.js')
const router = express.Router()

router.get('/academies',academies);

module.exports = router 