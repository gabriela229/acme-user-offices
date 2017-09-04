var conn = require('./conn');
var User = require('./User');
var Office = require('./Office');

User.belongsTo(Office);
Office.hasMany(User);

var models = {
  User,
  Office
}

const sync = () => {
  return conn.sync({force: true});
};

module.exports = {
  sync,
  models
};
