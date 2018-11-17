var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Get CreateZone Page */
router.get('/createzone', function(req, res, next) {
  res.render('createZone', null);
});

/* Get CreateComment Page */
router.get('/createcomment', function(req, res, next) {
  res.render('createComment', null);
});

module.exports = router;
