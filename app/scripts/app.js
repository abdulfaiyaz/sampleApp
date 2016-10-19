'use strict';

/**
 * @ngdoc overview
 * @name sampleAppApp
 * @description
 * # sampleAppApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAppApp', ['ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
     $stateProvider
    .state('home',
      {
        url: '/home',
        views:
        {
          'main':
          {
            templateUrl: 'views/main.html'
          }
        }
      })
    .state('about', {
        url: '/about',
        views:
        {
          'main':
          {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
  });
