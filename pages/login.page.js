'use strict';
var ec = protractor.ExpectedConditions;

var loginPage = function () {

    var loginForm = element(by.css('[name="formLogin"]'));
    var username = element(by.css('[ko-validate="formLogin.username"]'));
    var password = element(by.css('[ko-validate="formLogin.password"]'));
    var loginBtn = element(by.id('submitLogin'));
    var profileBar = element(by.css('a[ng-href="/en/profile"]'));

    this.waitLoginForm = function(){
        browser.wait(ec.visibilityOf(loginForm), 10000, 'Login Form is not visible after 10 seconds.');
        loginForm.click();
    };
           
    this.setUsername = function (user) {
        username.click();
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.click();
        password.sendKeys(pass);
    };

    this.login = function () {
        loginBtn.click();
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

module.exports = loginPage;

