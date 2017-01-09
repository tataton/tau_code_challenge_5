var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hero = require('../models/heroModel');

// get all heros
router.get('/', function(req, res) {
  Hero.find({}, function(err, allHeroes) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(allHeroes);
      res.status(200).send(allHeroes);
    }
  }); // end hero GET/find
});

// post to create a new hero
router.post('/', function(req, res) {
  console.log('POST route hit.', req.body);
  // Assemble hero to add via mongoose.
  var newHero = new Hero({
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  });
  // Save the hero in the database.
  newHero.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Added new hero.');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
