var app = angular.module("myPortfolioApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        controller: 'MyController',
        templateUrl: './partials/dash/splash.html'
      })
      .when('/dashboard', {
        controller: 'DBController',
        templateUrl: './partials/dash/dash.html'
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
      // $locationProvider.html5Mode(true)
});
