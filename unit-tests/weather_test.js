'use strict';

describe('app.weather module', function() {

  beforeEach(module('app.weather'));

  describe('weather controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var weatherCtrl = $controller('weatherCtrl');
      expect(weatherCtrl).toBeDefined();
    }));

  });
});