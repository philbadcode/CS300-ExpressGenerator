var express = require('express');
var router = express.Router();
var username;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  username = req.body.username;
  res.redirect('/dashboard');
});

module.exports = router;