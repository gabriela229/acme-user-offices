var Sequelize = require('sequelize');
var conn = require('./conn');


var User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  }
});


module.exports = User;
