angular.module("porkin").factory("accountsAPI", function ($http, config) {
	var _getAccounts = function (email) {
		return $http.get(config.baseUrl + "/accounts/" + email);
	};

	var _postAccount = function (account) {
		return $http.post(config.baseUrl + "/accounts", account);
	};

	var _putAccount = function (account) {
		return $http.put(config.baseUrl + "/accounts", account);
	};

	var _deleteAccount = function (email, id) {
		return $http.delete(config.baseUrl + "/accounts/" + email + "/" + id);
	};

	return {
		getAccounts: _getAccounts,
		postAccount: _postAccount,
		putAccount: _putAccount,
		deleteAccount: _deleteAccount
	};
});