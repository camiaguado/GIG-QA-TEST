var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.spec.js'],

  onPrepare: function() {
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './reporter/',
        fileNamePrefix: 'GIG-test-', 
    }));


    var width = 1600;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
	}
}
