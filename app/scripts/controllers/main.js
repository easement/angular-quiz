'use strict';


angular.module('duvsCryApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.user = localStorageService.get('email') ||  '';

    $scope.updateUser = function () {
      localStorageService.set('email', $scope.user);
    };

  });
