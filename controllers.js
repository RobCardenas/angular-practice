// angular.modules('starter', [])
//   .controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
//     $scope.term = "cellar door"
//     $scope.showAlert = function() {
//     	alert($scope.term);
//     }
//   }])
//   .controller("TodoCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
//   	$scope.todos = [
//   		{title: 'Do stuff'}, 
//   		{title:'Learn stuff'}
//   		];
//   	$scope.addTodo = function() {
//   		$scope.todos.push({title:$scope.todo.title});
//   		$scope.todo.title = '';
//   	};
// 		  $scope.delete = function(todo) {
// 		  	var index = $scope.todos.indexOf(todo);
// 		  	$scope.todos.splice(index,1);
// 		};
//   	$scope.created_at = new Date();
//   }])