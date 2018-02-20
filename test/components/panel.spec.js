'use strict';

describe('Component: panel', function () {
  beforeEach(angular.mock.module('app'));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('panel');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  var controller;
  var scope;
  beforeEach(inject(function($rootScope, $componentController){
    scope = $rootScope.$new();
    controller = $componentController('panel', {$scope: scope});
  }));
   
  it('should have a disconnect function', function() {
    expect(controller.disconnect).toBeDefined();
    // console.log(controller.status)
    // expect(controller.disconnect).toBe('function');
  });

  it('should have a handleSubmit function', function() {
    expect(controller.handleSubmit).toBeDefined();

  });
  
  it('should have a clearLog function', function() {
    expect(controller.clearLog).toBeDefined();
    // expect(controller.clearLog()).toBe

  });

  it('should have a connectToServer function', function() {
    expect(controller.connectToServer).toBeDefined();

  });

});