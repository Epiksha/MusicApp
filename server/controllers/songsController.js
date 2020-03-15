const { Song } = require('../models');

module.exports = {
    async retrieveSongs(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10,
            });
            console.log('Songs:');

            res.send(songs);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to fetch the songs',
            });
        }
    },
    
    async getSingleSong(req, res) {
        try {
            const song = await Song.findOne({ where: { id: req.params.id } });

            res.send(song);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to fetch the song',
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
