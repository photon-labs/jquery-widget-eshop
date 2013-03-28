/*global require */

require([ "jquery", "eshop/widgets/OrderForm", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, OrderForm, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testOrderFormSuccess = QUnit.test, testOrderFormWithDiffData = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the OrderForm-widget
	 */
	 module("OrderForm.js;OrderForm");
	test("Test order form with similar data", function() {
		
		var orderForm, orderDetail = {}, orderDetail1 = {}, pricequantity = {}, phrescoapi, emailbk, firstNamebk, lastNamebk, companybk, address1bk, address2bk, citybk, statebk, countrybk, 
		postcodebk, phonenumberbk, cardnumberbk, securitynumberbk, nameoncardbk, commentsbk, topH3, 
		productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, productArray, 
		fieldholder4, textarea, buttons, button1, button2, productContainer, self = this, output1, output2, mainContent, email;
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"sathish@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", cardnumber:"84700", securitynumber:"34543", nameoncard:"sathish", comments:"nice"};
		
		productArray = [{image : "product/coby_tv_4.png",name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500},{image : "product/coby_tv_4.png",name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500}];
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.productArray = productArray;
		output1 = orderForm.testRenderUI();
		
		orderDetail1 = {email:"sathish@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", cardnumber:"84700", securitynumber:"34543", nameoncard:"sathish", comments:"nice"};
		
		if(!$.isEmptyObject(orderDetail1)){
			emailbk = orderDetail1.email;
			firstNamebk = orderDetail1.firstName;
			lastNamebk  = orderDetail1.lastName;
			companybk = orderDetail1.company;
			address1bk = orderDetail1.address1;
			address2bk = orderDetail1.address2;
			citybk = orderDetail1.city;
			statebk = orderDetail1.state;
			countrybk = orderDetail1.country;
			postcodebk = orderDetail1.postcode;
			phonenumberbk = orderDetail1.phonenumber;
			cardnumberbk = orderDetail1.cardnumber;
			securitynumberbk = orderDetail1.securitynumber;
			nameoncardbk = orderDetail1.nameoncard;
			commentsbk = orderDetail1.comments;
		}
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		firstNamebk = (firstNamebk !== undefined)?orderDetail1.firstName : "";
		lastNamebk = (lastNamebk !== undefined)?orderDetail1.lastName : "";
		companybk = (companybk !== undefined)?orderDetail1.company : "";
		address1bk = (address1bk !== undefined)?orderDetail1.address1 : "";
		address2bk = (address2bk !== undefined)?orderDetail1.address2 : "";
		citybk = (citybk !== undefined)?orderDetail1.city : "";
		statebk = (statebk !== undefined)?orderDetail1.state : "";
		countrybk = (countrybk !== undefined)?orderDetail1.country : "";
		postcodebk = (postcodebk !== undefined)?orderDetail1.postcode : "";
		phonenumberbk = (phonenumberbk !== undefined)?orderDetail1.phonenumber : "";
		cardnumberbk = (cardnumberbk !== undefined)?orderDetail1.cardnumber : "";
		securitynumberbk = (securitynumberbk !== undefined)?orderDetail1.securitynumber : "";
		nameoncardbk = (nameoncardbk !== undefined)?orderDetail1.nameoncard : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

        mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		form = $('<form id="contact" method="post" action="product_order_view_form.html">');
		h5 = $('<h5> Customer Information</h5>');
		fieldholder1 = $('<div class="fieldholder1">');
		email = $('<fieldset><div id="email_err_div" class="clearfix"><label for="Email"><span>Email *</span><input type="text" name="email" id="email" placeholder="Email" class="required email" value="'+ emailbk +'" /></label><span class="help-inline" id="email_err"></span></div></fieldset>');
		billh5 = $('<h5> Billing / Delivery Informations</h5>');
		fieldholder2 = $('<div class="fieldholder2">');
		fieldset = $('<fieldset>');
		firstname = $('<div id="firstName_err_div" class="clearfix" ><label for="FirstName"> <span>FirstName *</span><input type="text" name="firstName"  id="firstName" placeholder="Firstname" class="required firstName" value="'+ firstNamebk +'"/></label><span class="help-inline" id="firstName_err" ></span></div>');
		lastname = $('<div id="lastName_err_div" class="clearfix"><label for="Lastname"> <span>Lastname *</span><input type="text" name="lastName" id="lastName" placeholder="Lastname" class="required lastName" value="'+ lastNamebk +'" /></label><span class="help-inline" id="lastName_err"></span></div>');
		company = $('<div id="company_err_div" class="clearfix"><label for="Company"> <span>Company *</span><input type="text" name="company" id="company" placeholder="Company" class="required company" value="'+ companybk +'" /></label><span class="help-inline" id="company_err"></span></div>');
		address1 = $('<div id="address1_err_div" class="clearfix"><label for="Address1"> <span>Address1 *</span><input type="text" name="address1" id="address1" placeholder="Address1" class="required address1" value="'+ address1bk +'" /></label><span class="help-inline" id="address1_err"></span></div>');
		address2 = $('<div id="address2_err_div" class="clearfix"><label for="Address2"> <span>Address2 *</span><input type="text" name="address2" id="address2" placeholder="Address2" class="required address2" value="'+ address2bk +'" /></label><span class="help-inline" id="address2_err"></span></div>');
		city = $('<div id="city_err_div" class="clearfix"><label for="City"> <span>City *</span><input type="text" name="City" id="city" placeholder="city" class="required city" value="'+ citybk +'"/></label><span class="help-inline" id="city_err"></span></div>');
		state = $('<div id="state_err_div" class="clearfix"><label for="State"> <span>State *</span><input type="text" name="State" id="state" placeholder="state" class="required state" value="'+ statebk +'"/></label><span class="help-inline" id="state_err"></span></div>');
		country = $('<label for="Country"><span >Country</span><select  size="1" id="country" ><option value="USA">USA</option><option value="India">India</option> <option value="Australia">Australia</option></select></label>');
		postcode = $('<div id="postCode_err_div" class="clearfix"><label for="Postcode"><span>Postcode *</span><input type="text" name="postCode" id="postCode" placeholder="postcode" class="required postcode" value="'+ postcodebk +'"  /></label><span class="help-inline" id="postCode_err"></span></div>');
		phonenumber = $('<div id="phoneNumber_err_div" class="clearfix"><label for="Phonenumber"> <span>Phonenumber *</span><input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phonenumber" class="required phonenumber" value="'+ phonenumberbk +'" /></label><span class="help-inline" id="phoneNumber_err"></span></div>');
        
        fieldholder1.append(email);     
		fieldset.append(firstname);
		fieldset.append(lastname);
		fieldset.append(company);
		fieldset.append(address1);
		fieldset.append(address2);
		fieldset.append(city);
		fieldset.append(state);
		fieldset.append(country);
		fieldset.append(postcode);
		fieldset.append(phonenumber);
		fieldholder2.append(fieldset);
		form.append(h5);
		form.append(fieldholder1);
		form.append(billh5);
		form.append(fieldholder2);
		productContainer.append(form);
		billh5 = $('<h5>Payment Method</h5>');
		fieldholder3 = $('<div class="fieldholder3">');
		fieldsetpaymentoption = $('<fieldset>');   
		h6 = $('<h6>Select a payment method from the following options</h6>');
		paymentpos = $('<div class="payment_pos">');
		visacard1 = $('<div><label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod" checked="checked">VISA CARD</label></div>');
		visacard2 = $('div><label class="paymentmethod"><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">AMX CARD</label></div>');
		visacard3 = $('<div><label class="paymentmethod"><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">MASTER CARD</label></div>');
		paymentpos.append(visacard1);
		paymentpos.append(visacard2);
		paymentpos.append(visacard3);
		fieldsetpaymentoption.append(h6);
		fieldsetpaymentoption.append(paymentpos);
		fieldholder3.append(fieldsetpaymentoption);	

		carddetails = $('<div class="carddetails">');
		fieldsetpayment = $('<fieldset>');   
		payment1 = $('<div id="cardNumber_err_div" class="clearfix"><label for="Card Number"> <span>Card Number *</span><input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" class="required cardnumber" value="'+ cardnumberbk +'" /></label><span class="help-inline" id="cardNumber_err"></span></div>');
		payment2 = $('<div id="securityNumber_err_div" class="clearfix"><label for="Security Number"> <span>Security Code  *</span><input type="password" name="securityNumber" id="securityNumber" placeholder="Security Number" value="'+ securitynumberbk +'" class="required securitynumber"  /></label><span class="help-inline" id="securityNumber_err"></span></div>');
		payment3 = $('<div id="nameOnCard_err_div" class="clearfix"><label for="Name on card"> <span>Name on card *</span><input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name On Card" class="required nameoncard" value="'+ nameoncardbk +'" /></label><span class="help-inline" id="nameOnCard_err"></span></div>');
		fieldsetpayment.append(payment1);
		fieldsetpayment.append(payment2);
		fieldsetpayment.append(payment3);
		carddetails.append(fieldsetpayment);
		
		pricetag = $('<div align="center" class="pricetag">'); 
		priceblock = $('<div class="priceblock">');
        pricecount = phrescoapi.priceCount();
		subtotal = $('<div class="subtotal"><span>Sub Total:</span> <span>$'+pricecount.totalPrice+'</span> </div>');
		ordertotal = $('<div class="ordertotal"> <span>Order Total:</span> <span>$'+pricecount.totalPrice+'</span> </div>');
		priceblock.append(subtotal);
		priceblock.append(ordertotal);
		pricetag.append(priceblock);
		
		hint = $('<p class="hint">Cheque should be made to Phresco</p>');
		ordercomments = $('<h5> Order Comments</h5>');
		fieldholder4 = $('<div class="fieldholder4">');
		textarea = $('<fieldset><textarea name="comments" id="comments" cols="6" rows="5" placeholder="Your suggestion and comments">'+commentsbk+'</textarea></fieldset>'); 
		fieldholder4.append(textarea);
		buttons = $('<div class="buttonposition">');
		button1 = $('<input type="submit" value="Review Order" class="buttonstyle" />');

		button2 = $('<input type="submit" value="Cancel" class="buttonstyle"/>'); 
		buttons.append(button1);
		buttons.append(button2);

		productContainer.append(billh5);
		productContainer.append(fieldholder3);
		productContainer.append(carddetails);
		productContainer.append(pricetag);
		productContainer.append(hint);
		productContainer.append(ordercomments);
		productContainer.append(fieldholder4);
		productContainer.append(buttons);

		mainContent.append(topH3);  
		mainContent.append(productContainer);
		output2 = mainContent; 
		equal(output1.html(), output2.html(), "Test order form with similar data - test passed");
	});
	
	test("Test order form with different data", function() {
		
		var orderForm, orderDetail = {}, orderDetail1 = {}, pricequantity = {}, phrescoapi, emailbk, firstNamebk, lastNamebk, companybk, address1bk, address2bk, citybk, statebk, countrybk, 
		postcodebk, phonenumberbk, cardnumberbk, securitynumberbk, nameoncardbk, commentsbk, topH3, 
		productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, productArray, 
		fieldholder4, textarea, buttons, button1, button2, productContainer, self = this, output1, output2, mainContent, email;
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"sathish@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", cardnumber:"84700", securitynumber:"34543", nameoncard:"sathish", comments:"bad"};
		
		productArray = [{image : "product/coby_tv_4.png",name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500},{image : "product/coby_tv_4.png",name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500}];
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.productArray = productArray;
		output1 = orderForm.testRenderUI();
		
		orderDetail1 = {email:"ss@gmail.com", firstName:"sathish", lastName:"s", company:"sony", address1:"salem", address2:"chennai", city:"salem", state:"tamilnadu", country:"india", postcode:"3045", phonenumber:"05703479", cardnumber:"84700", securitynumber:"34543", nameoncard:"sathish", comments:"nice"};
		
		if(!$.isEmptyObject(orderDetail1)){
			emailbk = orderDetail1.email;
			firstNamebk = orderDetail1.firstName;
			lastNamebk  = orderDetail1.lastName;
			companybk = orderDetail1.company;
			address1bk = orderDetail1.address1;
			address2bk = orderDetail1.address2;
			citybk = orderDetail1.city;
			statebk = orderDetail1.state;
			countrybk = orderDetail1.country;
			postcodebk = orderDetail1.postcode;
			phonenumberbk = orderDetail1.phonenumber;
			cardnumberbk = orderDetail1.cardnumber;
			securitynumberbk = orderDetail1.securitynumber;
			nameoncardbk = orderDetail1.nameoncard;
			commentsbk = orderDetail1.comments;
		}
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		firstNamebk = (firstNamebk !== undefined)?orderDetail1.firstName : "";
		lastNamebk = (lastNamebk !== undefined)?orderDetail1.lastName : "";
		companybk = (companybk !== undefined)?orderDetail1.company : "";
		address1bk = (address1bk !== undefined)?orderDetail1.address1 : "";
		address2bk = (address2bk !== undefined)?orderDetail1.address2 : "";
		citybk = (citybk !== undefined)?orderDetail1.city : "";
		statebk = (statebk !== undefined)?orderDetail1.state : "";
		countrybk = (countrybk !== undefined)?orderDetail1.country : "";
		postcodebk = (postcodebk !== undefined)?orderDetail1.postcode : "";
		phonenumberbk = (phonenumberbk !== undefined)?orderDetail1.phonenumber : "";
		cardnumberbk = (cardnumberbk !== undefined)?orderDetail1.cardnumber : "";
		securitynumberbk = (securitynumberbk !== undefined)?orderDetail1.securitynumber : "";
		nameoncardbk = (nameoncardbk !== undefined)?orderDetail1.nameoncard : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

        mainContent = $('<div></div>');
        topH3 = $('<h3> Computers</h3>');
        productContainer = $('<div class="productcontainer">');
		form = $('<form id="contact" method="post" action="product_order_view_form.html">');
		h5 = $('<h5> Customer Information</h5>');
		fieldholder1 = $('<div class="fieldholder1">');
		email = $('<fieldset><div id="email_err_div" class="clearfix"><label for="Email"><span>Email *</span><input type="text" name="email" id="email" placeholder="Email" class="required email" value="'+ emailbk +'" /></label><span class="help-inline" id="email_err"></span></div></fieldset>');
		billh5 = $('<h5> Billing / Delivery Informations</h5>');
		fieldholder2 = $('<div class="fieldholder2">');
		fieldset = $('<fieldset>');
		firstname = $('<div id="firstName_err_div" class="clearfix" ><label for="FirstName"> <span>FirstName *</span><input type="text" name="firstName"  id="firstName" placeholder="Firstname" class="required firstName" value="'+ firstNamebk +'"/></label><span class="help-inline" id="firstName_err" ></span></div>');
		lastname = $('<div id="lastName_err_div" class="clearfix"><label for="Lastname"> <span>Lastname *</span><input type="text" name="lastName" id="lastName" placeholder="Lastname" class="required lastName" value="'+ lastNamebk +'" /></label><span class="help-inline" id="lastName_err"></span></div>');
		company = $('<div id="company_err_div" class="clearfix"><label for="Company"> <span>Company *</span><input type="text" name="company" id="company" placeholder="Company" class="required company" value="'+ companybk +'" /></label><span class="help-inline" id="company_err"></span></div>');
		address1 = $('<div id="address1_err_div" class="clearfix"><label for="Address1"> <span>Address1 *</span><input type="text" name="address1" id="address1" placeholder="Address1" class="required address1" value="'+ address1bk +'" /></label><span class="help-inline" id="address1_err"></span></div>');
		address2 = $('<div id="address2_err_div" class="clearfix"><label for="Address2"> <span>Address2 *</span><input type="text" name="address2" id="address2" placeholder="Address2" class="required address2" value="'+ address2bk +'" /></label><span class="help-inline" id="address2_err"></span></div>');
		city = $('<div id="city_err_div" class="clearfix"><label for="City"> <span>City *</span><input type="text" name="City" id="city" placeholder="city" class="required city" value="'+ citybk +'"/></label><span class="help-inline" id="city_err"></span></div>');
		state = $('<div id="state_err_div" class="clearfix"><label for="State"> <span>State *</span><input type="text" name="State" id="state" placeholder="state" class="required state" value="'+ statebk +'"/></label><span class="help-inline" id="state_err"></span></div>');
		country = $('<label for="Country"><span >Country</span><select  size="1" id="country" ><option value="USA">USA</option><option value="India">India</option> <option value="Australia">Australia</option></select></label>');
		postcode = $('<div id="postCode_err_div" class="clearfix"><label for="Postcode"><span>Postcode *</span><input type="text" name="postCode" id="postCode" placeholder="postcode" class="required postcode" value="'+ postcodebk +'"  /></label><span class="help-inline" id="postCode_err"></span></div>');
		phonenumber = $('<div id="phoneNumber_err_div" class="clearfix"><label for="Phonenumber"> <span>Phonenumber *</span><input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phonenumber" class="required phonenumber" value="'+ phonenumberbk +'" /></label><span class="help-inline" id="phoneNumber_err"></span></div>');
        
        fieldholder1.append(email);     
		fieldset.append(firstname);
		fieldset.append(lastname);
		fieldset.append(company);
		fieldset.append(address1);
		fieldset.append(address2);
		fieldset.append(city);
		fieldset.append(state);
		fieldset.append(country);
		fieldset.append(postcode);
		fieldset.append(phonenumber);
		fieldholder2.append(fieldset);
		form.append(h5);
		form.append(fieldholder1);
		form.append(billh5);
		form.append(fieldholder2);
		productContainer.append(form);
		billh5 = $('<h5>Payment Method</h5>');
		fieldholder3 = $('<div class="fieldholder3">');
		fieldsetpaymentoption = $('<fieldset>');   
		h6 = $('<h6>Select a payment method from the following options</h6>');
		paymentpos = $('<div class="payment_pos">');
		visacard1 = $('<div><label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod" checked="checked">VISA CARD</label></div>');
		visacard2 = $('div><label class="paymentmethod"><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">AMX CARD</label></div>');
		visacard3 = $('<div><label class="paymentmethod"><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">MASTER CARD</label></div>');
		paymentpos.append(visacard1);
		paymentpos.append(visacard2);
		paymentpos.append(visacard3);
		fieldsetpaymentoption.append(h6);
		fieldsetpaymentoption.append(paymentpos);
		fieldholder3.append(fieldsetpaymentoption);	

		carddetails = $('<div class="carddetails">');
		fieldsetpayment = $('<fieldset>');   
		payment1 = $('<div id="cardNumber_err_div" class="clearfix"><label for="Card Number"> <span>Card Number *</span><input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" class="required cardnumber" value="'+ cardnumberbk +'" /></label><span class="help-inline" id="cardNumber_err"></span></div>');
		payment2 = $('<div id="securityNumber_err_div" class="clearfix"><label for="Security Number"> <span>Security Code  *</span><input type="password" name="securityNumber" id="securityNumber" placeholder="Security Number" value="'+ securitynumberbk +'" class="required securitynumber"  /></label><span class="help-inline" id="securityNumber_err"></span></div>');
		payment3 = $('<div id="nameOnCard_err_div" class="clearfix"><label for="Name on card"> <span>Name on card *</span><input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name On Card" class="required nameoncard" value="'+ nameoncardbk +'" /></label><span class="help-inline" id="nameOnCard_err"></span></div>');
		fieldsetpayment.append(payment1);
		fieldsetpayment.append(payment2);
		fieldsetpayment.append(payment3);
		carddetails.append(fieldsetpayment);
		
		pricetag = $('<div align="center" class="pricetag">'); 
		priceblock = $('<div class="priceblock">');
        pricecount = phrescoapi.priceCount();
		subtotal = $('<div class="subtotal"><span>Sub Total:</span> <span>$'+pricecount.totalPrice+'</span> </div>');
		ordertotal = $('<div class="ordertotal"> <span>Order Total:</span> <span>$'+pricecount.totalPrice+'</span> </div>');
		priceblock.append(subtotal);
		priceblock.append(ordertotal);
		pricetag.append(priceblock);
		
		hint = $('<p class="hint">Cheque should be made to Phresco</p>');
		ordercomments = $('<h5> Order Comments</h5>');
		fieldholder4 = $('<div class="fieldholder4">');
		textarea = $('<fieldset><textarea name="comments" id="comments" cols="6" rows="5" placeholder="Your suggestion and comments">'+commentsbk+'</textarea></fieldset>'); 
		fieldholder4.append(textarea);
		buttons = $('<div class="buttonposition">');
		button1 = $('<input type="submit" value="Review Order" class="buttonstyle" />');

		button2 = $('<input type="submit" value="Cancel" class="buttonstyle"/>'); 
		buttons.append(button1);
		buttons.append(button2);

		productContainer.append(billh5);
		productContainer.append(fieldholder3);
		productContainer.append(carddetails);
		productContainer.append(pricetag);
		productContainer.append(hint);
		productContainer.append(ordercomments);
		productContainer.append(fieldholder4);
		productContainer.append(buttons);

		mainContent.append(topH3);  
		mainContent.append(productContainer);
		output2 = mainContent; 
		
		notEqual(output1.html(), output2.html(), "Test OrderForm with different data - test passed");
	});
});