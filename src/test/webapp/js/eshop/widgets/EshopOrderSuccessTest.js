/*global require */

require(  [ "jquery", "eshop/widgets/OrderSuccess"], function($, OrderSuccess) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testOrderSuccessSametext = QUnit.test, testOrderSuccessdiffText = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the ordersuccess-widget
	 */
	 module("OrderSuccess.js;OrderSuccess");
	test("Test OrderSuccess with same text.", function() {
	
		var output1, output2, ordersuccess, mainContent, topH3, productContainer, divfirst, msgh4, message;
		ordersuccess = new OrderSuccess();
		output1 = ordersuccess.testRenderUI(); 

		mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		divfirst = $('<div>');
		msgh4 = $('<h4 class="descrip"> Success Messages</h4>');
		message = $('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
		divfirst.append(msgh4);
		divfirst.append(message);
		productContainer.append(divfirst);
        mainContent.append(topH3);  
        mainContent.append(productContainer);
			
		output2 = mainContent;
		// Expect that the text was set on the expected element
		equal(output1.html(), output2.html(), "Success case for ordersuccess-widget");
	}); 
	
	test("Test OrderSuccess with different text.", function() {
	
		var output1, output2, ordersuccess, mainContent, topH3, productContainer, divfirst, msgh4, message;
		ordersuccess = new OrderSuccess();
		output1 = ordersuccess.testRenderUI(); 

		mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		divfirst = $('<div>');
		/* msgh4 = $('<h4 class="descrip"> Success Messages</h4>'); */
		message = $('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
		/* divfirst.append(msgh4); */
		divfirst.append(message);
		productContainer.append(divfirst);
        mainContent.append(topH3);  
        mainContent.append(productContainer);
			
		output2 = mainContent;
			
		// Expect that the text was set on the expected element
		notEqual(output1.html(), output2.html(), "Failure case for ordersuccess-widget");
	}); 
});