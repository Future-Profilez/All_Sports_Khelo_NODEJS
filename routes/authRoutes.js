const express = require('express')
const {register, verifyOtp, login} = require('../controller/authController.js')
const router = express.Router()

router.post('/register', register)
router.post('/verify-otp',verifyOtp)
router.post('/login', login)

module.exports = router;