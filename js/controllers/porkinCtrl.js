angular.module("porkin").controller("porkinCtrl", function($scope, $location, usersAPI, accountsAPI, transactionsAPI) {
    $scope.users = [];
    $scope.accounts = [];
    $scope.transactions = [];
    $scope.userForm = {};
    $scope.currEmail = '';
    $scope.currAccountId = '';

    //#region Gets
    var LoadUsers = function () {
        $scope.currEmail = null;

		usersAPI.getUsers().then(function(response) {
            $scope.users = response.data.users;
            $scope.usersErrorMessage = "";
        }, function(error) {
            $scope.usersErrorMessage = error.data;
        });
    };
    
    $scope.ListAccounts = function(user) {
        $scope.accounts = [];
        $scope.currAccountId = null;
        $scope.currEmail = user.email;

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
        $scope.currAccountId = account._id;

        $location.path( "/transactions" );
        transactionsAPI.getTransactions($scope.currEmail, account._id).then(function(response) {
            $scope.transactions = response.data;
            $scope.transactionsErrorMessage = "";
        }, function(error) {
            $scope.transactionsErrorMessage = error.data;
        });
    };
    //#endregion

    //#region Posts
    $scope.AddUser = function(user) {
        usersAPI.postUser(user).then(function (data) {
			$scope.users.push(user);
		}, function(error) {
            alert(error.data.message);
        });
    }

    $scope.AddAccount = function(account) {
        account.email = $scope.currEmail;

        accountsAPI.postAccount(account).then(function (data) {
			$scope.accounts.push(account);
		}, function(error) {
            alert(error.data.message);
        });
    }

    $scope.AddTransaction = function(transaction) {
        transaction.email = $scope.currEmail;
        transaction.accountId = $scope.currAccountId;

        transactionsAPI.postTransaction(transaction).then(function (data) {
			$scope.transactions.push(account);
		}, function(error) {
            alert(error.data.message);
        });
    }
    //#endregion

    //#region Delete
    $scope.DeleteUser = function(user) {
        usersAPI.deleteUser(user._id).then(function (data) {
			$scope.users = $scope.users.filter(us => us._id !== user._id );;
		}, function(error) {
            console.log(error);
        });
    }

    $scope.DeleteAccount = function(account) {
        accountsAPI.deleteAccount($scope.currEmail, account._id).then(function (data) {
			$scope.accounts = $scope.accounts.filter(ac => ac._id !== account._id );;
		}, function(error) {
            console.log(error);
        });
    }

    $scope.DeleteTransaction = function(transaction) {
        transactionsAPI.deleteTransaction($scope.currEmail,  $scope.currAccountId, transaction._id).then(function (data) {
			$scope.transactions = $scope.transactions.filter(tr => tr._id !== transaction._id );;
		}, function(error) {
            console.log(error);
        });
    }
    //#endregion

    LoadUsers();
});
