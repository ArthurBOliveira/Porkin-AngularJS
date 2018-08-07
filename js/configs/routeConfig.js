angular.module("porkin").config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/users.html"
    })
    .when("/users", {
      templateUrl: "views/users.html"
    })
    .when("/userdetails/:email", {
      templateUrl: "views/userDetails.html"
    })
    .when("/accounts/:email", {
      templateUrl: "views/accounts.html"
    });
});
