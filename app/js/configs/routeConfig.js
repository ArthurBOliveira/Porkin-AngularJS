angular.module("porkin").config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/views/users.html"
    })
    .when("/users", {
      templateUrl: "app/views/users.html"
    })
    .when("/userdetails/:email", {
      templateUrl: "app/views/userDetails.html"
    })
    .when("/accounts/:email", {
      templateUrl: "app/views/accounts.html"
    });
});
