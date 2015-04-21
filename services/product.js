app.service('Product', ['$http', function($http) {

	var product = this;

	product.activeItem = [];
	product.cart = [];
	product.total_cost = 0;

	product.isFull = function() {
		if (product.activeItem.length > 0)
			return true;
	};

	product.all_products = [
		{ 	item: 'iron man',
			description: 'vol 1, issue 1',
			price: 3,
			comments: ["Tony Stark 4 President"]
		},
		{	item: 'batman',
			description: 'vol 20, issue 100',
			price: 3,
			comments: ["the dark knight!"]
		},
		{	item: 'spider man',
			description: 'vol 5, issue 22',
			price: 2.50,
			comments: ["with great power..."]
		}
	];


	product.getSingleItem = function(x) {
		product.activeItem.length = 0;
		product.activeItem.push(x);
		console.log(product.activeItem[0].comments);
		console.log(product.activeItem[0]);
	};

	product.onDrop = function(x) {
		product.cart.push(x);
		console.log(product.cart);
	};

	product.add_cost = function() {
		for (i = 0; i < product.all_products.length; i++) {
			product.total_cost = product.total_cost + product.all_products[i].price;
		};
		console.log(product.total_cost);
	};

}]);