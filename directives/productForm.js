app.directive('productForm', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<h3 >Add new item</h3><form><div class="form-group"><label>Item:</label><input type="text" class="form-control" ng-model="productForm.item"></div><div class="form-group"><label>Desc.:</label><input type="text" class="form-control" ng-model="productForm.description"></div><div class="form-group"><label>Price</label><input type="number" class="form-control" ng-model="productForm.price"><input type="hidden" name="comment" ng-model="productForm.comments"></form><button style="color:black; margin: 1rem 4rem;" ng-click="submit()">Add New Product</button>',

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