var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/accounts', function(req, res, next) {
  models.Account.findAll().then(function(accounts){
  		res.json(accounts);
  		
  });
});

module.exports = router;
