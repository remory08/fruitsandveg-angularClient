app.controller("Fruits", ["$scope","$http", "fruitService", function($scope, $http, fruitService) {
  $scope.add = function(fruit) {
     console.log(fruit);
     fruitService.add(fruit);
     $scope.name = "";
     $scope.description = "";
   };
   $scope.fruits = [];
   $http.get("//immense-mountain-2441.herokuapp.com/api/fruits").then(function(data){
     $scope.fruits = data.data;
   })
  $scope.delete = function(fruit) {
    for(var i = 0; i < $scope.fruits.length; i++) {
      if($scope.fruits[i]._id == fruit._id) {
      $scope.fruits.splice(i, 1);
      break;
      }
    }
    $http.delete("//immense-mountain-2441.herokuapp.com/api/fruits/" + fruit._id).then(function(res) {
    })
  };
  $scope.edit = function(fruit) {
    $http.put("//immense-mountain-2441.herokuapp.com/api/fruits/" + fruit._id).then(function(promise) {
        console.log(promise);
    })
  }


}])
