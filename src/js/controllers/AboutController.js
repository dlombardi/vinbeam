'use strict';

app.controller('AboutController', ['$scope', '$window', '$rootScope', ($scope, $window, $rootScope) => {
  $scope.$emit("notMain");
}])
