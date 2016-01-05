angular.module('til.services', [])

.factory('Facts', function($http){

  var getFacts = function() {
  	return $http({
      method: 'GET',
      url: '/api/facts',
    }).then(function (resp) {
      console.log(resp);
      return resp;
    });
  }  

  return {
    getFacts: getFacts
  };

});