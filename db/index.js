var conn = require('./conn');
var User = require('./User');
var Office = require('./Office');
var seedFile = require('./seed');

User.belongsTo(Office);
Office.hasMany(User);

var models = {
  User,
  Office
}

const seed = () => {
  return seedFile(User, Office);
}
const sync = () => {
  return conn.sync({force: true});
};

module.exports = {
  sync,
  seed,
  models
};
