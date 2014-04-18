'use strict';


angular.module('duvsCryApp')
  .controller('ScoreCtrl', function ($scope, localStorageService, $routeParams, $route, $location, QuizQuestions) {

    $scope.questions = QuizQuestions;


    /////////////////////////
    // SCORING METHODS
    /////////////////////////

    // Grab the values from the questions key
    $scope.getAnswerKey = function () {
      return _.pluck($scope.questions, 'answer');
    };

    // Length the same
    $scope.allAnswered = function() {
      return $scope.getAnswerKey().length == localStorageService.get('userAnswers').length
    };

    $scope.getUserAnswers = function() {
      return localStorageService.get('userAnswers') || []
    };

    $scope.gradeQuiz = function() {
      var answerKey;
      var userAnswers;
      if (!$scope.allAnswered()) {
        console.log ("ERRROR");
        console.log ("only " + localStorageService.get('userAnswers').length + ' anserwed');
      } else {
        $scope.graded = [];
        answerKey = $scope.getAnswerKey();
        userAnswers = $scope.getUserAnswers();
        _.each(answerKey, function(value, index) {
            $scope.graded[index] = (answerKey[index] == userAnswers[index]);
        });
      }

      return $scope.graded
    };
    $scope.gradeQuiz();


    $scope.generateStatsBasedOnGradedQuiz = function() {
      var results  = $scope.gradeQuiz();
      // Could subtract from total, but this reads nicer.
      var numRight = _.reject(results, function(correct) { return !correct;}).length;
      var numWrong = _.reject(results, function(correct) { return correct;}).length;
      var total    = results.length;
      var percent  = parseInt((numRight/ (total)) * 100);

      return {right: numRight, wrong: numWrong, total: total, percentage: percent}
    };


    // Set up everything
    $scope.bootstrap = function() {
      $scope.user    = localStorageService.get('email') ||  '';
      $scope.results = $scope.generateStatsBasedOnGradedQuiz();
    };
    $scope.bootstrap();

  });
