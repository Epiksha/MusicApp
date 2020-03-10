const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = require('./config/config');
const router = require('./router');
const { sequelize } = require('./models');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, 'public'));
dotenv.config();

// Middleware
app.use(cors(config.cors));
app.options('*', cors(config.cors));
app.use(morgan('combined'));
app.use(express.json());
app.use(staticFileMiddleware);

// Router
app.use('/', router);

// Database & Boot
(async () => {
    await sequelize.sync();
    app.listen(process.env.PORT);
})();
