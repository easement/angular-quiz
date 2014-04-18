'use strict';

angular
  .module('duvsCryApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'LocalStorageModule',
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/quiz/:questionId?', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/dictionary', {
        templateUrl: 'views/dictionary.html',
        controller: 'DictionaryCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory("QuizQuestions", function(){
    return [
      {
        'term': 'DAU',
        'answers': {
            'a': 'Daily Active Users',
            'b': 'Direct Advertiser Utility',
            'c': 'Default Advertisement Unit',
            'd': 'Daily Audit Utility'
          },
        'answer': 'a'
      },
      {
        'term': 'Reach',
        'answers': {
            'a': 'Total devices with app launch',
            'b': 'Collection of CDN Zones',
            'c': 'Current users per advertiser',
            'd': 'Representation of the full advertising potential of Tapjoy'
          },
        'answer': 'd'
      },
      {
        'term': 'DUV (doves)',
        'answers': {
            'a': 'Daily Unique Viewers: A unique count of devices (UDID) that were actually exposed to an ad in a partner app or on Tapjoy.com',
            'b': 'Daily Upvote Value: The number of upvotes on the offerwall',
            'c': 'Dollar Unit Value: Virtual currency ratio to dollar. Used in stabilizing in-game economies',
            'd': 'Dollar Updated Vector: Trending in virtual currency economy. Primarily used to determine when to run in-game currency sales'
          },
        'answer': 'a'
      },
      {
        'term': 'MUV',
        'answers': {
            'a': 'Monthly Upvote Value: The number of upvotes in a partner app or on Tapjoy.com',
            'b': 'Monthly Unique Viewers: A unique count of devices (UDID) that were actually exposed to an ad in a partner app or on Tapjoy.com',
            'c': 'Money Unit Value: Virtual currency ratio to dollar. Used in stabilizing in-game economies',
            'd': 'Money Updated Vector: Trending in virtual currency economy. Primarily used to determine when to run in-game currency sales'
          },
        'answer': 'b'
      },
      {
        'term': 'DUC (ducks)',
        'answers': {
            'a': 'Deductible Unit Currency: Aggregate amount of charge back to advertisers due to fraud or missed conversions',
            'b': 'Daily Unique Converters: A unique count of devices (UDID) that completed an offer in a partner app or on Tapjoy.com.',
            'c': 'Duck Under Cover: That one scene in Howard the Duck, the movie',
            'd': 'Distributed Unit Count:'
          },
        'answer': 'b'
      },
      {
        'term': 'MUC',
        'answers': {
            'a': 'Monthly Unique Converters',
            'b': 'Monthy Unit Count: ',
            'c': 'Maximum Unit Count:',
            'd': 'Main Unit Characteristics:'
          },
        'answer': 'a'
      },
      {
        'term': 'OW',
        'answers': {
            'a': 'OW, The Humanity',
            'b': 'OW, The Pain',
            'c': 'OW, ... of Warcraft',
            'd': 'The Offerwall'
          },
        'answer': 'd'
      },
      {
        'term': 'Featured',
        'answers': {
            'a': 'Featured Ads',
            'b': 'Featured Creatures',
            'c': 'Featured Clients',
            'd': 'Featured Innovations'
          },
        'answer': 'a'
      },
      {
        'term': 'Display',
        'answers': {
            'a': 'Display Ads',
            'b': 'Display Menu',
            'c': 'Display Monitor',
            'd': 'Display TV'
          },
        'answer': 'a'
      },
      {
        'term': 'TJC',
        'answers': {
            'a': 'Tapjoy Conversion',
            'b': 'Total Jump Comscore',
            'c': 'Tapjoy.com',
            'd': 'Tabular Junction Compartment'
          },
        'answer': 'c'
      },
      {
        'term': 'MAU',
        'answers': {
            'a': 'Manual Automated Unit',
            'b': 'Maximum Allowed Usage',
            'c': 'Monthly Active Users',
            'd': 'Minimum Allowed Users'
          },
        'answer': 'c'
      },
      {
        'term': 'CPI (PPI)',
        'answers': {
            'a': 'Current Placement Indicator',
            'b': 'Cost per Install',
            'c': 'Currency per Intersisital',
            'd': 'Cost per Innnovation'
          },
        'answer': 'b'
      },
      {
        'term': 'CPE (PPE)',
        'answers': {
            'a': 'Currency Per Event',
            'b': 'Current Price Evaulation',
            'c': 'Copy Pasta Error',
            'd': 'Cost per Engagement'
          },
        'answer': 'd'
      },
      {
        'term': 'CPA',
        'answers': {
            'a': 'Cost per Action',
            'b': 'Current Project Availability',
            'c': 'Copy Pasta Arror',
            'd': 'Cross Platform Availability'
          },
        'answer': 'a'
      },
      {
        'term': 'CPV',
        'answers': {
            'a': 'Current Page Views',
            'b': 'Cost per View',
            'c': 'Copy Pasta Verror',
            'd': 'Current Prospect Vector'
          },
        'answer': 'b'
      },
      {
        'term': 'CPC',
        'answers': {
            'a': 'Cost per Click',
            'b': 'Current Prosepctive Clients',
            'c': 'Cost per Customer',
            'd': 'Copy Pasta Curry'
          },
        'answer': 'a'
      },
      {
        'term': 'Impression',
        'answers': {
            'a': 'Only one chance to make a bad first one',
            'b': 'A Monet painting',
            'c': 'Ad Impression',
            'd': 'Wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'OWO',
        'answers': {
            'a': 'Owl With Ostrich',
            'b': 'Only Working Outlet',
            'c': 'Optimal Workflow Offer',
            'd': 'Offerwall Open'
          },
        'answer': 'd'
      },
      {
        'term': 'OWO Rate',
        'answers': {
            'a': 'Offerwall Open Rate',
            'b': 'Owl With Ostrich per Blue Moon',
            'c': 'Optimal Workflow Offer Rate',
            'd': 'Oh? What? Oh! Rating'
          },
        'answer': 'a'
      },
      {
        'term': 'Rank',
        'answers': {
            'a': 'Offerwall Rank',
            'b': 'Ad Sort Order',
            'c': 'Ad Ranking',
            'd': 'App Sort order'
          },
        'answer': 'a'
      },
      {
        'term': 'Convs',
        'answers': {
            'a': 'Conversion',
            'b': 'Converse Tennis Shoes',
            'c': 'Conversation',
            'd': 'Cons Vs. Pros'
          },
        'answer': 'a'
      },
      {
        'term': 'CTR',
        'answers': {
            'a': 'Capture The Rookie',
            'b': 'Cost Through Revenue',
            'c': 'Constant Target Return',
            'd': 'Click Through Rate'
          },
        'answer': 'd'
      },
      {
        'term': 'CVR',
        'answers': {
            'a': 'Conversion Rate',
            'b': 'Constant Vector Revenue',
            'c': 'Current Video Release',
            'd': 'Conversation Rate'
          },
        'answer': 'a'
      },
      {
        'term': 'ACR',
        'answers': {
            'a': 'All Country Referrer',
            'b': 'Action Conversion Rate',
            'c': 'Applicable Cost Rating',
            'd': 'Accurate Capture Rate'
          },
        'answer': 'b'
      },
      {
        'term': 'Spend',
        'answers': {
            'a': 'wrong (intentional)',
            'b': 'wrong (not intentional)',
            'c': 'Ad Spend: The amount of money spent by advertisers on conversions',
            'd': 'wrong (who knows at this point)'
          },
        'answer': 'c'
      },
      {
        'term': 'Earnings',
        'answers': {
            'a': 'Customer Earnings',
            'b': 'Publisher Earnings',
            'c': 'Consumer Earnings',
            'd': 'Losses'
          },
        'answer': 'b'
      },
      {
        'term': 'GR',
        'answers': {
            'a': 'Great Brittian',
            'b': 'Grand Royal',
            'c': 'Gran Tourismo',
            'd': 'Gross Revenue'
          },
        'answer': 'd'
      },
      {
        'term': 'TJR',
        'answers': {
            'a': 'Total Junction Reporting',
            'b': 'Topical Journaled Revenue',
            'c': 'Temporary Jaundice Reaction',
            'd': 'Tapjoy Revenue'
          },
        'answer': 'd'
      },
      {
        'term': 'eCPM',
        'answers': {
            'a': 'Effective Cost per Thousand Impressions',
            'b': 'everybody loves raymond Copied Pirated Materials',
            'c': 'encompassment',
            'd': 'eCapital Premium Merchant'
          },
        'answer': 'a'
      },
      {
        'term': 'eCPM OW',
        'answers': {
            'a': 'Pick c',
            'b': 'One down',
            'c': 'Effective Cost per Thousand Offerwall Opens ',
            'd': 'One up'
          },
        'answer': 'c'
      },
      {
        'term': 'UDID',
        'answers': {
            'a': 'Device id',
            'b': 'Oh no UDID not',
            'c': 'Unique Diplomatic International Directory',
            'd': 'Unicode Data Indicator Device'
          },
        'answer': 'a'
      },
      {
        'term': 'ARPC',
        'answers': {
            'a': 'AARP RPC',
            'b': 'Amalgamated Resource Point of Contact',
            'c': 'Associated Report Placement eCapacity',
            'd': 'Avg Revenue Per Conversion'
          },
        'answer': 'd'
      },
      {
        'term': 'ARPU',
        'answers': {
            'a': 'Aggregated Rubies Per Unit',
            'b': 'Agnostic Reuse of Perplexity Unification Theory',
            'c': 'Avg Revenue Per User',
            'd': 'Automated Report Per UDIDs'
          },
        'answer': 'c'
      },
      {
        'term': 'ARPPU',
        'answers': {
            'a': 'Application Resource Per Premium User',
            'b': 'Avg Revenue Per Paying User',
            'c': 'Average Reaction Per Pasta Utopia',
            'd': 'Active Resource Placement per User'
          },
        'answer': 'b'
      },
      {
        'term': 'ARPDAU',
        'answers': {
            'a': 'Alphabet Soup',
            'b': 'All Resource Paying Deemed Accurate by UDID',
            'c': 'ARPPU With Direction',
            'd': 'Avg Revenue Per Daily Active User'
          },
        'answer': 'd'
      },
      {
        'term': 'Show Rate',
        'answers': {
            'a': 'Offer Show Rate',
            'b': 'Opposite of Hide Rate',
            'c': 'Short Hueristic Offerwall Rate',
            'd': 'not me'
          },
        'answer': 'a'
      }
    ];
});
