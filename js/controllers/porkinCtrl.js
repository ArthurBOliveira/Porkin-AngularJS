angular.module("porkin").controller("porkinCtrl", function($scope, $location, usersAPI, accountsAPI, transactionsAPI) {
    $scope.users = [];
    $scope.accounts = [];
    $scope.transactions = [];    

    var LoadUsers = function () {
        $scope.email = null;

		usersAPI.getUsers().then(function(response) {
            $scope.users = response.data.users;
            $scope.usersErrorMessage = "";
        }, function(error) {
            $scope.usersErrorMessage = error.data;
        });
    };
    
    $scope.ListAccounts = function(user) {
        $scope.accounts = [];
        $scope.email = user.email;

        $location.path( "/accounts" );
        accountsAPI.getAccounts(user.email).then(function(response) {
            $scope.accounts = response.data;
            $scope.accountErrorMessage = "";
        }, function(error) {
            $scope.accountErrorMessage = error.data;
        });
    };

    $scope.ListTransactions = function(account) {
        $scope.transactions = [];
        console.log(account);

        $location.path( "/transactions" );
        transactionsAPI.getTransactions($scope.email, account._id).then(function(response) {
            $scope.transactions = response.data;
            $scope.transactionErrorMessage = "";
        }, function(error) {
            $scope.transactionErrorMessage = error.data;
        });
    };

    $scope.AddUser = function(user) {
        console.log(user);

        usersAPI.postUser(user).then(function (data) {
			delete $scope.users;
			$scope.userForm.$setPristine();
			LoadUsers();
		}, function(error) {
            // $scope.usersErrorMessage = error.data.errors;
            alert(error.data.message);
        });
    }

    LoadUsers();
});
