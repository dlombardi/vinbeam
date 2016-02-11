'use strict';

var app = angular.module('vinbeam', ['ui.router', 'ngAnimate', 'duScroll']);

app.run(function ($rootScope, $state) {
  $rootScope.$on('notMain', function () {
    return $rootScope.$broadcast("notInMain");
  });
  $rootScope.$on('inMain', function () {
    return $rootScope.$broadcast("insideMain");
  });

  $rootScope.$on('toSection', function (err, section) {
    return $rootScope.$broadcast('goToSection', section);
  });
  $rootScope.$on('toTop', function () {
    return $rootScope.$broadcast('goToSection', "vinbeam");
  });
});

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider.state('main', { url: '/', templateUrl: '/html/main.html', controller: 'MainController' }).state('about', { url: '/about', templateUrl: '/html/about.html', controller: 'AboutController' });

  $urlRouterProvider.otherwise('/');
}]);
'use strict';

var blurbHelper = function blurbHelper() {
  var controller = ["$scope", function ($scope) {
    var vm = this;

    vm.blurbs = [];
    vm.lgCol = 'col-lg-' + vm.lgColumns;
    vm.mdCol = 'col-md-' + vm.mdColumns;

    for (var prop in vm.datasource) {
      vm.blurbs.push(vm.datasource[prop]);
    }
  }];

  return {
    restrict: 'E',
    replace: true,
    scope: {
      datasource: '=',
      lgColumns: '@',
      mdColumns: '@'
    },
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: '../html/directiveTemplates/blurbHelper.html'
  };
};

app.directive('blurbHelper', blurbHelper);
'use strict';

var sectionHeader = function sectionHeader() {
  var controller = ["$scope", function ($scope) {
    var header = this;

    header.class = header.section + '-header';
    header.bigTitle = header.title.toUpperCase();
    header.subtitle = header.subtitle;
  }];

  return {
    restrict: 'E',
    replace: true,
    scope: {
      section: '@',
      title: '@',
      subtitle: '@'
    },
    controller: controller,
    controllerAs: 'header',
    bindToController: true,
    templateUrl: '../html/directiveTemplates/headerTemplate.html'
  };
};

app.directive('sectionHeader', sectionHeader);
'use strict';

app.controller('AboutController', ['$scope', '$window', '$rootScope', '$http', function ($scope, $window, $rootScope, $http) {
  $scope.submitEmail = function () {
    $http.post('email', $scope.email).success(function (email){
      console.log(email);
    });
  };
  $scope.$emit("notMain");
}]);
'use strict';

app.controller('MainController', ['$scope', '$window', '$timeout', '$document', function ($scope, $window, $timeout, $document) {
  $scope.features = [{
    title: "Inventory Management",
    image: '../../assets/images/car_rental.png',
    description: 'Proprietary module plugged into the ODB-II port delivers data and location with near zero battery drain, and pin-point accuracy.',
    bullets: ["Perform complete Inventory reconciliation without leaving your desk", "Deliver bank audits without the need for a physical count", "Enhance your DMS system with actual location"]
  }, {
    title: "Vehicle Security",
    image: '../../assets/images/shield.png',
    description: 'Know when a vehicle is accessed without authorization and know its location 24/7',
    bullets: ["Without the key in the vehicle", "You know the second a door is opened", "Customize the alert times and who gets them - including security", "Surrounding vehicles are aware of what is happening to the others around it"]
  }, {
    title: "Vehicle Positioning",
    image: '../../assets/images/map_marker.png',
    description: 'Position of the car on the lot',
    bullets: ["Mobile app or web browser", "Know where the vehicle is on the lot", "With the presence of the mobile App, know the location of any vehicle off the lot"]

  }, {
    title: "Vehicle Statistics",
    image: '../../assets/images/speedometer_96.png',
    description: 'Vehicle life-cycle history of events',
    bullets: ["Where and who test drives the vehicle", "How much Gas and Battery is left", "How long it has been sitting in one place"]
  }];

  $scope.steps = [{
    title: "The Module",
    image: '../../assets/images/module.png',
    bullets: ["Plugs into ODB-II Port in the vehicle", "Near zero battery useage", "Reports location & statistics", "Proprietary network - all vehicles work together", "Communicate to the gateway"]
  }, {
    title: "The Gateway",
    image: '../../assets/images/router.png',
    bullets: ["Secure wireless router in dealership", "Brain of the proprietary network", "Reports vehicle data to Cloud Backend", "One Gateway will generally cover each individual lot"]
  }, {
    title: "Vehicle Data Access",
    image: '../../assets/images/cloud_storage.png',
    bullets: ["Access from any web browser", "Admin controls for Users and data", "Data stores of ALL data from vehicles", "Sortable reports on vehicle location and data"]
  }];

  $scope.benefitRowOne = [{
    title: "Easy Access & Set-up",
    image: '../../assets/images/easy_setup.png',
    bullets: ["Access through any web browser for Admin", "iOS and Android support for mobile", "One touch vehicle on-boarding", "Easy reporting on all devices"]
  }, {
    title: "Saving You Money",
    image: '../../assets/images/money_box.png',
    bullets: ["No more lengthy inventory audits", "No vehicles missing, on or off the lot", "Move stagnant inventory to sales positions", "Additional early warning security from the vehicle"]
  }];

  $scope.benefitRowTwo = [{
    title: "Everything at your fingertips",
    image: '../../assets/images/one_finger.png',
    bullets: ["Salesman have a \"My Inventory\" for current deals", "What cars are being shown to who, and by who", "Reconcile inventory for bank audits by location", "Cars needing a charge/gas without going to the vehicle"]
  }, {
    title: "Absolute Security",
    image: '../../assets/images/security_checked.png',
    bullets: ["24 hour monitoring", "INSTANT notifications to one or many", "Without the vehicle being turned on", "All the vehicles work together to monitor"]
  }];

  $scope.$on('goToSection', function (err, section) {
    var element = angular.element(document.getElementById(section));
    $document.scrollToElement(element, 0, 1000);
  });

  $scope.$emit("inMain");
}]);
'use strict';

app.controller('NavController', ['$scope', '$window', '$timeout', '$log', function ($scope, $window, $timeout, $log) {
  $scope.main = true;

  $scope.$on("notInMain", function () {
    return $scope.main = false;
  });
  $scope.$on("insideMain", function () {
    return $scope.main = true;
  });

  $scope.scrollTo = function (event) {
    return $scope.$emit("toSection", event.target.innerHTML.toLowerCase());
  };
  $scope.scrollToTop = function () {
    return $scope.$emit('toTop');
  };

  var updateCollapsable = _.debounce(function (e) {
    $log.info(window.innerWidth);
    if (window.innerWidth <= 767) {
      $('.nav-elem').attr({
        'data-toggle': 'collapse',
        'data-target': '#navigationBar'
      });
    } else {
      $('.nav-elem').removeAttr('data-toggle data-target');
    }
  }, 1000);

  window.addEventListener("resize", updateCollapsable, false);
}]);
