angular.module("porkin").config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/users.html"
    })
    .when("/users", {
      templateUrl: "views/users.html"
    })
    .when("/accounts", {
      templateUrl: "views/accounts.html"
    })
    .when("/transactions", {
      templateUrl: "views/transactions.html"
    });
});
