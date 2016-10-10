angular.module("FinalApp",["lumx","ngRoute", "ngResource", "futFilters"])
.config(function($locationProvider, $routeProvider, $httpProvider){

	$locationProvider.html5Mode(true);	

	$routeProvider
		.when("/", {
			controller: "MainController",
			templateUrl: "templates/home.html"
		})
		.when("/liga/:id", {
			controller: "ligaController",
			templateUrl: "templates/ligas.html"
		})
		.when("/equipo/:id", {
			controller: "equipoController",
			templateUrl: "templates/equipo.html"
		});

		$httpProvider.interceptors.push('httpInterceptor');
})