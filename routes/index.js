var express = require('express');
const fire = require('C:/Users/menga/Documents/GitHub/trash3/services/g_fireBase');
var router = express.Router();
//var vision = require('C:/Users/menga/Documents/GitHub/trash3/services/gcloud-service');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

router.get('/Challenges', function(req, res, next) {
  res.render('Challenges');
});

router.get('/Profile', function(req, res, next) {
  res.render('Profile');
});
router.get('/cleanUp', function(req, res, next) {
  res.render('cleanUp');
});
router.get('/Leaderboards', function(req, res, next) {
  res.render('Leaderboards');
});
module.exports = router;
