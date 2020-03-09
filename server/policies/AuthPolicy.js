const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8, 32}$')),
        };
        
        const { error } = Joi.validate(req.body, schema);
    
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address',
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        error: `You must provide a valid password according to the following rules:
                            <br>
                            1. It must contain ONLY the following characters: lower case, upper case, digits.
                            <br>
                            2. It must be at least 8 characters long and less than 32 characters long.`,
                    });
                    break;
                default:
                    res.state(400).send({
                        error: 'Invalid registration information.',
                    });
            }
        } else {
            next();
        }
    },
};
