'use strict';


angular.module('duvsCryApp')
  .controller('QuizCtrl', function ($scope, localStorageService, $routeParams, $route, $location) {

    // Set up everything
    $scope.bootstrap = function() {
      $scope.user = localStorageService.get('email') ||  '';
      $scope.questionId = $routeParams.questionId || 0;
      $scope.userAnswers = [];
      $scope.currentAnswer = '';
      $scope.progressPercent = 0;
      jQuery('.bar').progressbar();
    };
    $scope.bootstrap();


    $scope.next = function (){
      $scope.logAnswer();
      // Todo out of bounds
      $scope.questionId++;
      $scope.currentAnswer = '';
      jQuery('#myprogress .bar').animate({width: $scope.getPercentage() + '%' });
    };

    $scope.getPercentage = function () {
      console.log($scope.questionId + 1);
      console.log($scope.questions.length);
      console.log(((($scope.questionId + 1) / $scope.questions.length) * 100).toFixed(2));
      return ((($scope.questionId + 1) / $scope.questions.length) * 100).toFixed(2);
    };

    $scope.logAnswer = function() {
      console.log ($scope.currentAnswer);
      //TODO - serialze / deserialize object
      localStorageService.set('question' + $scope.questionId, $scope.currentAnswer);
    };

    $scope.questions = [
      {
        'term': 'DAU',
        'answers': {
            'a': 'Daily Active Users',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'MAU',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Monthly Active Users',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'Reach',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Monthly Reach'
          },
        'answer': 'd'
      },
      {
        'term': 'DUV (doves)',
        'answers': {
            'a': 'Daily Unique Viewers',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'MUV',
        'answers': {
            'a': 'wrong',
            'b': 'Monthly Unique Viewers',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'DUC (ducks)',
        'answers': {
            'a': 'wrong',
            'b': 'Daily Unique Converters',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'MUC',
        'answers': {
            'a': 'Monthly Unique Converters',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'OW',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Offerwall'
          },
        'answer': 'd'
      },
      {
        'term': 'Featured',
        'answers': {
            'a': 'Featured Ads',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'Display',
        'answers': {
            'a': 'Display Ads',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'TJC',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Tapjoy.com',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'CPI (PPI)',
        'answers': {
            'a': 'wrong',
            'b': 'Cost per Install',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'CPE (PPE)',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Cost per Engagement'
          },
        'answer': 'd'
      },
      {
        'term': 'CPA',
        'answers': {
            'a': 'Cost per Action',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'CPV',
        'answers': {
            'a': 'wrong',
            'b': 'Cost per View',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'CPC',
        'answers': {
            'a': 'Cost per Click',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'Impression',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Ad Impression',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'OWO',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Offerwall Open'
          },
        'answer': 'd'
      },
      {
        'term': 'OWO Rate',
        'answers': {
            'a': 'Offerwall Open Rate',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'Rank',
        'answers': {
            'a': 'Offerwall Rank',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'Click',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Click',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'Convs',
        'answers': {
            'a': 'Conversion',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'CTR',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Click Through Rate'
          },
        'answer': 'd'
      },
      {
        'term': 'CVR',
        'answers': {
            'a': 'Conversion Rate',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'ACR',
        'answers': {
            'a': 'wrong',
            'b': 'Action Conversion Rate',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'Spend',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Ad Spend',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'Earnings',
        'answers': {
            'a': 'wrong',
            'b': 'Publisher Earnings',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'GR',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Gross Revenue'
          },
        'answer': 'd'
      },
      {
        'term': 'TJR',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Tapjoy Revenue'
          },
        'answer': 'd'
      },
      {
        'term': 'eCPM',
        'answers': {
            'a': 'Effective Cost per Thousand Impressions',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'eCPM OW',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Effective Cost per Thousand Opens',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'UDID',
        'answers': {
            'a': 'Device id',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'ARPC',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Avg Revenue Per Conversion'
          },
        'answer': 'd'
      },
      {
        'term': 'ARPU',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Avg Revenue Per User',
            'd': 'wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'ARPPU',
        'answers': {
            'a': 'wrong',
            'b': 'Avg Revenue Per Paying User',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'b'
      },
      {
        'term': 'ARPDAU',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'Avg Revenue Per Daily Active User'
          },
        'answer': 'd'
      },
      {
        'term': 'Show Rate',
        'answers': {
            'a': 'Offer Show Rate',
            'b': 'wrong',
            'c': 'wrong',
            'd': 'wrong'
          },
        'answer': 'a'
      },
      {
        'term': 'Country',
        'answers': {
            'a': 'wrong',
            'b': 'wrong',
            'c': 'Country of User',
            'd': 'wrong'
          },
        'answer': 'c'
      }
    ]


  });
