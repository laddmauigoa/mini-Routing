var app = angular.module('miniRouting')

app.controller('productsCtrl', function($scope, $routeParams, productService) {

	if ($routeParams.id === 'shoes') {
		$scope.productData = productService.shoeData;
		console.log($scope.productData)
	} 
		else if ($routeParams.id === 'socks') {
			$scope.productData = productService.sockData;
			console.log(productService.sockData)
	}

})