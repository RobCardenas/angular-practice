angular.module('starter', ['ngRoute', 'starter.controllers'])
.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
        when('/', {
          templateUrl: 'templates/todos.html',
          controller: 'TodoCtrl'
       }).
        when('/about', {
          templateUrl: 'templates/about-us.html'
       }).
        when('/lists', {
          templateUrl: 'templates/list-index.html',
          controller: 'ListCtrl'
       }).
        otherwise({
         redirectTo: '/'
       });
   }])





;

  

