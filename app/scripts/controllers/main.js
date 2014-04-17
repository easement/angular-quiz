'use strict';


angular.module('duvsCryApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    // localStorageService.set('email', 'matthew.billingsSSSSSSS@tapjoy.com');

    $scope.user = localStorageService.get('email') ||  '';

    $scope.updateUser = function () {
      localStorageService.set('email', $scope.user);
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
