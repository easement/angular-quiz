'use strict';

angular.module('duvsCryApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    localStorageService.set('email', "matthew.billings@tapjoy.com");

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
