const express = require('express');
const router = express.Router();
const { addFeedback, getAllFeedback } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addFeedback', (req, res) => {
    addFeedback(req, res);
});
router.get('/getAllFeedback', authMiddleware, (req, res) => {
    getAllFeedback(req, res);
});
module.exports = router;
