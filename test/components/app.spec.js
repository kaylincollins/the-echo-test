'use strict';

describe('app', function() {

beforeEach(module('app'));

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile, $templateCache){
      scope = $rootScope.$new();
      element = angular.element('app');
      element = $compile(element)(scope);
      scope.$apply();
    }));
   
    it('should render the panel', function() {
     
    });
});