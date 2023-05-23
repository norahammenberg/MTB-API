var express = require('express');
var router = express.Router();

//including mongoose och mtbmodule:
var mongoose = require('mongoose');
var mtbmodule = require ('../modules/mtbmodule.js');

//GET
router.get('/', function(req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i “bilarna”
  mtbmodule.find(function (err, mtb) {
    if (err) return next(err);
    else {
    //Om det inte uppstår fel så skicka mtb i jsonformat
    res.json(mtb);
    }
  });
});

//GET by ID:
router.get('/getOne/:id', (req, res, next) => {
  mtbmodule.findById(req.params.id, (err, mtb) => {
    if (err) return next(err);
      res.json(mtb);
  });
});

//POST
router.post('/CREATE', function(req, res, next) {
    //req.body är innehållet i requestobjektet, dvs en json med en mtb
    mtbmodule.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
    });
  });
  
  //DELETE
  router.delete('/DELETE/:id', function(req, res, next) {
    mtbmodule.findByIdAndDelete(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
      });
    });

//UPDATE:
router.post('/UPDATE/:id', function(req, res, next) {
  mtbmodule.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
