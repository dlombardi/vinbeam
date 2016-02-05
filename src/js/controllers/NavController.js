'use strict';

app.controller('NavController', ['$scope', '$window', '$timeout', '$log', ($scope, $window, $timeout, $log) => {
    $scope.main = true;

    $scope.$on("notInMain", () => $scope.main = false);
    $scope.$on("insideMain", () => $scope.main = true);

    $scope.scrollTo = (event) => $scope.$emit("toSection", event.target.innerHTML.toLowerCase());
    $scope.scrollToTop = () => $scope.$emit('toTop');

    var updateCollapsable = _.debounce((e) => {
      $log.info(window.innerWidth);
      if(window.innerWidth <= 767){
        $('.nav-elem').attr({
          'data-toggle': 'collapse',
          'data-target': '#navigationBar'
        });
      } else {
        $('.nav-elem').removeAttr('data-toggle data-target');
      }
    }, 1000);

    window.addEventListener("resize", updateCollapsable, false);



}])
