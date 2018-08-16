angular.module("porkin").factory("usersAPI", function ($http, config) {
	var _getUsers = function () {
		return $http.get(config.baseUrl + "/users");
	};

	var _getUser = function (email) {
		return $http.get(config.baseUrl + "/users/" + email);
	};

	var _postUser = function (user) {
		return $http.post(config.baseUrl + "/users", user);
	};

	var _putUser = function (user) {
		return $http.put(config.baseUrl + "/users", user);
	};

	var _deleteUser = function (id) {
		return $http.delete(config.baseUrl + "/users/" + id);
	};

	return {
		getUsers: _getUsers,	
		getUser: _getUser,
		postUser: _postUser,
		putUser: _putUser,
		deleteUser: _deleteUser
	};
});