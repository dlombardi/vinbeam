var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VINBeam' });
});

router.post('/email', function(req, res, next){
  console.log('test');
   res.end();
});

module.exports = router;
