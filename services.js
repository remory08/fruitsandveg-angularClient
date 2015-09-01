app.factory('fruitService', ["$http", "$q", function($http, $q) {
  var fruitService  = {}
  var baseUrl = "https://immense-mountain-2441.herokuapp.com/api/fruits"
  fruitService.add = function(fruit) {
    $http.post(baseUrl, fruit).then(function(response) {
      console.log(response);
    })
  }

  // fruitService.get = function($http) {
  //   $http.get(baseUrl).then(function(response) {
  //     console.log(response);
  //   })
  // }


  return fruitService;
}])
