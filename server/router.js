const express = require('express');
const authController = require('./controllers/authController');
const authPolicy = require('./policies/AuthPolicy');
const songsController = require('./controllers/songsController');

const router = express.Router();

router.post('/register', authPolicy.register, authController.register);
router.post('/login', authController.login);
router.get('/songs', songsController.retrieveSongs);
router.get('/songs/:id', songsController.getSingleSong);
router.put('/songs/:id', songsController.updateSong);
router.post('/songs', songsController.newSong);
router.delete('/songs', songsController.deleteSong);

module.exports = router;
