'use strict';


angular.module('duvsCryApp')
  .controller('QuizCtrl', ['$scope', 'localStorageService', '$routeParams', '$route', '$location', 'QuizQuestions', function ($scope, localStorageService, $routeParams, $route, $location, QuizQuestions) {
    $scope.navPage =  'quiz';

    // Set up everything
    $scope.bootstrap = function() {
      $scope.user          = localStorageService.get('email') ||  '';
      $scope.questionId    = $routeParams.questionId || 0;
      $scope.userAnswers   = localStorageService.get('userAnswers') || [];
      $scope.currentAnswer = '';
      $scope.questions     = QuizQuestions;
      $scope.previouslyAnswered = $scope.userAnswers[$scope.questionId] || '';
    };

    $scope.bootstrap();

    $scope.next = function (){
      $scope.logAnswer();
      var nextQuestion = parseInt($scope.questionId) + 1;

      if (nextQuestion < $scope.questions.length) {
        //$scope.questionId    = nextQuestion;
        $location.path('/quiz/' + nextQuestion);
      } else {
        $location.path('/score');
      }
    };


    $scope.prev = function (){
      $scope.logAnswer();
      var prevQuestion = parseInt($scope.questionId) - 1;

      if (prevQuestion < 0) {
        prevQuestion = 0;
      }
      $location.path('/quiz/' + prevQuestion);

    };

    $scope.getPercentage = function () {
      console.log(((($scope.questionId) / $scope.questions.length) * 100).toFixed(2));
      $scope.currentProgress();
      return ((($scope.questionId) / $scope.questions.length) * 100).toFixed(2);
    };

    $scope.logAnswer = function() {
      $scope.userAnswers[$scope.questionId] = $scope.currentAnswer;
      localStorageService.set('userAnswers', JSON.stringify($scope.userAnswers));
    };

    $scope.currentProgress = function() {
      jQuery('.progress-bar').progressbar({display_text: 'fill'});
      jQuery('.submit button.btn').blur();
    };

  }]);
