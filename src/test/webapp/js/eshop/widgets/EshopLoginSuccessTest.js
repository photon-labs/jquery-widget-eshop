/*global require */

require(  [ "jquery", "eshop/widgets/LoginSuccess", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, LoginSuccess, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testLoginSuccessSuccess = QUnit.test, testLoginSuccessFailure = QUnit.test, phrescoapi, loginresponse, login1, loginresponse1;

	/**
	 * Test that the setMainContent method sets the text in the LoginSuccess
	 */
	 module("LoginSuccess.js;LoginSuccess");
	test("Test LoginSuccess with success case.", function() {
	
		var loginSuccess, output1, output2, login, api, phresco, mainContent, contactus, selection, divleft, contactdescrip, myCart, log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, registrationStatus, statusMsg, log_txtEmail, log_txt_lftEmail, log_txtuserName_txt, log_txtuserName, cleardiv;
		
		loginSuccess = new LoginSuccess();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		loginSuccess.phrescoapi = phrescoapi;
		loginSuccess.api = api;
		
		loginresponse = {message:"success", successMessage:"Login Success", userId:1, userName:"John Anderson"};
		login = {loginEmail:"john@phresco.com", password:"john"};
		
		loginSuccess.phrescoapi.login = login;
		loginSuccess.api.loginresponse = loginresponse;
		
		output1 = loginSuccess.testRenderUI();
		
		loginresponse1 = {message:"success", successMessage:"Login Success", userId:1, userName:"John Anderson"};
		login1 = {loginEmail:"john@phresco.com", password:"john"};
		
		mainContent = $('<div></div>');
        contactus = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        contactdescrip = $('<div class="contactdescrip">');
        myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Login</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="log_txt_lft">Status : '+ loginresponse1.successMessage +'</div>');
        log_txtEmail = $('<div class="log_txt">');
        log_txt_lftEmail = $('<div class="log_txt_lft">Email : '+ login1.loginEmail+'</div>');
        log_txtuserName_txt = $('<div class="log_txt"></div>');
        log_txtuserName = $('<div class="log_txt_lft">Name : '+ loginresponse1.userName+'</div>');
        cleardiv = $('<div class="clear"></div>');
        //log_txt_rhtEmail = this.createElement('<div class="log_txt_lft">'+jsonData.login.loginEmail+' name : '+jsonData.response.userName+'</div>');

        registrationStatus.append(statusMsg);
        log_txtEmail.append(log_txt_lftEmail);
        //log_txtEmail.appendChild(log_txt_rhtEmail);
        log_txtuserName_txt.append(log_txtuserName);
                          
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);
        log_txt_div.append(log_txtuserName_txt);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
        contactdescrip.append(myCart);
        
        divleft.append(contactdescrip);    
        divleft.append(cleardiv);
        selection.append(divleft);
        contactus.append(selection);
        mainContent.append(contactus);
		output2 = mainContent;
		
		equal(output1.html(), output2.html(), "LoginSuccess with success case");
	});

	test("Test LoginSuccess with Failure case.", function() {
		
		var loginSuccess, output1, output2, login, api, phresco, mainContent, contactus, selection, divleft, contactdescrip, myCart, log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, registrationStatus, statusMsg, log_txtEmail, log_txt_lftEmail, log_txtuserName_txt, log_txtuserName, cleardiv;
		
		loginSuccess = new LoginSuccess();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		loginSuccess.phrescoapi = phrescoapi;
		loginSuccess.api = api;
		
		loginresponse = {message:"failure", successMessage:"Login failed", userId:0, userName:""};
		login = {loginEmail:"john123@phresco.com", password:"john"};
		
		loginSuccess.phrescoapi.login = login;
		loginSuccess.api.loginresponse = loginresponse;
		
		output1 = loginSuccess.testRenderUI();
		
		loginresponse1 = {message:"failure", successMessage:"Login failed", userId:0, userName:""};
		login1 = {loginEmail:"john123@phresco.com", password:"john"};
		
		mainContent = $('<div></div>');
        contactus = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        contactdescrip = $('<div class="contactdescrip">');
        myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Login</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="log_txt_lft">Status : '+ loginresponse1.successMessage +'</div>');
        log_txtEmail = $('<div class="log_txt">');
        log_txt_lftEmail = $('<div class="log_txt_lft">Email : '+ login1.loginEmail+'</div>');
        log_txtuserName_txt = $('<div class="log_txt"></div>');
        log_txtuserName = $('<div class="log_txt_lft">Name : '+ loginresponse1.userName+'</div>');
        cleardiv = $('<div class="clear"></div>');
        //log_txt_rhtEmail = this.createElement('<div class="log_txt_lft">'+jsonData.login.loginEmail+' name : '+jsonData.response.userName+'</div>');

        registrationStatus.append(statusMsg);
        log_txtEmail.append(log_txt_lftEmail);
        //log_txtEmail.appendChild(log_txt_rhtEmail);
        log_txtuserName_txt.append(log_txtuserName);
                          
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);
        log_txt_div.append(log_txtuserName_txt);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
        contactdescrip.append(myCart);
        
        divleft.append(contactdescrip);    
        divleft.append(cleardiv);
        selection.append(divleft);
        contactus.append(selection);
        mainContent.append(contactus);
		output2 = mainContent;
		
		equal(output1.html(), output2.html(), "LoginSuccess with failure case");
	});
});