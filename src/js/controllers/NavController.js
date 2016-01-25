'use strict';

app.controller('NavController', ['$scope', '$window', '$timeout' , function($scope, $window, $timeout){
    $scope.main = true;

    $scope.$on("notInMain", function(){
      $scope.main = false;
      console.log($scope.main);
    });

    $scope.$on("insideMain", function(){
      $scope.main = true;
      console.log($scope.main);
    });
}])
