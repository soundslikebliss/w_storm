app.directive('productList', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<h1>All Items</h1><p>(click on an item for details):</p><ul ng-repeat="i in all_products"><h3><li ng-click="getSingleItem(i)">{{i.item}}</li></h3></ul>',

		controller: ['$scope', 'Product', function($scope, product) {
			$scope.all_products = product.all_products;

			$scope.getSingleItem = product.getSingleItem;
		}]
	};
});