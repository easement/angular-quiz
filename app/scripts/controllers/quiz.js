'use strict';


angular.module('duvsCryApp')
  .controller('QuizCtrl', function ($scope, localStorageService, $routeParams, $route, $location, QuizQuestions) {
    $scope.navPage =  'quiz';

    // Set up everything
    $scope.bootstrap = function() {
      $scope.user          = localStorageService.get('email') ||  '';
      $scope.questionId    = $routeParams.questionId || 0;
      $scope.userAnswers   = localStorageService.get('userAnswers') || [];
      $scope.currentAnswer = '';
      $scope.questions     = QuizQuestions;
    };

    $scope.bootstrap();

    $scope.next = function (){
      $scope.logAnswer();
      // Todo out of bounds
      var nextQuestion = $scope.questionId + 1;

      if (nextQuestion < $scope.questions.length) {
        $scope.questionId    = nextQuestion;
        $scope.currentAnswer = '';
        jQuery('.progress-bar').progressbar({display_text: 'fill'});
        jQuery('.submit button.btn').blur();
      } else {
        $location.path('/score');
      }
    };

    $scope.getPercentage = function () {
      return ((($scope.questionId + 1) / $scope.questions.length) * 100).toFixed(2);
    };

    $scope.logAnswer = function() {
      $scope.userAnswers[$scope.questionId] = $scope.currentAnswer;
      localStorageService.set('userAnswers', JSON.stringify($scope.userAnswers));
    };

  });
