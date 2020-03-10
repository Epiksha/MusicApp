const jwt = require('jsonwebtoken');

const { User } = require('../models');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;

    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: ONE_WEEK });
}

module.exports = {
    async register(req, res) {
        try {
        const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'This email is already in use.',
            });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: {
                    email,
                },
            });

            const isPasswordValid = await user.comparePassword(password);

            if (!user || !isPasswordValid) {
                res.status(403).send({
                    error: 'The login information was incorrect.',
                });
            }

            res.send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON()),
            });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.',
            });
        }
    },
};
