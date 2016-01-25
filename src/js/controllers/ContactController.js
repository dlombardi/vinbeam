'use strict';

app.controller('ContactController', ['$scope', '$window', function($scope, $window){

  $scope.$emit('notMain');
}])
