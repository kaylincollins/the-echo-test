angular.module('app')
  .controller('PanelCtrl', function(echoService) {
    this.handleSubmit = () => {
      this.messages = this.messages || [];
      this.messages.push('SENT: ' + this.message);

      echoService.postMessage(this.message, (data) => {
        this.messages.push(data);
      });

      this.message = '';
    },

    this.clearLog = () => {
      this.messages = [];
    }
  })
  .component('panel', {
    bindings: {
      messages: '<',
    },
    controller: 'PanelCtrl',
    templateUrl: '/templates/panel.html'
  });