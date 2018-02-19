angular.module('app')
  .controller('PanelCtrl', function($scope, echoService) {
    $scope.checkStatus = () => {
      if (this.status === 'connected') {
        return false; //enable the submit button
      } else {
        return true; //disable the submit button
      }
    },

    this.disconnect = () => {
      if (this.status === 'connected') {
        this.status = 'Disconnected';
        this.messages.push(this.status);
      } else {
        return;
      }
    },

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
    },

    this.connectToServer = () => {
      if (this.status === 'connected') {
        return
      } else {
        echoService.connect((data) => {
          this.messages = this.messages || [];
          this.messages.push(data);
          this.status = 'connected';
        });
      }
    }
  })
  .component('panel', {
    bindings: {
      messages: '<',
      status: '<'
    },
    controller: 'PanelCtrl',
    templateUrl: '/templates/panel.html'
  });