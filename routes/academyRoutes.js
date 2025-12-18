const express = require('express')
const { academies, academyDetails, academyDetailsByType } = require('../controller/academyController.js')
const router = express.Router()

router.get('/',academies);
router.get('/:slug/:type',academyDetailsByType);

module.exports = router 