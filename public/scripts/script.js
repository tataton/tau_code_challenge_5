console.log('sourced');

var myApp = angular.module('myApp', []);

myApp.controller("HeroController", ["$scope", "$http", function($scope, $http){
  $scope.addHero = function(){
    // Method for adding a pet. Called by add pet button.
    var heroToAdd = {
      alias: $scope.aliasIn,
      first_name: $scope.firstNameIn,
      last_name: $scope.lastNameIn,
      city: $scope.cityIn,
      power_name: $scope.powerIn
    };
    console.log(heroToAdd);
    $http({
      method: 'POST',
      url: '/hero',
      data: heroToAdd
    });
    getHeroes();
  };

  function getHeroes(){
    /* Function for getting all heroes. Called when controller
    initializes, and then after any change. */
    console.log('In getHeroes.');
    $http({
      method: 'GET',
      url: '/hero'
    }).then(function(response) {
      $scope.heroArray = response.data;
      console.log($scope.heroArray);
    }); // end $http
  } // end getAssignments
  getHeroes();

}]);
