'use strict';

describe('app module', function() {

  beforeEach(module('app'));

  describe('Weather controller', function(){

      var weatherCtrl;

      beforeEach(inject(function ($rootScope, $q, $controller, dataservice) {

          sinon.stub(dataservice, 'getCurrentWeather', function () {
              var deferred = $q.defer();
              deferred.resolve(mockData.getMockCurrentWeather());
              return deferred.promise;
          });

          weatherCtrl = $controller("Weather");
          $rootScope.$apply();
      }));

      it("should be defined", function () {
          expect(weatherCtrl).toBeDefined();
      });

      it("should have title Current Weather", function () {
          expect(weatherCtrl.title).toBe("Current Weather");
      });

      it("should have current temp == 3.45 ", function () {
          expect(weatherCtrl.currentWeather.main.temp).toBe(3.45);
      });
  });
});