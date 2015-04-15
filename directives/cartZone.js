app.directive('cartZone', function(){
	return {
		restrict: 'E',
		scope: {},
		template: '<h3>Cart</h3><div class="panel panel-default"><div class="panel-body">drop here!!</div></div><hr><h4>Total $</h4>',

		controller: ['$scope', 'Product', function($scope, product) {

		}]
	};
});