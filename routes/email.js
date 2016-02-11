var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: "mg.vinbeam.com"});


router.post('/', function(req, res, next){
  var data = {
    from: req.body.address,
    to: 'info@vinbeam.com',
    subject: req.body.subject,
    text: req.body.message
  };
  //
  mailgun.messages().send(data, function (error, body) {
    res.send({status: 200});
  });
});

module.exports = router;
