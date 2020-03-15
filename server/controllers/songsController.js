const { Song } = require('../models');

module.exports = {
    async retrieveSongs(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10,
            });

            res.send(songs);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to fetch the songs',
            });
        }
    },
    
    async getSingleSong(req, res) {
        try {
            const song = await Song.findByPk(req.params.id);

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
            res.status(500).send({
                error: 'Error occured trying to create the song',
            });
        }
    },
    
    async updateSong(req, res) {
        try {
            const song = await Song.findByPk(req.body.id);

            song.update(req.body);

            res.send(song);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to update the song',
            });
        }
    },
    
    async deleteSong(req, res) {
        try {
            console.log(req.body.id);
            await Song.destroy({
                where: {
                    id: req.body.id,
                },
            });

            res.send(200);
        } catch (err) {
            res.status(500).send({
                error: 'Error occured trying to delete the song',
            });
        }
    },
};
