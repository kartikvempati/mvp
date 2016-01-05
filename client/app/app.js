angular.module('til',['factsController',
  'ngRoute'
  ])

.config(function($routeProvider, $httpProvider) {
	$routeProvider.
		when('/', {
      templateURL: 'app/facts/facts.html',
      controller: 'factsController'
    })
})