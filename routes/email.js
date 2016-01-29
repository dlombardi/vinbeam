var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/', function(req, res, next){
  res.send(req.body)
  mailgun.sendText(
    req.body.email,
    'darien.lombardi@gmail.com',
    $scope.subject,
    $scope.message,
    function(err){
      if(err){
        res.send(res.status('400'))
      } else {
        res.send(res.status('200') + ' success!');
      }
    }
  )
});

module.exports = router;
