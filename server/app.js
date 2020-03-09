const history = require('connect-history-api-fallback');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = require('./config/main');
const router = require('./router');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, 'public'));
dotenv.config();

// Middleware
app.use(cors(config.cors));
app.options('*', cors(config.cors));
app.use(history(config.history));
app.use(morgan('combined'));
app.use(express.json());
app.use(staticFileMiddleware);

// Router
app.use('/', router);

// eslint-disable-next-line no-console
app.listen(process.env.PORT, console.log(`Express app listening on port ${process.env.PORT}.`));
