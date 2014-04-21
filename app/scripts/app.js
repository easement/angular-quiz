'use strict';

angular
  .module('duvsCryApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'LocalStorageModule'
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
            'a': 'Daily Active Users: The unique count of devices that launched a given app in a given day',
            'b': 'Direct Advertiser Utility: The way a specific advertiser utilizes the Tapjoy API',
            'c': 'Default Advertisement Unit: Offerwall',
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
            'd': 'Distributed Unit Count: Number of devices using our API'
          },
        'answer': 'b'
      },
      {
        'term': 'MUC',
        'answers': {
            'a': 'Monthly Unique Converters: Unique count of devices that completed an offer in a partner app or on Tapjoy.com',
            'b': 'Monthy Unit Count: Number of successful Ad click-throughs',
            'c': 'Maximum Unit Count: Number of devices using our API',
            'd': 'Main Unit Characteristics'
          },
        'answer': 'a'
      },
      {
        'term': 'OW',
        'answers': {
            'a': 'Obsolete wordage',
            'b': 'Offer withdraw',
            'c': 'Objective withholdings',
            'd': 'The Offerwall'
          },
        'answer': 'd'
      },
      {
        'term': 'Featured',
        'answers': {
            'a': 'Featured Ads: An interstitial full page ad',
            'b': 'Featured Creatures',
            'c': 'Featured Clients',
            'd': 'Featured Innovations'
          },
        'answer': 'a'
      },
      {
        'term': 'Display',
        'answers': {
            'a': 'Display Ads: a banner that is shown on the edge of the app real estate',
            'b': 'Display Menu: Menu displayed to users',
            'c': 'Display Monitor: Monitor used by customers to display statistic of user usage',
            'd': 'Display TV: A television with a display, as apposed to a television without a screen at all'
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
            'a': 'Current Placement Indicator: Indicator used to determine the placement of an ad in direct video play',
            'b': 'Cost per Install: An offer type where the required user action is the installation of a new app on their device',
            'c': 'Currency per Intersisital: Type of currency used in game',
            'd': 'Cost per Innovation: Projected cost of adding a new feature'
          },
        'answer': 'b'
      },
      {
        'term': 'CPE (PPE)',
        'answers': {
            'a': 'Currency per Event',
            'b': 'Current Price Evaulation',
            'c': 'Copy Pasta Error',
            'd': 'Cost per Engagement: An offer type where the required user action is the completion of a specific activity within an app installed on their device'
          },
        'answer': 'd'
      },
      {
        'term': 'CPA',
        'answers': {
            'a': 'Cost per Action: An offer type where the required user action is unrelated to app install or activity',
            'b': 'Current Project Availability',
            'c': 'Copy Pasta Arror',
            'd': 'Cross Platform Availability: Availability of product across different decices'
          },
        'answer': 'a'
      },
      {
        'term': 'CPV',
        'answers': {
            'a': 'Current Page Views: Real-time view of ad click-throughs within past hour',
            'b': 'Cost per View: An offer type where the required user action is watching a video on Tapjoy\'s video player',
            'c': 'Copy Pasta Verror',
            'd': 'Current Prospect Vector: Projected direction of current experimental ad'
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
            'c': 'Ad Impression: realized when an individual ad/offer is displayed',
            'd': 'Wrong'
          },
        'answer': 'c'
      },
      {
        'term': 'OWO',
        'answers': {
            'a': 'Owl With Ostrich',
            'b': 'Only Working Outlet: Customer with only a single device support of application',
            'c': 'Optimal Workflow Offer',
            'd': 'Offerwall Open: A user opens the offerwall'
          },
        'answer': 'd'
      },
      {
        'term': 'OWO Rate',
        'answers': {
            'a': 'Offerwall Open Rate: the ratio of the count of unique users that opened the offerwall divided by the count of unique users that opened the app',
            'b': 'Owl With Ostrich per Blue Moon',
            'c': 'Optimal Workflow Offer Rate',
            'd': 'Oh? What? Oh! Rating'
          },
        'answer': 'a'
      },
      {
        'term': 'Rank',
        'answers': {
            'a': 'Offerwall Rank: The (relative) position on an offerwall where an individual offer was displayed',
            'b': 'Ad Sort Order: Order of ads for each ad avenue',
            'c': 'Ad Ranking: Ad\'s rank determined by popularity',
            'd': 'App Sort Order: Current order of ads'
          },
        'answer': 'a'
      },
      {
        'term': 'Convs',
        'answers': {
            'a': 'Conversion: A user completes an offer\'s required action and \'converts\'',
            'b': 'Converse Tennis Shoes',
            'c': 'Conversation: Meeting involving value of particular customers',
            'd': 'Cons Vs. Pros'
          },
        'answer': 'a'
      },
      {
        'term': 'CTR',
        'answers': {
            'a': 'Capture The Rookie',
            'b': 'Cost Through Revenue: How much of a return are we recieving with respect to cost of Tapjoy',
            'c': 'Constant Target Return: The relatively constant revenue we are recieving for stable customers',
            'd': 'Click Through Rate: The ratio of Clicks to Impressions'
          },
        'answer': 'd'
      },
      {
        'term': 'CVR',
        'answers': {
            'a': 'Conversion Rate: The ratio of Conversions to Impressions',
            'b': 'Constant Vector Revenue: Successful prediction of revenue from projected value',
            'c': 'Current Video Release',
            'd': 'Conversation Rate: The schedule of of conversion meetings'
          },
        'answer': 'a'
      },
      {
        'term': 'ACR',
        'answers': {
            'a': 'All Country Referrer',
            'b': 'Action Conversion Rate: The ratio of Conversions to Clicks',
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
            'a': 'Customer Earnings: Ammount of revenue a customer is recieving due to our product',
            'b': 'Publisher Earnings: The amount of money paid out to publishers as the result of conversions completed by users in their apps',
            'c': 'Consumer Earnings: The ammount of money a user is making by using our product',
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
            'd': 'Gross Revenue: The total amount of money generated from advertising'
          },
        'answer': 'd'
      },
      {
        'term': 'TJR',
        'answers': {
            'a': 'Total Junction Reporting',
            'b': 'Topical Journaled Revenue: Recorded return for the study of historical data',
            'c': 'Temporary Jaundice Reaction: You don\'t want a definition',
            'd': 'Tapjoy Revenue: The amount of money kept by Tapjoy from conversions'
          },
        'answer': 'd'
      },
      {
        'term': 'eCPM',
        'answers': {
            'a': 'Effective Cost per Thousand Impressions: The gross revenue generated by 1,000 ad impressions',
            'b': 'everybody loves raymond Copied Pirated Materials',
            'c': 'enCompassment: Population using our product in a given region',
            'd': 'eCapital Premium Merchant'
          },
        'answer': 'a'
      },
      {
        'term': 'eCPM OW',
        'answers': {
            'a': 'Pick c',
            'b': 'One down',
            'c': 'Effective Cost per Thousand Offerwall Opens: The gross revenue generated by 1,000 offerwall opens',
            'd': 'One up'
          },
        'answer': 'c'
      },
      {
        'term': 'UDID',
        'answers': {
            'a': 'Device id: the vendor supplied hardware id for a given device on our network',
            'b': 'Oh no UDIDn\'t',
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
            'd': 'Avg Revenue Per Conversion: Gross Revenue divided by the number of conversions'
          },
        'answer': 'd'
      },
      {
        'term': 'ARPU',
        'answers': {
            'a': 'Aggregated Rubies Per Unit',
            'b': 'Agnostic Reuse of Perplexity Unification Theory',
            'c': 'Avg Revenue Per User: Gross Revenue divided by the number of users (or devices)',
            'd': 'Automated Report Per UDIDs'
          },
        'answer': 'c'
      },
      {
        'term': 'ARPPU',
        'answers': {
            'a': 'Application Resource Per Premium User',
            'b': 'Avg Revenue Per Paying User: Gross Revenue divided by the number of users (or devices) that have at least one conversion',
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
            'd': 'Avg Revenue Per Daily Active User: Gross Revenue divided by the count of DAU'
          },
        'answer': 'd'
      },
      {
        'term': 'Show Rate',
        'answers': {
            'a': 'Offer Show Rate: a value between 0 and 1 that can be interpreted as a percentage ',
            'b': 'Opposite of Hide Rate',
            'c': 'Short Hueristic Offerwall Rate',
            'd': 'not me'
          },
        'answer': 'a'
      }
    ];
});
