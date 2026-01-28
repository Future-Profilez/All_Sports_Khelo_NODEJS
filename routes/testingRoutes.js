const express = require('express');
const { addDate } = require('../controller/testingController');
const router = express.Router();

router.post('/createTestDate', addDate);

module.exports = router