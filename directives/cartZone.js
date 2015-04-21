app.directive('cartZone', function(){
	return {
		restrict: 'E',
		scope: {},
		template: '<h3>Cart</h3><div class="panel panel-default"><div class="panel-body" style="padding: 30px;" ad-drop="true" ad-drop-end="onDrop($data, $dragElement, $dropElement, $event); add_cost();">drop here!!</div></div><button type="button" class="btn btn-success" style="margin: 2px;" ng-repeat="i in cart track by $index" ng-click="getSingleItem(i);">{{i.item}}</button><hr><h4>Total $</h4>',

		controller: ['$scope', 'Product', function($scope, product) {
			$scope.cart = product.cart;
			$scope.onDrop = product.onDrop;
			$scope.getSingleItem = product.getSingleItem;
			$scope.add_cost = product.add_cost;
		}]
	};
});