(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {

        var service = {
            getCurrentWeather: getCurrentWeather
        };

        return service;

        function getCurrentWeather() {
            return $http.get('/api/data/weather')
                .then(getCurrentWeatherComplete)
                .catch(function (message) {

                });

            function getCurrentWeatherComplete(data) {
                return data.data;
            }
        }

    }
})();
