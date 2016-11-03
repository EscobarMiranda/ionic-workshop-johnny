module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './www/lib/ionic/js/ionic.bundle.js',
      './www/lib/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './www/app/**/*.module.js',
      './www/app/**/*.js',
      './www/app/*.js',
      'tests/specs/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      './www/app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
    },


    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
