
(function(){
	app.controller('KitchenController', function ($scope, $firebaseArray) {
		var recipe_db = new Firebase("https://cocinarte.firebaseio.com/");
		$scope.recipes = $firebaseArray(recipe_db);
  		$scope.saveData = function () {
			$scope.recipes.$add({
				title: $scope.titleRecipe,
				description: $scope.descriptionRecipe,
				youtube: $scope.youtubeRecipe,
				
				image: $scope.imageRecipe,

			});
		};
	});
}).call(this);