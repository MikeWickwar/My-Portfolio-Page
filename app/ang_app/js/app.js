var app = angular.module("myPortfolioApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        controller: 'MyController',
        templateUrl: './index.html'
      })
      .when('/dashboard', {
        templateUrl: './partials/dash.html',
        controller: 'DBController'
      })
    // $locationProvider.html5Mode(true);

});
