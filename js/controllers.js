app.controller("MainController", function($scope, $rootScope){
	var that = this;
	$rootScope.$on('someEventA', function(event, arg){
		that.message = arg;

	})
	$scope.message ="Default via $scope.message"
	this.message = "Default via this.message"
})



app.controller("HomeController", function($scope){
	
})



app.controller("PartialController", function($scope){
	
})



app.controller("ControllersController", function($scope, $rootScope){

	this.product = {
		name: 'iPhone',
		price: 499.99
	}
	
	this.products = [
		{
			name: 'iPhone 6',
			price: 599.99
		},
		{
			name: 'iPhone 7',
			price: 699.99
		}
	]

	this.callMainController = function(){
		// $broadcast -- dispatches the event downwards to all child scopes,
		// $emit -- dispatches the event upwards through the scope hierarchy.
	
		$rootScope.$broadcast('someEventA', {data:123})
	}
	
	
})


