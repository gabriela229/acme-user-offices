var express = require('express');
var router = express.Router();
var db = require('../db');



router.get('/', function(req, res, next){
  db.models.User.findAll()
  .then( users => {
    res.send(users);
  });
});

router.delete('/:id', function(req, res, next){

})

router.put('/:id', function(req, res, next){
  console.log(req.body);
  db.models.User.findById(req.params.id)
    .then( user => {
      user.update({
        officeId: req.body.officeId * 1
      });
      res.send(user);
    })
})

router.post('/', function(req, res, next){
  db.models.User.create(req.body)
  .then( user => {
    res.send(user);
  })
})

module.exports = router;
