'use strict';

let app = angular.module('vinbeam', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'duScroll']);

app.run(($rootScope, $state) => {
  $rootScope.$on('notMain', () => $rootScope.$broadcast("notInMain"));
  $rootScope.$on('inMain', () => $rootScope.$broadcast("insideMain"));

  $rootScope.$on('toSection', (err, section) => $rootScope.$broadcast('goToSection', section));
});

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", ($stateProvider, $locationProvider, $urlRouterProvider) => {
$locationProvider.html5Mode(true).hashPrefix('!');

$stateProvider
  .state('main', { url: '/', templateUrl: '/html/main.html', controller: 'MainController' })
  .state('about', { url: '/about', templateUrl: '/html/about.html', controller: 'AboutController' })
  .state('contact', { url: '/contact', templateUrl: '/html/contact.html', controller: 'ContactController' })

  $urlRouterProvider.otherwise('/');
}]);
