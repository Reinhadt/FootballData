angular.module("FinalApp")
.controller("MainController", function($scope, $http, FutResource){


	// Team = $resource('http://api.football-data.org//alpha/soccerseasons/1/teams', {}, {
	// 	get:{
	// 		method: 'GET',
	// 		headers: {'X-Auth-Token': '2c9a9879f8714d57b0ea2df6f199ee90'}
	// 	}
	// })	
	$http.defaults.headers.common['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
	$http.defaults.headers.common['X-Response-Control'] = 'minified'
	$scope.titulo = "Ligas Europeas"
	$scope.ligas = FutResource.query();
	console.log($scope.ligas);

	 $scope.$watch('ligas.length', function(length) {
      if(length) { // <= first time length is changed from undefined to 0
        console.log('(watch) read more ' + $scope.ligas.length); // <= will log correct length

        var element = {};
        var arr = [];
        $scope.id = [];
        for(var i = 0; i < $scope.ligas.length; i++){
   			$scope.id.ident = i
        	console.log(element);
        }

        console.log($scope.id);

      }
    });


})

.controller("ligaController", function($scope, $http, LigaResource, LigaFixtures, $routeParams){
	$http.defaults.headers.common['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
	$http.defaults.headers.common['X-Response-Control'] = 'minified'

	//DIVIDIR getMatches EN UNA FUNCIÓN QUE SE PUEDA EJECUTAR A LA HORA DE CAMBIAR DE JORNADA DESDE LA TABLA DE PARTIDOS
	$scope.getMatches = LigaResource.query({id: $routeParams.id}).$promise.then(function(partido){
		$scope.matches = LigaFixtures.query({id:$routeParams.id, md:partido.matchday});
		console.log($scope.matches);
	});

	$scope.estas =  LigaResource.query({id: $routeParams.id});
	//console.log($scope.estas);
	
})

.controller("equipoController", function($scope, $http, SingleEquipoResource, EquipoFixtures, PlayersResource, $routeParams){
	$http.defaults.headers.common['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
	$http.defaults.headers.common['X-Response-Control'] = 'minified'
	$scope.titulos = "Equipo"
	$scope.equipos = SingleEquipoResource.query({id: $routeParams.id});
	//console.log($scope.equipos);

	$scope.fixtures = EquipoFixtures.query({id: $routeParams.id});
	//console.log($scope.fixtures);

	$scope.jugadores = PlayersResource.query({id: $routeParams.id});
	console.log($scope.jugadores);

})
.controller("specialTeam", function($scope, $http, SingleEquipoResource){
	$http.defaults.headers.common['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
	$http.defaults.headers.common['X-Response-Control'] = 'minified'
	$scope.getLogo = function(number){
		
		$scope.extra = SingleEquipoResource.query({ id: number });
		//console.log($scope.extra);
		return $scope.extra;
	}
})
.controller("TeamsController", function($scope, $http, $routeParams){

	//EXTREMADAMENTE IMPORTANTE :

	$http.defaults.headers.common['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
	$http.defaults.headers.common['X-Response-Control'] = 'minified'
	FutResource.get(function(data){
		$scope.ligas = data;
	});
	console.log($scope.teams);
})