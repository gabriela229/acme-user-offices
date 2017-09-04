var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', function(req, res, next){
  db.models.Office.findAll()
    .then( offices => {
      res.send(offices);
    });
})

router.delete('/:id', function(req, res, next){

})

router.post('/', function(req, res, next){
  db.models.Office.create(req.body)
    .then( office => {
      res.send(office);
    })
})

module.exports = router;
