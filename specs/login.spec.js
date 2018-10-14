'use strict'

var page = require('../utils/page.js');
var LobbyPage = require('../pages/lobby.page.js');
var LoginPage = require('../pages/login.page.js');

describe('Login from lobby', function() {
	var loginPage = new LoginPage();
	var lobbyPage = new LobbyPage();

beforeEach(function () {
		page.credentials();
	});
  it('Should login successfully with valid user credentials from Lobby', function() {
    page.goToPage('/en/lobby');
    lobbyPage.waitWidget();
    
    lobbyPage.setUsername('autouk');
    lobbyPage.setPassword('Autotest1');
    lobbyPage.login();
    expect(lobbyPage.isLogged()).toEqual(true);
  });

  it('Should login successfully with valid user credentials from Login Page', function() {
    page.goToPage('/en/login');
    loginPage.waitLoginForm();
    
    loginPage.setUsername('autouk');
    loginPage.setPassword('Autotest1');
    loginPage.login();
    expect(loginPage.isLogged()).toEqual(true);
  });
});