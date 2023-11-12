var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  res.redirect('/dashboard');
});

module.exports = router;