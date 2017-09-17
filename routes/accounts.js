var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/create', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('create_account',{title:"小記帳"});
});

router.post('/create', function(req, res, next) {
  //console.log(req.body);
  models.Account.create({
  	title: req.body.title,
  	type: req.body.type,
  	cost: req.body.cost
  }).then(function(){
  	res.redirect('/');
  });
});

router.get('/:account_id/update',function(req, res, next){
  models.Account.findOne({
    where:{ id:req.params.account_id}
  }).then(function(account){
    res.render('update_account',{account:account});
  });
});

router.post('/:account_id/update',function(req, res, next){
  models.Account.findOne({
    where:{ id:req.params.account_id}
  }).then(function(account){
    account.update({
      title: req.body.title,
      type: req.body.type,
      cost: req.body.cost
    });
    res.redirect('/');
  });
});


router.post('/:account_id/delete',function(req, res, next){
  models.Account.destroy({
    where:{ id:req.params.account_id}
  }).then(function(){
    res.redirect('/');
  });
});




module.exports = router;
