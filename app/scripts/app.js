'use strict';

angular
  .module('duvsCryApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/quiz/:questionId?', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
