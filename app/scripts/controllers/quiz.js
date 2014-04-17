'use strict';


angular.module('duvsCryApp')
  .controller('QuizCtrl', function ($scope, localStorageService) {

    $scope.user = localStorageService.get('email') ||  '';


  });
