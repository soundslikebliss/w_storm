app.directive('cartZone', function(){
	return {
		restrict: 'E',
		scope: {},
		template: '<h3>Cart</h3><div class="panel panel-default"><div class="panel-body" style="padding: 30px;" ad-drop="true" ad-drop-end="onDrop($data, $dragElement, $dropElement, $event);"><strong><p>drop here!!</p></strong></div></div><button type="button" class="btn btn-warning" style="margin: 2px;" ng-repeat="i in cart track by $index" ng-click="getSingleItem(i);">{{i.item}}</button><hr><h4><h3>Total: $<strong>{{total_cost}}</strong></h3></h4>updated: {{updated}}',

		controller: ['$scope', 'Product', function($scope, product) {
			$scope.cart = product.cart;
			$scope.onDrop = product.onDrop;
			$scope.getSingleItem = product.getSingleItem;
			$scope.updated = product.updated;
			$scope.total_cost = product.total_cost;

			$scope.$watchCollection('cart', function(newVal, oldVal) {

				$scope.total_cost = 0;

				$scope.updated++;

				console.log(newVal, 'updated on drop');

				newVal.forEach(function(i) {
					console.log(i.price);
					$scope.total_cost = $scope.total_cost + i.price;
				});
				console.log($scope.total_cost);
			});
		}]
	};
});