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
        console.log ("WEIRD QUIZ ABORT");
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


    $scope.isAnswerCorrect = function(index) {
      // console.log(QuizQuestions[index].answer);
      // console.log(localStorageService.get('userAnswers')[index]);
      // console.log(QuizQuestions[index].answer == localStorageService.get('userAnswers')[index]);
      return QuizQuestions[index].answer == localStorageService.get('userAnswers')[index];
    };

    $scope.getUserAnsweredTerm = function(index) {
      return QuizQuestions[index].answers[localStorageService.get('userAnswers')[index]];
    };

    $scope.getCorrectAnsweredText = function(index) {
      var correctAnswerLetter = QuizQuestions[index].answer;
      return QuizQuestions[index].answers[correctAnswerLetter];
    };


   $scope.getQuizResults = function() {
      // Format
      //[{correct: true, term:term, userAnswer: "aaa", correctAnswer: "bbb"},....]
      var results = [];
      _.each(QuizQuestions, function(question, index) {
        results.push({correct: $scope.isAnswerCorrect(index), term: QuizQuestions[index].term, userAnswer: $scope.getUserAnsweredTerm(index), correctAnswer: $scope.getCorrectAnsweredText(index)});
      });
      return results;
    };

    // ng-repeat goes crazy with digest: http://stackoverflow.com/questions/17116114/how-to-troubleshoot-angular-10-digest-iterations-reached-error
    $scope.quizResults = $scope.getQuizResults();



    $scope.getPreviousScore = function() {
      var ps = localStorageService.get('previousScore');
      return  (ps < 0) ? 0 : ps;
    };

    $scope.getCurrentHighScore = function() {
      var hs = localStorageService.get('highScore');
      return  (hs < 0) ? 0 : hs;
    };

    // Get the max from this score and the previous high score
    $scope.recordHighScore = function() {
      var curr    = $scope.results.percentage;
      var allTime = $scope.getCurrentHighScore();
      var highScore = (curr > allTime) ? curr : allTime;
      localStorageService.set('highScore', highScore);
    };

    $scope.recordPreviousScore = function() {
      localStorageService.set('previousScore', $scope.results.percentage);
    };


    $scope.prepareQuizForRetake = function() {
      $scope.recordPreviousScore();
      localStorageService.set('userAnswers',[]);
      $location.path('/quiz');
    };

    $scope.showDictionary = function() {
      $location.path('/dictionary');
    };

    // Set up everything
    $scope.bootstrap = function() {
      $scope.user    = localStorageService.get('email') ||  '';
      $scope.results = $scope.generateStatsBasedOnGradedQuiz();
      $scope.recordHighScore();
      $scope.highScore     = $scope.getCurrentHighScore();
      $scope.previousScore = $scope.getPreviousScore();
    };
    $scope.bootstrap();

  });
