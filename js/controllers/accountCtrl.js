angular.module("porkin").controller("accountCtrl", function($scope, $routeParams, accountsAPI) {
    $scope.accounts = [];
    $scope.currEmail = '';

    $scope.ListAccounts = function() {
        $scope.accounts = [];
        $scope.currEmail = $routeParams.email;

        accountsAPI.getAccounts($scope.currEmail).then(function(response) {
            $scope.accounts = response.data;
            $scope.accountErrorMessage = "";
        }, function(error) {
            $scope.accountErrorMessage = error.data;
        });
    };
    
    $scope.AddAccount = function(account) {
        account.email = $scope.currEmail;

        accountsAPI.postAccount(account).then(function (data) {
            delete $scope.account;
            $scope.accountForm.$setPristine();
			$scope.ListAccounts();
		}, function(error) {
            alert(error.data.message);
        });
    }

    $scope.DeleteAccount = function(account) {
        accountsAPI.deleteAccount($scope.currEmail, account._id).then(function (data) {
            $scope.ListAccounts();
		}, function(error) {
            console.log(error);
        });
    }

    $scope.ListAccounts();
});