const express = require('express')
const {register, verifyOtp, login, sendOtp, checkIsloggedIn, updateProfile, fetchUser} = require('../controller/authController.js')
const { protect } = require('../middleware/authMiddleware.js')
const router = express.Router()

router.post('/register', register)
router.post('/send-otp', sendOtp)
router.post('/verify-otp',verifyOtp)
router.post('/login', login)
router.get('/checkLogin', protect, checkIsloggedIn)

// Profile
router.get('/profile/:id', fetchUser)
router.put('/profile/update/:id',protect,updateProfile)
module.exports = router;    