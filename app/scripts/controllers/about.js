'use strict';


angular.module('duvsCryApp')
  .controller('AboutCtrl', ['$scope', 'localStorageService', '$location', function ($scope, localStorageService, $location) {
    $scope.navPage =  'about';

    $scope.takeQuiz = function() {
      localStorageService.set('userAnswers',[]);
      $location.path('/quiz');
    };

}]);
