'use strict';


angular.module('duvsCryApp')
  .controller('DictionaryCtrl', ['$scope', 'localStorageService', '$routeParams', '$route', '$location', 'QuizQuestions', function ($scope, localStorageService, $routeParams, $route, $location, QuizQuestions) {
    $scope.navPage =  'dictionary';

    $scope.questions = QuizQuestions;

    $scope.finishedStudying = function() {
      localStorageService.set('userAnswers',[]);
      $location.path('/quiz');
    };

    // Set up everything
    $scope.bootstrap = function() {
      // Cheating/Studying so clear
      localStorageService.set('userAnswers',[]);
    };
    $scope.bootstrap();

  }]);
