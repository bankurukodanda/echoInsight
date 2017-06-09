var app = angular.module('myApp', []);

app
		.controller(
				'MyController',
				['$scope', '$http', '$window', function($scope, $http, $window) {

					$scope.cartItems = [];
					items = [ {
						"PId" : "1",
						"Image" : "china.jpg",
						"Brand" : "ASDF",
						"Product" : "S1100",
						"ProductDetail" : "Touch",
						"Price" : "250"
					}, {
						"PId" : "2",
						"Image" : "iphone.jpg",
						"Brand" : "Apple",
						"Product" : "Iphone 4's",
						"ProductDetail" : " I -series",
						"Price" : "500"
					}, {
						"PId" : "3",
						"Image" : "lg.jpg",
						"Brand" : "LG",
						"Product" : "lg-1245",
						"ProductDetail" : " Touch Dual SIm",
						"Price" : "360"
					}, {
						"PId" : "4",
						"Image" : "lgbasic.jpg",
						"Brand" : "LG",
						"Product" : "Lg-Basic ",
						"ProductDetail" : "Phone with single sim",
						"Price" : "120"
					}, {
						"PId" : "5",
						"Image" : "micromax.jpg",
						"Brand" : "MicroMax",
						"Product" : "Micro-233",
						"ProductDetail" : " Touch Smart phone",
						"Price" : "240"
					}, {
						"PId" : "6",
						"Image" : "nokia.jpg",
						"Brand" : "Nokia",
						"Product" : "Lumia",
						"ProductDetail" : " Small phone",
						"Price" : "772"
					}, {
						"PId" : "7",
						"Image" : "nokiabasic.jpg",
						"Brand" : "Nokia",
						"Product" : "N234234",
						"ProductDetail" : " Sample",
						"Price" : "456"
					}, {
						"PId" : "8",
						"Image" : "samsung123.jpg",
						"Brand" : "Samsung",
						"Product" : "s145",
						"ProductDetail" : "Basic Features",
						"Price" : "878"
					}, {
						"PId" : "9",
						"Image" : "samsungbasic.jpg",
						"Brand" : "Samsung",
						"Product" : "Producr",
						"ProductDetail" : " Smart phone",
						"Price" : "752"
					} ];
					// Display the Products

					if (localStorage.getItem('Store') === null) {
						// alert("No elements");

					} else {
						$scope.cartItems = JSON.parse(localStorage
								.getItem('Store'));
					}

					var lists = [];
					var length = items.length;
					for (i = 0; i < length; i += 3) {
						lists.push(items.slice(i, i + 3));
					}
					$scope.products = lists;

					// Cart Operation

					$scope.addToCart = function(PId, PName, PCost) {
						item = {
							"PId" : PId,
							"Product" : PName,
							"Quantity" : 1,
							"Price" : PCost
						};
						$scope.cartItems.push(item);
						localStorage.removeItem("Store");
						localStorage.setItem('Store', JSON
								.stringify($scope.cartItems));
//						 localStorage.removeItem("Store");
					};

					// Finding element
					$scope.hasTag = function(PId) {
						var i = null;
						var elements = $scope.cartItems.length
						for (i = 0; elements > i; i += 1) {
							if ($scope.cartItems[i].PId === PId) {
								return true;
							}
						}
						return false;
					};

					// increase the Quantity of Product
					$scope.addQuantity = function(PId) {

						var i = null;
						var elements = $scope.cartItems.length
						for (i = 0; elements > i; i += 1) {
							if ($scope.cartItems[i].PId === PId) {
								$scope.cartItems[i].Quantity += 1;

								localStorage.removeItem("Store");
								localStorage.setItem('Store', JSON
										.stringify($scope.cartItems));
								return true;
							}
						}
						return false;
					};

					// Reduce the Quantity of Product
					$scope.reduceQuantity = function(PId) {

						var i = null;
						var elements = $scope.cartItems.length
						for (i = 0; elements > i; i += 1) {
							if ($scope.cartItems[i].PId === PId) {
								if ($scope.cartItems[i].Quantity == 1) {
									$scope.cartItems.splice(i, 1);
								} else {
									$scope.cartItems[i].Quantity -= 1;

								}

								localStorage.removeItem("Store");
								localStorage.setItem('Store', JSON
										.stringify($scope.cartItems));
								return true;
							}
						}
						return false;
					};

					// Remove Items from Cart
					$scope.remove = function(PId) {
						var elements = $scope.cartItems.length
						for (var i = elements; i--;) {
							if ($scope.cartItems[i].PId === PId) {
								$scope.cartItems.splice(i, 1);

								localStorage.removeItem("Store");
								localStorage.setItem('Store', JSON
										.stringify($scope.cartItems));
							}
						}
					};

					$scope.buy = function(){
						localStorage.removeItem("Store");
						$window.location.reload();
						alert("We will deliver your products soon");
					}

					// Total Cost for Product in the cart
					$scope.totalCost = function() {
						var total = 0
						var elements = $scope.cartItems.length
						for (var i = elements; i--;) {
							total = total + $scope.cartItems[i].Quantity
									* $scope.cartItems[i].Price;
						}
						return total;
					};

					// Total number of items in the cart
					$scope.numberOfProducts = function(PId) {
						var total = 0
						var elements = $scope.cartItems.length
						for (var i = elements; i--;) {
							if ($scope.cartItems[i].PId === PId) {
								return $scope.cartItems[i].Quantity + "in Cart";
							}
						}
					};

				}]);