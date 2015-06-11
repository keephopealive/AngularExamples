app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', { templateUrl: 'partials/home.html', controller: 'HomeController' })
	.when('/controllers', { templateUrl: 'partials/controllers.html', controller: 'ControllersController' })
	.otherwise({redirectTo: '/home'})			
}])