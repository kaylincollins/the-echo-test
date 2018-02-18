angular.module('app')
.controller('AppCtrl', function(echoService) {
  echoService.getAll((data) => {
    this.items = data;
    console.log('Data', data)
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});