angular.module('til.facts', [])

.controller('FactsController', function($scope, $location, Facts) {
  $scope.facts = {};
  Facts.getFacts().then(function(data) {
    $scope.facts.body = data.data.data.children.slice(1);
    console.log(typeof data.data.data.children.slice(1)[0].data.url);
  });
});