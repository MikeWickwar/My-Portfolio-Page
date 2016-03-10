app.controller('MyController', ['$scope', 'SkillsService', function ($scope, SkillsService) {
  console.log('made it to controler');
  $scope.test = "portfolio";
  SkillsService.getSkills().then(function (skills) {
    $scope.skills = skills.data
  })
  SkillsService.getEd().then(function (ed) {
    $scope.education = ed.data
  })
  SkillsService.getExp().then(function (exp) {
    $scope.exp = exp.data
  })
  SkillsService.getProj().then(function (projects) {
    $scope.projects = projects.data
  })
}])

app.controller('DBController', ['$scope', '$route', function ($scope, $route) {
  console.log('made it to DB controler');
  $scope.test = "portfolio";
}])
