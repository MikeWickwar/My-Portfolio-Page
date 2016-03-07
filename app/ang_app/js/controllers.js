app.controller('MyController', ['$scope', function ($scope) {
  console.log('made it to controler');
  $scope.test = "portfolio";
}])

app.controller('DBController', ['$scope', function ($scope) {
  console.log('made it to DB controler');
  $scope.test = "portfolio";
}])
