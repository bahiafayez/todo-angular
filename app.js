angular.module('todoApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'todo.html',
    controller: 'todoController'
  })
  .state('home.archive', {
    templateUrl: 'archive.html',
    controller: 'archiveController'
  });
})
.controller('todoController', function($scope, $state){
  $scope.todos = JSON.parse(window.localStorage.getItem('todos')) || [];
  $state.go('home.archive');
  $scope.addTodo = function(){
    $scope.todos.push({
      text: $scope.newEntry,
      priority: 1,
      completed: false
    });
    window.localStorage.setItem('todos', angular.toJson($scope.todos));
    $scope.newEntry = "";
  };

  $scope.removeTodo = function(todo){
    todo.completed = true;
    // $scope.todos.splice($scope.todos.indexOf(todo), 1);
    window.localStorage.setItem('todos', angular.toJson($scope.todos));
  }

  $scope.increasePriority = function(todo){
    todo.priority++;
    window.localStorage.setItem('todos', angular.toJson($scope.todos));
  }

  $scope.decreasePriority = function(todo){
    todo.priority--;
    window.localStorage.setItem('todos', angular.toJson($scope.todos));
  }
})
.controller('archiveController', function($scope) {
  console.log($scope.$parent.todos);
});
