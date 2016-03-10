var app = angular.module("myPortfolioApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        controller: 'MyController',
        templateUrl: './index.html'
      })
      .when('/dashboard', {
        controller: 'DBController',
        templateUrl: './partials/dash/index.html'
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })

});
