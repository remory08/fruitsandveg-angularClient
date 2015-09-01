var app = angular.module("fruitAndVeg", []);

app.controller("Fruits", ["$scope", "fruitService", function($scope, fruitService) {
  $scope.add = function(fruit) {
     console.log(fruit);
     fruitService.add(fruit);
     $scope.name = "";
     $scope.description = "";
   };
}])
