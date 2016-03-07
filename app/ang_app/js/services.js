app.service("SkillsService", function($http){
  var SkillsService = {};

  SkillsService.getSkills = function(){
    return $http.get("https://mike-backend-api.herokuapp.com/skills", {method: "jsponp"});
  },
  SkillsService.getExp = function(){
    return $http.get("https://mike-backend-api.herokuapp.com/exp", {method: "jsponp"});
  },
  SkillsService.getEd = function(){
    return $http.get("https://mike-backend-api.herokuapp.com/ed", {method: "jsponp"});
  },
  SkillsService.getProj = function(){
    return $http.get("https://mike-backend-api.herokuapp.com/projects", {method: "jsponp"});
  }

  return SkillsService
})
