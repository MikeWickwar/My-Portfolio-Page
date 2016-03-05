var app = angular.module("myPortfolioApp", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'MyController'
      })
    $locationProvider.html5Mode(true);
});
