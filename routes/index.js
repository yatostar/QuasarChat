var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/join', function(req, res, next) {
	res.render('signup');
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

router.get('/chat', function(req, res, next) {
	res.render('chat');
});

module.exports = router;
