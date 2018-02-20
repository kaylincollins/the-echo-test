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
  beforeEach(inject(function($controller) {
    controller = element.controller('PanelCtrl');

  }));
 
  // it('should have a disconnect function on the scope', function() {
  //   expect(controller.disconnect).toBeDefined;
  //   expect(controller.disconnect).to.be.a('function');
  // });


});
