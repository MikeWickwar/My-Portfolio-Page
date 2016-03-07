app.controller('MyController', ['$scope', 'SkillsService', function ($scope, SkillsService) {
  console.log('made it to controler');
  $scope.test = "portfolio";
  SkillsService.getSkills().then(function (skills) {
    $scope.skills = skills.data
    console.log('sills', $scope.skills);
  })
  SkillsService.getEd().then(function (ed) {
    $scope.education = ed.data
    console.log('ed', $scope.education);
  })
  SkillsService.getExp().then(function (exp) {
    $scope.exp = exp.data
    console.log('exp', $scope.exp);
  })
  SkillsService.getProj().then(function (projects) {
    $scope.projects = projects.data
    console.log('proj', $scope.projects);
  })
}])

app.controller('DBController', ['$scope', function ($scope) {
  console.log('made it to DB controler');
  $scope.test = "portfolio";
}])
