var Sequelize = require('sequelize');

var conn = new Sequelize(process.env.DATABASE_URL, {logging: false});

module.exports = conn;
