const express = require('express');
const router = express.Router();
const { searchFlight, bookFlight, getBookedFlights, getUserDetails, updateUserDetails,alreadybooked, searchAllFlights } = require('../controllers/appController');



router.get('/getbookedflights', (req, res) => getBookedFlights(req, res));
router.get('/getuserdetails', (req, res) => getUserDetails(req, res));
router.post('/bookflight', (req, res) => bookFlight(req, res));
router.post('/canbook', (req, res) => alreadybooked(req, res));
router.post('/searchflight', (req, res) => searchFlight(req, res));
router.post('/searchAllFlights', (req, res) => searchAllFlights(req, res));
router.put('/updateuserdetails', (req, res) => updateUserDetails(req, res));

module.exports = router;
