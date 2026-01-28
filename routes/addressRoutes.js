const express = require('express');
const { statesList, countriesList, cityList } = require('../controller/addressController');
const router = express.Router()

router.get('/allcountries',countriesList)
router.get('/states/country/:countryid', statesList);
router.get('/cities/state/:stateid',cityList);


module.exports = router 