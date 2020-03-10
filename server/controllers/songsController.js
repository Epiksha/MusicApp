const { Song } = require('../models');

module.exports = {
    async retrieveSongs(req, res) {
        try {
            const song = await Song.findAll({
                limit: 10,
            });

            res.send(song);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to fetch the songs',
            });
        }
    },

    async newSong(req, res) {
        try {
            const song = await Song.create(req.body);

            res.send(song.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'Error occured trying to create the song',
            });
        }
    },
};
