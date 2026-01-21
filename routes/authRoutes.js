const express = require('express')
const {register, verifyOtp, login, sendOtp} = require('../controller/authController.js')
const router = express.Router()

router.post('/register', register)
router.post('/send-otp', sendOtp)
router.post('/verify-otp',verifyOtp)
router.post('/login', login)

module.exports = router;