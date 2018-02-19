angular.module('app')
.controller('AppCtrl', function(echoService) {
  echoService.getAll((data) => {
    this.messages = data;
    console.log('Data', data)
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});