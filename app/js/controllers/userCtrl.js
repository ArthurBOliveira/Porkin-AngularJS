angular.module("porkin").controller("userCtrl", function($scope, $location, usersAPI) {
    $scope.users = [];

    var LoadUsers = function () {
		usersAPI.getUsers().then(function(response) {
            $scope.users = response.data.users;
            $scope.usersErrorMessage = "";
        }, function(error) {
            $scope.usersErrorMessage = error.data;
        });
    };

    $scope.AddUser = function(user) {
        usersAPI.postUser(user).then(function (data) {
            delete $scope.user;
            $scope.userForm.$setPristine();
			LoadUsers();
		}, function(error) {
            alert(error.data.message);
        });
    }

    $scope.DeleteUser = function(user) {
        usersAPI.deleteUser(user._id).then(function (data) {
            LoadUsers();
		}, function(error) {
            console.log(error);
        });
    }

    $scope.UserDetails = function(user) {
        $location.path( "/userdetails/" + user.email );
    }

    $scope.UserAccounts = function(user) {
        $location.path( "/accounts/" + user.email );
    }

    LoadUsers();
});