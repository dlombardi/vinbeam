'use strict';

let app = angular.module('vinbeam', ['ui.router', 'ngAnimate', 'duScroll']);

app.run(($rootScope, $state) => {
  $rootScope.$on('notMain', () => $rootScope.$broadcast("notInMain"));
  $rootScope.$on('inMain', () => $rootScope.$broadcast("insideMain"));

  $rootScope.$on('toSection', (err, section) => $rootScope.$broadcast('goToSection', section));
  $rootScope.$on('toTop', () => $rootScope.$broadcast('goToSection', "vinbeam"));
});

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", ($stateProvider, $locationProvider, $urlRouterProvider) => {
$locationProvider.html5Mode(true).hashPrefix('!');

$stateProvider
  .state('main', { url: '/', templateUrl: '/html/main.html', controller: 'MainController' })
  .state('contact', { url: '/contact', templateUrl: '/html/contact.html', controller: 'ContactController' })

  $urlRouterProvider.otherwise('/');
}]);
