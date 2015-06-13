angular.module('todoApp', ['ui.router'])
.controller('todoController', function($scope){
  $scope.todos = JSON.parse(window.localStorage.getItem('todos')) || [];

  $scope.addTodo = function(){
    $scope.todos.push({text: $scope.newEntry, priority: 1});
    window.localStorage.setItem('todos', angular.toJson($scope.todos));
    $scope.newEntry = "";
  };

  $scope.removeTodo = function(todo){
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
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

});


