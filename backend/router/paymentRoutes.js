const express = require('express');
const { checkout,sendkey,paymentVerification } = require('../controllers/paymentControllers');
const router = express.Router();

router.post('/checkout', (req, res) => checkout(req, res));
router.post('/paymentverification', (req, res) => paymentVerification(req, res));
router.get('/getkey', (req, res) => sendkey(req, res));

module.exports = router;