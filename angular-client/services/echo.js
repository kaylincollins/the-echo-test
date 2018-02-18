angular.module('app')
.service('echoService', function($http) {
  this.getAll = function(callback) {
    $http.get('/echo')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});