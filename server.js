const express = require('express'),
      nunjucks = require('nunjucks'),
      bodyParser = require('body-parser'),
      path = require('path'),
      db = require('./db');

var app = express();

nunjucks.configure('views', {
  express: app,
  noCache: true
});

app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public/source')));
app.use('/users', require('./routes/users'));
app.use('/offices', require('./routes/offices'));

app.get('/', function(req, res, next){
  res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  return db.sync()
    .then( () =>{
      return db.seed();
    })
    .then( () => {
      console.log('seeded data');
    })
});

