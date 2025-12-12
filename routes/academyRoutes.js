const express = require('express')
const { academies, academyDetails } = require('../controller/academyController.js')
const router = express.Router()

router.get('/',academies);
router.get('/:slug',academyDetails);

module.exports = router 