/*global require */

require(  [ "jquery", "./Login", "./EShopAPI", "./Phresco", "./WSConfig", "qunit" ], function($, Login, EShopAPI, Phresco, WSConfig, QUnit) {

	var equal = QUnit.equal, expect = QUnit.expect, testValidUser = QUnit.test, testInvalidUser = QUnit.test, wsconfig;

	/**
	 * Test that the setMainContent method sets the text in the Login-widget
	 */
	testValidUser("Test for valid user login", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
        wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
        loginData.api = api;
		
        login = {};
        login.loginEmail = 'john@phresco.com';
        login.password = 'john';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);
        output2 = "success";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Login Success - Test case passed");
	});
	
	testInvalidUser("Test for invalid user login.", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
        wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		// api.getWsConfig();
        loginData.api = api;

        login = {};
        login.loginEmail = 'invalid@phresco.com';
        login.password = 'invalid';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);
        output2 = "failure";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Login Failure - Test case passed");
	}); 

});