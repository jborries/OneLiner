var App = angular.module('StoreModule', ['ngRoute', 'angularMoment']);

App.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'CustomerController'
    })
    .when('/new', {
      templateUrl: '/partials/_new.html',
      controller: 'CustomerController'
    })
    //:id
    .when("/show/:id", {
        templateUrl: '/partials/_show.html',
        controller: 'CustomerController'
    })
    .when('/edit/:id', {
        templateUrl: '/partials/_edit.html',
        controller: 'CustomerController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
