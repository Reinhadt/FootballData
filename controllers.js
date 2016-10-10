angular.module("FinalApp")
.controller("MainController", function($scope, $http, FutResource){
	
	
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
	

	//DIVIDIR getMatches EN UNA FUNCIÓN QUE SE PUEDA EJECUTAR A LA HORA DE CAMBIAR DE JORNADA DESDE LA TABLA DE PARTIDOS
	$scope.getMatches = LigaResource.query({id: $routeParams.id}).$promise.then(function(partido){
		$scope.matches = LigaFixtures.query({id:$routeParams.id, md:partido.matchday});
		console.log($scope.matches);
	});

	$scope.estas =  LigaResource.query({id: $routeParams.id});
	//console.log($scope.estas);
	
})

.controller("equipoController", function($scope, $http, SingleEquipoResource, EquipoFixtures, PlayersResource, $routeParams){
	
	$scope.titulos = "Equipo"
	$scope.equipos = SingleEquipoResource.query({id: $routeParams.id});
	//console.log($scope.equipos);

	$scope.fixtures = EquipoFixtures.query({id: $routeParams.id});
	//console.log($scope.fixtures);

	$scope.jugadores = PlayersResource.query({id: $routeParams.id});
	console.log($scope.jugadores);

})
.controller("specialTeam", function($scope, $http, SingleEquipoResource){
	
	$scope.getLogo = function(number){
		
		$scope.extra = SingleEquipoResource.query({ id: number });
		//console.log($scope.extra);
		return $scope.extra;
	}
})
.controller("TeamsController", function($scope, $http, $routeParams){

	//EXTREMADAMENTE IMPORTANTE :

	
	FutResource.get(function(data){
		$scope.ligas = data;
	});
	console.log($scope.teams);
})