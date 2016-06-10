var cadastro_module = angular.module('app.cadastro', []);

cadastro_module.controller('cadastroController', function ($scope, Service){

	$scope.cadastrar = function () {
		var user = {
			'name': $scope.user_name,
			'bio': $scope.user_bio,
			'birthday': $scope.user_birthday,
			'photo': $scope.user_photo,
			'email': $scope.user_email,
			'password': $scope.user_password
		};

		Service.cadastrar(user);
	},

	$scope.cancelar = function () {
		window.location = "/";
	}

});