'use strict';
var ec = protractor.ExpectedConditions;

var signupPage = function () {

    var registrationForm = element(by.css('[name="formSignup"]'));
    var email = element(by.css('input[ko-validate="formSignup.email"]'));
    var username = element(by.css('input[ko-validate="formSignup.username"]'));
    var password = element(by.css('input[ko-validate="formSignup.password"]'));
    var passwordRepeat = element(by.css('input[name="passwordRepeat"]'));
    var termsAndConditions = element(by.css('label[for="consent_6"]>svg'));
    var personalData = element(by.css('label[for="consent_12"]>svg'));
    var nextBtn = element(by.css('[ng-show="regStep === 1"]'));
    var firstname = element(by.css('input[name="firstname"]'));
    var lastname = element(by.css('input[name="lastname"]'));
    var dayBth = element(by.id('days'));
    var monthBth = element(by.id('months'));
    var yearBth = element(by.id('years'));
    var sexMale = element(by.css('[for="sexMale"]>svg'));
    var sexFemale = element(by.css('[for="sexFemale"]>svg'));
    var address = element(by.css('input[name="address"]'));
    var postcode = element(by.css('input[name="postalCode"]'));
    var city = element(by.css('input[name="city"]'));
    var country = element(by.id('countrySelector'));
    var countryList = element.all(by.css('a.e-flag'));
    var currency = element(by.id('currencySelector'));
    var currencyList = element.all(by.css('li.c-dropdown__item'));
    var phonePrefix = element(by.id('phonePrefix'));
    var phoneList = element.all(by.xpath('//*[@id="phonePrefix"]/ul'));
    var phoneNumber = element(by.css('input[ko-validate="formSignup.phoneNumber"]'));
    var registrationBtn = element(by.css('span[ng-switch-when="true"]'));
    var detailsBtn = element(by.css('span[ng-switch-default="ng-switch-default"]'));
    var consentForm = element(by.css('[ng-if="isSignup"]'));


    this.waitForForm = function(){
        browser.wait(ec.visibilityOf(registrationForm), 10000, 'Registration form has not been uploaded after 10 seconds.');
    };
    
    this.setEmail = function(mail){
        email.click()
        email.sendKeys(mail);
    };
    this.setUsername = function(usr){
        username.sendKeys(usr);
    };
    this.setPassword = function(pass){
        password.sendKeys(pass);
    };
    this.setPasswordRepeat = function(pass){
        passwordRepeat.sendKeys(pass);
    };
    this.checkTandC = function(){
        browser.wait(ec.visibilityOf(consentForm), 10000, 'Consent for has not been uploaded after 10 seconds.');
        consentForm.click();
        termsAndConditions.click();
    };
    this.checkPD = function(){
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){ 
            personalData.click();
        });
    };
    this.nextStep = function(){
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){ 
            nextBtn.click();
        });
    };
    this.setFirstName = function(name){
        firstname.sendKeys(name);
    };
    this.setLastName = function(surname){
        lastname.sendKeys(surname);
    };
    this.setDayBth = function(day){
        dayBth.sendKeys(day);
    };
    this.setMonthBth = function(month){
        monthBth.sendKeys(month);
    };
    this.setYearBth = function(year){
        yearBth.sendKeys(year);
    };
    this.checkMale = function(male){
        sexMale.sendKeys(male);
    };
    this.checkFemale = function(female){
        sexFemale.sendKeys(female);
    };
    this.setAddress = function(add){
        address.sendKeys(add);
    };
    this.setPostCode = function(pc){
        postcode.sendKeys(pc);
    };
    this.setCity = function(cty){
        city.sendKeys(cty);
    };
    this.setPhone = function(phone){
        phoneNumber.sendKeys(phone);
    };
    this.selectCountry = function (ctry) {
        country.click();
        countryList.filter(function(obj, index) {
            return obj.getAttribute('data-value').then(function(value) {
                return value === ctry;
            });
        }).first().click();
    };
    this.selectCurrency = function (curr) {
        currency.click();
        currecyList.filter(function(obj, index) {
            return obj.getAttribute('data-value').then(function(value) {
                return value === curr;
            });
        }).first().click();
    };
    this.selectPrefix = function (pre) {
        phonePrefix.click();
        phoneList.filter(function(obj, index) {
            return obj.getAttribute('data-value').then(function(value) {
                return value === pre;
            });
        }).first().click();
    };
    this.isRegBtnEnabled = function(){
      var btnContent = '';
        try{
            browser.wait(ec.visibilityOf(registrationBtn), 10000, 'Registration Button is not visible after 5 seconds.');
            btnContent = registrationBtn.getText();
        }catch(err){
            
        };
        return btnContent;
    };
    this.isDetailsBtnVisible = function(){
      var btnContent = '';
        try{
            browser.wait(ec.visibilityOf(detailsBtn), 10000, 'Registration Button is not visible after 5 seconds.');
            btnContent = detailsBtn.getText();
        }catch(err){
            
        };
        return btnContent;
    };
};
module.exports = signupPage;
