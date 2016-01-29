'use strict';

app.controller('AboutController', ['$scope', '$window', '$rootScope', '$http', ($scope, $window, $rootScope, $http) => {
  $scope.submitEmail = () => {
    $http.post('email', $scope.email)
    .success(email =>
      console.log(email)
    )
  }
  $scope.$emit("notMain");
}])
