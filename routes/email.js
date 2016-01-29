var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
  res.send(req.body)
  // mailgun.sendText(
  //   req.body.email,
  //   'darien.lombardi@gmail.com',
  //   $scope.subject,
  //   $scope.message,
  //   function(err){
  //     if(err){
  //       res.send(res.status('400'))
  //     } else {
  //       res.send(res.status('200') + ' success!');
  //     }
  //   }
  // )
});

module.exports = router;
