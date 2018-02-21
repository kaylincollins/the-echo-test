
describe('echo service', function() {
  var mock, notify;
  beforeEach(module('app'));
  beforeEach(function() {
    mock = {alert: jasmine.createSpyObj('echoService', [
        'connect',
        'postMessage'
      ])};

    module(function($provide) {
      $provide.value('echoService', mock);
    });

    inject(function($injector) {
      echo = $injector.get('echoService');
    });
  });

  it('should have a connect function', function() {
    echo.alert.connect();
    expect(mock.alert.connect).toHaveBeenCalled();
  });

  it('should have a postMessage function', function() {
    echo.alert.postMessage();
    expect(mock.alert.postMessage).toHaveBeenCalled();
  });

});