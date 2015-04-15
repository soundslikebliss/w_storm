app.directive('productList', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<h3>Wishlist</h3><p>(add an item to your cart by dragging it over):</p><ul ng-repeat="i in all_products"><h3><li ad-drag="true" ad-drag-begin="getSingleItem(i)">{{i.item}}</li></h3></ul>',

		controller: ['$scope', 'Product', function($scope, product) {
			$scope.all_products = product.all_products;

			$scope.getSingleItem = product.getSingleItem;
		}]
	};
});