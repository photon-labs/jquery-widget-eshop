/*global require */

require([ "jquery", "eshop/widgets/OrderFormView", "eshop/widgets/Phresco"], function($, OrderFormView, Phresco) {

	//var output1, output2, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testOrderFormViewSuccess = QUnit.test, testOrderFormViewDiffData = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the OrderFormView-widget
	 */
	 module("OrderFormView.js;OrderFormView");
	test("Test order form view with similar data", function() {
		var orderFormView, comment, phresco, buttonposition2, phrescoapi, orderDetail = {}, orderDetail_test = {}, mainContent, topH3, productContainer, fieldholdertitle, h5, formrow, email, billh5, formrow1, formrow2, formrow3, formrow4, formrow5, formrow6, formrow7, formrow8, formrow9, formrow10, formrow11, formrow12, formrow13, formrow14, formrow15, formrow16, firstname, lastname, company, address1, address2, city, state, country, postcode, phonenumber, paymentmethod, subtotal, ordertotal, mailto, ordercomment, backbtn, submitbtn, orderdetailDelivery;
	
		orderFormView = new OrderFormView();
		phrescoapi = new Phresco();
		orderFormView.phrescoapi = phrescoapi;
		
		orderDetail = {email:"ss@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", comments:"nice"};
		
		orderFormView.phrescoapi.orderDetail = orderDetail;
		output1 = orderFormView.testRenderUI();
		
		orderDetail_test = {email:"ss@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", comments:"nice"};
		
		orderdetailDelivery = {};
		orderdetailDelivery.email = orderDetail_test.email;
		orderdetailDelivery.firstname = orderDetail_test.firstname;
		orderdetailDelivery.lastname  =  orderDetail_test.lastname;
		orderdetailDelivery.company =  orderDetail_test.company;
		orderdetailDelivery.address1 =  orderDetail_test.address1;
		orderdetailDelivery.address2 =  orderDetail_test.address2;
		orderdetailDelivery.city = orderDetail_test.city;
		orderdetailDelivery.state =  orderDetail_test.state;
		orderdetailDelivery.country =  orderDetail_test.country;
		orderdetailDelivery.postcode =  orderDetail_test.postcode;
		orderdetailDelivery.phonenumber =  orderDetail_test.phonenumber;
		
		mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		fieldholdertitle = $('<div class="fieldholder">');
		h5 = $('<h5> Customer Information</h5>');
		formrow = $('<div class="formrow">');
		email = $('<div class="col1"><div class="col1position1">Email:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.email+'</div></div>');
		
		billh5 = $('<h5> Billing / Delivery Informations</h5>');
		
		formrow1 = $('<div class="formrow">');
		firstname = $('<div class="col1"> <div class="col1position1">First name:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.firstName+'</div></div>');
		
		formrow2 = $('<div class="formrow">');
		lastname = $('<div class="col1"><div class="col1position1">Last name:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.lastName+'</div></div>');
		
		formrow3 = $('<div class="formrow">');
		company = $('<div class="col1"><div class="col1position1">Company:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.company+'</div></div>');
		
		formrow4 = $('<div class="formrow">');
		address1 = $('<div class="col1"><div class="col1position1">Address1:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.address1+'</div></div>');
		
		formrow5 = $('<div class="formrow">');
		address2 = $('<div class="col1"><div class="col1position1">Address2:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.address2+'</div></div>');
		
		formrow6 = $('<div class="formrow">');
		city = $('<div class="col1"><div class="col1position1">City:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.city+'</div></div>');
		
		formrow7 = $('<div class="formrow">');
		state = $('<div class="col1"><div class="col1position1">State / Province:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.state+'</div></div>');
		
		formrow8 = $('<div class="formrow">');
		country = $('<div class="col1"> <div class="col1position1">Country</div> </div><div class="col2"><div class="col1position2">'+orderDetail_test.country+'</div></div>');
		
		formrow9 = $('<div class="formrow">');
		postcode = $('<div class="col1"><div class="col1position1">Postcode</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.postcode+'</div></div>');
		
		formrow10 = $('<div class="formrow">');
		phonenumber = $('<div class="col1"><div class="col1position1">Phonenumber</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.phonenumber+'</div></div>');
		
		formrow11 = $('<div class="formrow"></div>');
		paymentmethod = $('<h5> Payment Method</h5>');
		
		formrow12 = $('<div class="formrow">');
		subtotal = $('<div class="col1"> <div class="col1position1">Subtotal:</div> </div><div class="col2"><div class="col1position2">1212121212</div></div>');
		
		formrow13 = $('<div class="formrow">');
		ordertotal = $('<div class="col1"><div class="col1position1">Payment method:</div></div><div class="col2"><div class="col1position2">Cheque</div></div>');
		
		formrow14 = $('<div class="formrow">');
		mailto = $('<div class="col1"><div class="col1position1">Mail to:</div> </div><div class="col2"><div class="col1position2">Phresco</div></div>');
		
		formrow15 = $('<div class="formrow"></div>');
		ordercomment = $('<h5> Order Comments</h5>');
		
		formrow16 = $('<div class="formrow">');
		comment = $('<div class="col_comments">'+orderDetail_test.comments+'</div>');

		buttonposition2 = $('<div class="buttonposition2">');
		backbtn = $('<input type="submit" value="Back" class="buttonstyle"/>');
		submitbtn = $('<input type="submit" value="Submit Order" class="buttonstyle"/></div>');

        formrow.append(email);  
		formrow1.append(firstname);
		formrow2.append(lastname);
		formrow3.append(company);
		formrow4.append(address1);
		formrow5.append(address2);
		formrow6.append(city);
		formrow7.append(state);
		formrow8.append(country);
		formrow9.append(postcode);
		formrow10.append(phonenumber);
		formrow12.append(subtotal);
		formrow13.append(ordertotal);
		formrow14.append(mailto);
		formrow15.append(ordercomment);
		formrow16.append(comment);
		
		buttonposition2.append(backbtn);
		buttonposition2.append(submitbtn);
		
		fieldholdertitle.append(h5);
		fieldholdertitle.append(formrow);
		fieldholdertitle.append(billh5);
		fieldholdertitle.append(formrow1);
		fieldholdertitle.append(formrow2);
		fieldholdertitle.append(formrow3);
		fieldholdertitle.append(formrow4);
		fieldholdertitle.append(formrow5);
		fieldholdertitle.append(formrow6);
		fieldholdertitle.append(formrow7);
		fieldholdertitle.append(formrow8);
		fieldholdertitle.append(formrow9);
		fieldholdertitle.append(formrow10);
		fieldholdertitle.append(formrow11); 
		fieldholdertitle.append(paymentmethod);
		fieldholdertitle.append(formrow12);
		fieldholdertitle.append(formrow13);
		fieldholdertitle.append(formrow14);
		fieldholdertitle.append(formrow15);
		fieldholdertitle.append(ordercomment);
		fieldholdertitle.append(formrow16);
		fieldholdertitle.append(buttonposition2);
		productContainer.append(fieldholdertitle);
 
		mainContent.append(topH3);  
		mainContent.append(productContainer);
		output2 = mainContent;
		
		equal(output1.html(), output2.html(), "Test order form view with similar data - test passed");
	
	});
	
	test("Test order form view with different data", function() {
		var orderFormView, buttonposition2, comment, phresco, output1, phrescoapi, orderDetail = {}, orderDetail_test = {}, mainContent, topH3, productContainer, fieldholdertitle, h5, formrow, email, billh5, formrow1, formrow2, formrow3, formrow4, formrow5, formrow6, formrow7, formrow8, formrow9, formrow10, formrow11, formrow12, formrow13, formrow14, formrow15, formrow16, firstname, lastname, company, address1, address2, city, state, country, postcode, phonenumber, paymentmethod, subtotal, ordertotal, mailto, ordercomment, backbtn, submitbtn, orderdetailDelivery;
	
		orderFormView = new OrderFormView();
		phrescoapi = new Phresco();
		orderFormView.phrescoapi = phrescoapi;
		
		orderDetail = {email:"ss@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", comments:"nice"};
		
		orderFormView.phrescoapi.orderDetail = orderDetail;
		output1 = orderFormView.testRenderUI();
		
		orderDetail_test = {email:"sathish@gmail.com", firstName:"sathish", lastName:"sa", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"2344", phonenumber:"34454565", comments:"nice"};
		
		orderdetailDelivery = {};
		orderdetailDelivery.email = orderDetail_test.email;
		orderdetailDelivery.firstname = orderDetail_test.firstname;
		orderdetailDelivery.lastname  =  orderDetail_test.lastname;
		orderdetailDelivery.company =  orderDetail_test.company;
		orderdetailDelivery.address1 =  orderDetail_test.address1;
		orderdetailDelivery.address2 =  orderDetail_test.address2;
		orderdetailDelivery.city = orderDetail_test.city;
		orderdetailDelivery.state =  orderDetail_test.state;
		orderdetailDelivery.country =  orderDetail_test.country;
		orderdetailDelivery.postcode =  orderDetail_test.postcode;
		orderdetailDelivery.phonenumber =  orderDetail_test.phonenumber;
		
		mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		fieldholdertitle = $('<div class="fieldholder">');
		h5 = $('<h5> Customer Information</h5>');
		formrow = $('<div class="formrow">');
		email = $('<div class="col1"><div class="col1position1">Email:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.email+'</div></div>');
		
		billh5 = $('<h5> Billing / Delivery Informations</h5>');
		
		formrow1 = $('<div class="formrow">');
		firstname = $('<div class="col1"> <div class="col1position1">First name:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.firstName+'</div></div>');
		
		formrow2 = $('<div class="formrow">');
		lastname = $('<div class="col1"><div class="col1position1">Last name:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.lastName+'</div></div>');
		
		formrow3 = $('<div class="formrow">');
		company = $('<div class="col1"><div class="col1position1">Company:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.company+'</div></div>');
		
		formrow4 = $('<div class="formrow">');
		address1 = $('<div class="col1"><div class="col1position1">Address1:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.address1+'</div></div>');
		
		formrow5 = $('<div class="formrow">');
		address2 = $('<div class="col1"><div class="col1position1">Address2:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.address2+'</div></div>');
		
		formrow6 = $('<div class="formrow">');
		city = $('<div class="col1"><div class="col1position1">City:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.city+'</div></div>');
		
		formrow7 = $('<div class="formrow">');
		state = $('<div class="col1"><div class="col1position1">State / Province:</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.state+'</div></div>');
		
		formrow8 = $('<div class="formrow">');
		country = $('<div class="col1"> <div class="col1position1">Country</div> </div><div class="col2"><div class="col1position2">'+orderDetail_test.country+'</div></div>');
		
		formrow9 = $('<div class="formrow">');
		postcode = $('<div class="col1"><div class="col1position1">Postcode</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.postcode+'</div></div>');
		
		formrow10 = $('<div class="formrow">');
		phonenumber = $('<div class="col1"><div class="col1position1">Phonenumber</div></div><div class="col2"><div class="col1position2">'+orderDetail_test.phonenumber+'</div></div>');
		
		formrow11 = $('<div class="formrow"></div>');
		paymentmethod = $('<h5> Payment Method</h5>');
		
		formrow12 = $('<div class="formrow">');
		subtotal = $('<div class="col1"> <div class="col1position1">Subtotal:</div> </div><div class="col2"><div class="col1position2">1212121212</div></div>');
		
		formrow13 = $('<div class="formrow">');
		ordertotal = $('<div class="col1"><div class="col1position1">Payment method:</div></div><div class="col2"><div class="col1position2">Cheque</div></div>');
		
		formrow14 = $('<div class="formrow">');
		mailto = $('<div class="col1"><div class="col1position1">Mail to:</div> </div><div class="col2"><div class="col1position2">Phresco</div></div>');
		
		formrow15 = $('<div class="formrow"></div>');
		ordercomment = $('<h5> Order Comments</h5>');
		
		formrow16 = $('<div class="formrow">');
		comment = $('<div class="col_comments">'+orderDetail_test.comments+'</div>');

		buttonposition2 = $('<div class="buttonposition2">');
		backbtn = $('<input type="submit" value="Back" class="buttonstyle"/>');
		submitbtn = $('<input type="submit" value="Submit Order" class="buttonstyle"/></div>');

        formrow.append(email);  
		formrow1.append(firstname);
		formrow2.append(lastname);
		formrow3.append(company);
		formrow4.append(address1);
		formrow5.append(address2);
		formrow6.append(city);
		formrow7.append(state);
		formrow8.append(country);
		formrow9.append(postcode);
		formrow10.append(phonenumber);
		formrow12.append(subtotal);
		formrow13.append(ordertotal);
		formrow14.append(mailto);
		formrow15.append(ordercomment);
		formrow16.append(comment);
		
		buttonposition2.append(backbtn);
		buttonposition2.append(submitbtn);
		
		fieldholdertitle.append(h5);
		fieldholdertitle.append(formrow);
		fieldholdertitle.append(billh5);
		fieldholdertitle.append(formrow1);
		fieldholdertitle.append(formrow2);
		fieldholdertitle.append(formrow3);
		fieldholdertitle.append(formrow4);
		fieldholdertitle.append(formrow5);
		fieldholdertitle.append(formrow6);
		fieldholdertitle.append(formrow7);
		fieldholdertitle.append(formrow8);
		fieldholdertitle.append(formrow9);
		fieldholdertitle.append(formrow10);
		fieldholdertitle.append(formrow11); 
		fieldholdertitle.append(paymentmethod);
		fieldholdertitle.append(formrow12);
		fieldholdertitle.append(formrow13);
		fieldholdertitle.append(formrow14);
		fieldholdertitle.append(formrow15);
		fieldholdertitle.append(ordercomment);
		fieldholdertitle.append(formrow16);
		fieldholdertitle.append(buttonposition2);
		productContainer.append(fieldholdertitle);
 
		mainContent.append(topH3);  
		mainContent.append(productContainer);
		output2 = mainContent;
		
		notEqual(output1.html(), output2.html(), "Test order form view with different data - test passed");
	
	});
});