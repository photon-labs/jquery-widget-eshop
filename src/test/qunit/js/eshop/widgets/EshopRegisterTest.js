/*global require */

require(  [ "jquery", "./Register", "./EShopAPI", "./WSConfig", "qunit" ], function($, Register, EShopAPI, WSConfig, QUnit) {

	var equal = QUnit.equal, expect = QUnit.expect, wsconfig, test = QUnit.test, testNewUserRegister = QUnit.test, testExistingUserRegister = QUnit.test, self = this,
	registerData,register, registerdata, firstName, lastName, email, password, phoneNumber, listener, api, output1, output2;
	/**
	 * 
	 */
	 
	/* testNewUserRegister("New User Registration Test", function() {

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
        wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
        registerData.api = api;

		register = {};
        register.firstName = 'xyz';
        register.lastName = 'xyz';
        register.email = 'abcd@phresco.com';
        register.password = 'xyz';
        register.phoneNumber = '123456';
        registerdata = {};
        registerdata.register = register;

		output1 = registerData.registerTest(registerdata);
        output2 = 'Success';

		// Expect that the text was set on the expected element
		equal(output1, output2,	"New User Register Success - Test case passed");
	}); */
	
	testExistingUserRegister("Existing User Registration Test", function() {

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
        wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
        registerData.api = api;

		register = {};
        register.firstName = 'new';
        register.lastName = 'new';
        register.email = 'john@phresco.com';
        register.password = 'john';
        register.phoneNumber = '123456';
        registerdata = {};
        registerdata.register = register;

		output1 = registerData.registerTest(registerdata);
        output2 = 'Failed';

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Already Existing User - Registration Failed - Test case passed");
	});
	
	/* test("Test registration with Invalid EmailId", function() {

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
        registerData.api = api;

		register = {};
        register.firstName = 'new';
        register.lastName = 'new';
        register.email = 'john';
        register.password = 'john';
        register.phoneNumber = '123456';
        registerdata = {};
        registerdata.register = register;

		output1 = registerData.registerTest(registerdata);
        output2 = 'Failed';

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Test registration with Invalid EmailId - Registration Failed - Test case passed");
	}); */

});