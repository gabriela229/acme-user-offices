var Sequelize = require('sequelize');
var conn = require('./conn');


var Office = conn.define('office', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lat: {
    type: Sequelize.FLOAT
  },
  lng: {
    type: Sequelize.FLOAT
  }
});


module.exports = Office;
