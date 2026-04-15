const {Router} = require('express');
const { register,login, verifyUser} = require('../controllers/authControllers');
const router = Router();
const authMiddleware = require('../middleware/authMiddleware')


router.post('/register', (req, res) => register(req, res));
router.post('/login', (req, res) => login(req, res));
router.get('/verify', authMiddleware, (req, res) => verifyUser(req, res));

module.exports = router