'use strict';


angular.module('duvsCryApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', '$location', function ($scope, localStorageService, $location) {
    $scope.navPage =  'root';

    $scope.user = localStorageService.get('email') ||  '';

    $scope.updateUser = function() {
      localStorageService.set('email', $scope.user);
    };

    $scope.startQuiz = function() {
      $location.path('/quiz');
    };

  }]);
