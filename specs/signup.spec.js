'use strict'
const {data} = require('../utils/datagenerator.js');
var page = require('../utils/page.js');
var signupPage = require('../pages/signup.page.js');


describe('Signup', function() {
	var signup = new signupPage();
	
	beforeEach(function () {
		page.credentials();
		page.goToPage('/en/signup');
	});

  it('Registration button should be disable with empty fields', function() {      
    signup.waitForForm();
    //step 1    
    signup.setEmail(data.email);
    signup.setUsername(data.username);
    signup.setPassword(data.password);
    signup.setPasswordRepeat(data.password);
    signup.checkTandC();
    signup.checkPD();
    signup.nextStep();
    //step 2
    signup.waitForForm();
    signup.setFirstName(data.firstname);
    signup.setLastName(data.lastname);
    signup.setDayBth(data.day);
    signup.setMonthBth(data.month);
    signup.setYearBth(data.year);
    signup.setAddress(data.street);
    signup.setPostCode(data.zipcode);
    signup.setPhone(data.phone);
    signup.selectCountry(data.country);
    
    expect(signup.isDetailsBtnVisible()).toEqual('Enter Your Details');
  });

  it('Registration button should be enable once form completed', function() {
    signup.waitForForm();
//step 1    
    signup.setEmail(data.email);
    signup.setUsername(data.username);
    signup.setPassword(data.password);
    signup.setPasswordRepeat(data.password);
    signup.checkTandC();
    signup.checkPD();
    signup.nextStep();
//step 2
    signup.waitForForm();
    signup.setFirstName(data.firstname);
    signup.setLastName(data.lastname);
    signup.setDayBth(data.day);
    signup.setMonthBth(data.month);
    signup.setYearBth(data.year);
    signup.setAddress(data.street);
    signup.setPostCode(data.zipcode);
    signup.setCity(data.city);
    signup.setPhone(data.phone);
    signup.selectCountry(data.country);

    expect(signup.isRegBtnEnabled()).toEqual('Register now');
  });
  
});

