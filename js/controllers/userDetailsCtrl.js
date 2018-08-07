angular.module("porkin").controller("userDetailsCtrl", function($scope, $routeParams, usersAPI) {
    $scope.user = {};

    $scope.UserDetails = function() {
        $scope.currEmail = $routeParams.email;

        usersAPI.getUser($scope.currEmail).then(function(response) {
            $scope.user = response.data.user;
        }, function(error) {
            console.log(error.data);
        });
    };

    $scope.UserDetails();
});