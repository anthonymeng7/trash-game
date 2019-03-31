var express = require('express');
var router = express.Router();
//var vision = require('C:/Users/menga/Documents/GitHub/trash3/services/gcloud-service');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express', trashName: 'cookies' });
//  res.send(vision.quickStart());
});

module.exports = router;
