const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const db = {};

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DIALECT,
        host: process.env.HOST,
        storage: './musicapp.sqlite',
    },
);

// Get all files in current directory, filter out 'index.js', then import each file as a model to db
fs.readdirSync(__dirname).filter((file) => file !== 'index.js').forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
