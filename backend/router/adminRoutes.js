const express = require('express');
const router = express.Router();
const { adminLogin,addFlight, editFlight,deleteFlight, getAllFlights } = require('../controllers/adminControllers');


router.get('/getallflights', (req, res) => getAllFlights(req, res));
router.post('/login', (req, res) => adminLogin(req, res));
router.post('/addflight', (req, res) => addFlight(req, res));
router.put('/updateFlight/:id', (req, res) => editFlight(req, res));
router.delete('/deleteFlight/:id', (req, res) => deleteFlight(req, res));

module.exports = router;
