angular.module('til',['til.facts',
  'til.services',
  'ngRoute'])

.config(function ($routeProvider, $httpProvider) {
	$routeProvider
    .when('/', {
      templateUrl: 'app/facts/facts.html',
      controller: 'FactsController'
    })
})



