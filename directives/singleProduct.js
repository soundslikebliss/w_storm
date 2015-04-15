app.directive('singleProduct', function() {
	return {
		restrict: 'E',
		scope: {},
		template: 

			'<p ng-repeat="i in activeItem">Item: {{i.item}}<br>Description: {{i.description}}<br>Price: ${{i.price}}</p><div ng-repeat="i in activeItem">Notes: <p ng-repeat="i in i.comments track by $index">{{i}}</p></div><br><form ng-show="isFull()"><input type="text" name="comment" ng-model="productComment"></form><button ng-show="isFull()" style="color:black; margin: 1rem;" ng-click="addComment()">Add a note</button>',

		controller: ['$scope', 'Product', function($scope, product) {

			$scope.activeItem = product.activeItem;

			$scope.isFull = product.isFull;

			$scope.addComment = function() {
				var comment = $scope.productComment;
				console.log(comment);
				$scope.activeItem[0].comments.push(comment);

			}
		}]
	};
});