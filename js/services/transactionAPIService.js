angular.module("porkin").factory("transactionsAPI", function ($http, config) {
	var _getTransaction = function (email, accountId) {
		return $http.get(config.baseUrl + "/transactions/" + email + "/" + accountId);
	};

	var _postTransaction = function (transaction) {
		return $http.post(config.baseUrl + "/transactions", transaction);
	};

	var _putTransaction = function (transaction) {
		return $http.put(config.baseUrl + "/transactions", transaction);
	};

	var _deleteTransaction = function (email, accountId,  id) {
		return $http.delete(config.baseUrl + "/transactions/" + email + "/" + accountId + "/", id);
	};

	return {
		getTransaction: _getTransaction,
		postTransaction: _postTransaction,
		putTransaction: _putTransaction,
		deleteTransaction: _deleteTransaction
	};
});