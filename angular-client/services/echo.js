angular.module('app')
.service('echoService', function($http) {
  this.getAll = (callback) => {
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

  this.postMessage = (message, callback) => {
    $http.post('/echo', {data: message} )
    .then(function({data}) {
      if(callback) {
        console.log('logging post from service', data)
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  }
});