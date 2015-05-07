app.directive('productList', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<h3 style="text-align: center;">Wishlist</h3><p style="text-align: center;">(add an item to your cart by dragging it over):</p><div ng-repeat="i in all_products" style="text-align: center;"><button class="btn btn-info" style="width: 40%; margin: 2px;" ad-drag="true" ad-drag-data="i" ad-drag-begin="getSingleItem(i);">{{i.item}}</button></div>',

		controller: ['$scope', 'Product', function($scope, product) {
			$scope.all_products = product.all_products;

			$scope.getSingleItem = product.getSingleItem;
		}]
	};
});