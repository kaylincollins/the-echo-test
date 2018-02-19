angular.module('app')
.service('echoService', function($http) {
  this.connect = (location, callback) => {
    $http.get(location)
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  this.postMessage = (message, callback) => {
    $http.post('/echo', {data: message} )
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  };
});