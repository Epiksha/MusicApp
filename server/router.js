const express = require('express');
const authController = require('./controllers/authController');
const authPolicy = require('./policies/AuthPolicy');

const router = express.Router();

router.get('/index.html', (req, res, next) => {
    res.send('Hello');
    next();
});

router.post('/register', authPolicy.register, authController.register);
router.post('/login', authController.login);

module.exports = router;
