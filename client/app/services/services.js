angular.module('til.services', [])

.factory('Facts', function($http){

  var getFacts = function() {
  	return $http({
      method: 'GET',
      url: '/',
    }).then(function (resp) {
      return resp
    });
  }  

  return {
    getFacts: getFacts
  };

});