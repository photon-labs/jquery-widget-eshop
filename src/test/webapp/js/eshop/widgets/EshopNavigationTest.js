/*global require */

require(  [ "jquery", "eshop/widgets/Navigation", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, Navigation, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testNavigationSuccess = QUnit.test, testNavigationFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Navigation
	 */
	  module("Navigation.js;Navigation");
	test("Test Navigation with login same data.", function() {
	
		var navigation, api, phrescoapi, self = this, output1, output2, loginresponse = {}, logtext, texttLi, ordertext, ordertextLi, mainContent, navUL, lis, liList;
		
		navigation = new Navigation();
		api = new EShopAPI();
		navigation.api = api;
		navigation.api.loginresponse = loginresponse;
		
		output1 = navigation.testRenderUI();
		
		logtext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"LogOut":"Login";
        texttLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"logoutLi":"loginLi";
        ordertext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"My Order":"Sign up";
        ordertextLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"myorderLI":"signupLI";
        mainContent = $('<nav id="navigation"></nav>');
        navUL = $('<ul></ul>');
        lis = '<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>';
   
        lis +=  '<li id="productsLI"><a href="#">Products</a></li>';
        lis +=  '<li id="specialsLI"><a href="#">Specials</a></li>';
        lis +=  '<li id="contactUsLI"><a href="#">Contact us</a></li>';
        lis +=  '<li id="aboutUsLI"><a href="#">About us</a></li>';

        lis +=  '<li id="'+ ordertextLi +'"><a href="#">'+ ordertext +'</a></li>';
        lis +=  '<li id="'+ texttLi +'"><a href="#">'+ logtext +'</a></li>';
        lis +=  '<li id="myorderLI"><a href="#" style="display: none;>My Order</a></li>'; 
        lis +=  '<li id="logoutLi"><a href="#" style="display: none;">Log Out</a></li>';
        
        liList = $(lis);
        navUL.append(liList);
        mainContent.append(navUL);
		output2 = mainContent;
		equal(output1.html(), output2.html(), "Navigation without login case Success");
	}); 
	
	test("Test Navigation without login Different data.", function() {
	
		var navigation, api, phrescoapi, self = this, output1, output2, loginresponse = {}, logtext, texttLi, ordertext, ordertextLi, mainContent, navUL, lis, liList;
		
		navigation = new Navigation();
		api = new EShopAPI();
		navigation.api = api;
		navigation.api.loginresponse = loginresponse;
		
		output1 = navigation.testRenderUI();
		
		logtext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"LogOut":"Login";
        texttLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"logoutLi":"loginLi";
        ordertext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"My Order":"Sign up";
        ordertextLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"myorderLI":"signupLI";
        mainContent = $('<nav id="navigation"></nav>');
        navUL = $('<ul></ul>');
        lis = '<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>';
   
        /* lis +=  '<li id="productsLI"><a href="#">Products</a></li>'; */
        lis +=  '<li id="specialsLI"><a href="#">Specials</a></li>';
        lis +=  '<li id="contactUsLI"><a href="#">Contact us</a></li>';
        lis +=  '<li id="aboutUsLI"><a href="#">About us</a></li>';

        lis +=  '<li id="'+ ordertextLi +'"><a href="#">'+ ordertext +'</a></li>';
        lis +=  '<li id="'+ texttLi +'"><a href="#">'+ logtext +'</a></li>';
        lis +=  '<li id="myorderLI"><a href="#" style="display: none;>My Order</a></li>'; 
        lis +=  '<li id="logoutLi"><a href="#" style="display: none;">Log Out</a></li>';
        
        liList = $(lis);
        navUL.append(liList);
        mainContent.append(navUL);
		output2 = mainContent;
		
		notEqual(output1.html(), output2.html(), "Navigation without login case Failure");
	}); 
	
	test("Test Navigation with login same data.", function() {
	
		var navigation, api, phrescoapi, self = this, output1, output2, logtext, texttLi, ordertext, loginresponse, ordertextLi, mainContent, navUL, lis, liList;
		
		navigation = new Navigation();
		api = new EShopAPI();
		navigation.api = api;
		
		loginresponse = {message:"success", successMessage:"Login Success", userId:16, userName:"john john"};
		navigation.api.loginresponse = loginresponse;
		
		output1 = navigation.testRenderUI();
		
		logtext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"LogOut":"Login";
        texttLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"logoutLi":"loginLi";
        ordertext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"My Order":"Sign up";
        ordertextLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"myorderLI":"signupLI";
        mainContent = $('<nav id="navigation"></nav>');
        navUL = $('<ul></ul>');
        lis = '<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>';
   
        lis +=  '<li id="productsLI"><a href="#">Products</a></li>';
        lis +=  '<li id="specialsLI"><a href="#">Specials</a></li>';
        lis +=  '<li id="contactUsLI"><a href="#">Contact us</a></li>';
        lis +=  '<li id="aboutUsLI"><a href="#">About us</a></li>';

        lis +=  '<li id="'+ ordertextLi +'"><a href="#">'+ ordertext +'</a></li>';
        lis +=  '<li id="'+ texttLi +'"><a href="#">'+ logtext +'</a></li>';
        lis +=  '<li id="myorderLI"><a href="#" style="display: none;>My Order</a></li>'; 
        lis +=  '<li id="logoutLi"><a href="#" style="display: none;">Log Out</a></li>';
        
        liList = $(lis);
        navUL.append(liList);
        mainContent.append(navUL);
		output2 = mainContent;
		
		equal(output1.html(), output2.html(), "Navigation with login case Success");
		
	});
	
	test("Test Navigation with login Different data.", function() {
	
		var navigation, api, phrescoapi, self = this, output1, output2, logtext, texttLi, ordertext, loginresponse, ordertextLi, mainContent, navUL, lis, liList;
		
		navigation = new Navigation();
		api = new EShopAPI();
		navigation.api = api;
		
		loginresponse = {message:"success", successMessage:"Login Success", userId:16, userName:"john john"};
		navigation.api.loginresponse = loginresponse;
		
		output1 = navigation.testRenderUI();
		
		logtext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"LogOut":"Login";
        texttLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"logoutLi":"loginLi";
        ordertext = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"My Order":"Sign up";
        ordertextLi = (loginresponse.userId !== 0 && loginresponse.userId !== undefined )?"myorderLI":"signupLI";
        mainContent = $('<nav id="navigation"></nav>');
        navUL = $('<ul></ul>');
        lis = '<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>';
   
        lis +=  '<li id="productsLI"><a href="#">Products</a></li>';
       /*  lis +=  '<li id="specialsLI"><a href="#">Specials</a></li>'; */
        lis +=  '<li id="contactUsLI"><a href="#">Contact us</a></li>';
        lis +=  '<li id="aboutUsLI"><a href="#">About us</a></li>';

        lis +=  '<li id="'+ ordertextLi +'"><a href="#">'+ ordertext +'</a></li>';
        lis +=  '<li id="'+ texttLi +'"><a href="#">'+ logtext +'</a></li>';
        lis +=  '<li id="myorderLI"><a href="#" style="display: none;>My Order</a></li>'; 
        lis +=  '<li id="logoutLi"><a href="#" style="display: none;">Log Out</a></li>';
        
        liList = $(lis);
        navUL.append(liList);
        mainContent.append(navUL);
		output2 = mainContent;
		
		notEqual(output1.html(), output2.html(), "Navigation with login case Failure");
		
	});
});