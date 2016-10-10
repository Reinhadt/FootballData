angular.module("FinalApp")
//Interceptor para fijar los headers para TODAS las peticiones http
.factory('httpInterceptor', function(){
	return {
		request: function(config){
			config.headers['X-Auth-Token'] = '2c9a9879f8714d57b0ea2df6f199ee90';
			config.headers['X-Response-Control'] = 'minified';

			return config;
		}
	}
})
.factory("FutResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/soccerseasons', {});
	//return  $resource('http://jsonplaceholder.typicode.com/posts');

})

.factory("LigaResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/soccerseasons/:id/leagueTable', {id: "@id"}, {
      query: {method:'GET', isArray:false}});

})

.factory("SingleEquipoResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/teams/:id', {id: "@id"}, {
      query: {method:'GET', isArray:false}});

})

.factory("EquipoFixtures", function($resource){

	 return  $resource('http://api.football-data.org/v1/teams/:id/fixtures', {id: "@id"}, {
      query: {method:'GET', isArray:false}});

})

.factory("LigaFixtures", function($resource){

	 return  $resource('http://api.football-data.org/v1/competitions/:id/fixtures?matchday=:md', {id: "@id", md:"@md"}, {
      query: {method:'GET', isArray:false}});

})

.factory("PlayersResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/teams/:id/players', {id: "@id"}, {
      query: {method:'GET', isArray:false}});

})