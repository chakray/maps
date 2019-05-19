// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const reporters = process.env.TRAVIS ? ['dots'] : ['progress'];
const reports = process.env.TRAVIS ? ['lcovonly', 'text-summary'] : ['html', 'text-summary'];
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports,
      dir: require('path').join(__dirname, '../coverage/demoUtils'),
      fixWebpackSourcePaths: true
    },
    reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};

