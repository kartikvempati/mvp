angular.module('til.facts', [])

.controller('FactsController', function($scope, $location, Facts) {
  $scope.facts = {};
  Facts.getFacts().then(function(data) {
    console.log(Object.keys(data.data));
    $scope.facts.body = data.data.data.children.slice(1);
  });
});