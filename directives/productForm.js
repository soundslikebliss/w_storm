app.directive('productForm', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<form>Item:<input type="text" style="margin-top: 8rem; name="item" ng-model="productForm.item">Desc.:<input type="text" name="description" ng-model="productForm.description">Price:<input type="text" name="price" ng-model="productForm.price"><input type="hidden" name="comment" ng-model="productForm.comments"></form><button style="color:black; margin: 1rem 4rem;" ng-click="submit()">Add New Product</button>',

		controller: ['$scope', 'Product', function($scope, product) {
			
			$scope.productForm = {};

			$scope.submit = function() {
				var dataObject = {
					item: $scope.productForm.item,
					description: $scope.productForm.description,
					price: $scope.productForm.price,
					comments: []
				};
				product.all_products.push(dataObject);
			}
		}]
	};
});