'use strict';

describe('PanelController', function() {
  beforeEach(module('app'));

  var $controller;

  var echoService = jasmine.createSpyObj('echoService', [
        'connect',
        'postMessage'
      ]);
      module(function ($provide) {
        $provide.value('echoService', echoService);
     
      });


  beforeEach(inject(function(_$controller_, echoService){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
    
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PanelCtrl', { $scope: $scope });
    });

  describe('$scope.checkStatus function', function() {

    it('should return false when connected', function() {
      controller.status = 'connected';
      expect($scope.checkStatus()).toEqual(false);
    });

    it('should return true when disconnected', function() {
      controller.status = 'Disconnected';
      expect($scope.checkStatus()).toEqual(true);
    });
  });

  describe('disconnect function', function() {
    it('should show "Disconnected" in the messages', function() {
      controller.messages = [];
      controller.status = 'connected';
      controller.disconnect();
      expect(controller.messages[0]).toEqual('Disconnected');
    });

    it('should show have a "Disconnected" status', function() {
      controller.status = 'connected';
      controller.disconnect();
      expect(controller.status).toEqual('Disconnected');
    });
  });  

  describe('handleSubmit function', function() {

    it('should show the sent message in the messages log', function() {
        controller.messages = [];
        controller.message = 'hello';
        controller.handleSubmit();
        expect(controller.messages[0]).toEqual('SENT: hello');
      });
    });

  describe('clearLog function', function() {
    it('should clear all messages on the log', function() {
      controller.messages = ['hello', 'world'];
      controller.clearLog();
      expect(controller.messages).toEqual([]);
    });
  });

  describe('connectToServer function', function() {
    it('should log "unkown location" when no location is entered', function() {
      controller.messages = [];
      controller.connectToServer();
      expect(controller.messages[0]).toEqual('Error! Unknown location');
    });
  });
});
