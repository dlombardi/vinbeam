'use strict';

app.controller('NavController', ['$scope', '$window', '$timeout' , function($scope, $window, $timeout){
    $scope.main = true;

    $scope.$on("notInMain", () => $scope.main = false);
    $scope.$on("insideMain", () => $scope.main = true);

    $scope.scrollTo = (event) => $scope.$emit("toSection", event.target.innerHTML.toLowerCase());

}])
