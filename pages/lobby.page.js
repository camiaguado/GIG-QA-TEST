'use strict';
var ec = protractor.ExpectedConditions;

var homePage = function () {


    var username = element(by.css('[name="email"]'));
    var password = element(by.css('[name="pwd"]'));
    var profileBar = element(by.css('a[ng-href="/en/profile"]'));
    var loginWidget = element(by.css('div[ng-if="showLoginWidget"]'));
    var loginHeaderBtn = element(by.css('fieldset.m-navigation-login__fields [type="submit"]'));

    this.setUsername = function (user) {
        username.click();
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.click();
        password.sendKeys(pass);
    };

    this.login = function () {
        loginHeaderBtn.click();
    };

    this.waitWidget = function() {
        browser.wait(ec.visibilityOf(loginWidget), 10000, 'Widget is not visible after 10 seconds');
        loginWidget.click();
    };
    this.isLogged = function(){
      var enable = true;
        try{
            browser.wait(ec.visibilityOf(profileBar), 10000);
        }catch(err){
            enable = false;
        };
        return enable;
    };


}; 

module.exports = homePage;

