module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/sinonjs/sinon.js',
      'app/app.js',
      'app/core/core.module.js',
      'app/core/dataservice.js',
      'app/weather/weather.module.js',
      'app/weather/weather.js',
      'unit-tests/lib/MockData.js',
      'unit-tests/weather_test.js'
    ],

    reporters : ['progress'],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
