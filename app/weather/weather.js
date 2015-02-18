(function () {
    'use strict';

    angular.module('app.weather').controller('Weather', Weather);

    Weather.$inject = ['dataservice'];

    function Weather(dataservice) {
        var vm = this;
        vm.title = 'Current Weather';
        vm.currentWeather = [];

        activate();

        function activate() {
            return getCurrentWeather().then(function() {

              });
        }

        function getCurrentWeather() {
            return dataservice.getCurrentWeather().then(function(data) {
                vm.currentWeather = data;
                return vm.currentWeather;
            });
        }
    }
})();