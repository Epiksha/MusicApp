const express = require('express');

const router = express.Router();

router.get('/index.html', (req, res, next) => {
    res.send('Hello');
    next();
});

router.post('/register', (req, res) => {
    res.send({
        message: `Your email, ${req.body.email}, is now registered.`,
    });
});

module.exports = router;
