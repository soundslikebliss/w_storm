app.service('Product', ['$http', function($http) {

	var product = this;

	product.activeItem = [];

	product.isFull = function() {
		if (product.activeItem.length > 0)
			return true;
	};

	product.all_products = [
		{ 	item: 'milk',
			description: 'from a cow',
			price: 4,
			comments: ["I love it"]
		}
	];


	product.getSingleItem = function(x) {
		product.activeItem.length = 0;
		product.activeItem.push(x);
		console.log(product.activeItem[0].comments);
		console.log(product.activeItem[0]);
	};

}]);