/*global require */

require(  [ "jquery", "eshop/widgets/ShoppingCart", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco", "eshop/widgets/WSConfig"], function($, ShoppingCart, EShopAPI, Phresco, WSConfig) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, wsconfig, expect = QUnit.expect, test = QUnit.test, testShoppingCartWithDiffProdSet = QUnit.test, testShoppingCartWithDiffData = QUnit.test, testShoppingCartSuccess = QUnit.test, testShoppingCartFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the shoppingcart-widget
	 */
	 module("ShoppingCart.js;ShoppingCart");
	asyncTest("Test Shopping cart", function() {
		
		var shoppingcart, shoppingcard_data = {}, productArray = [], mainContent, topH3, productContainer, backHref, shoppingCarth5,
		checkoutcol1Div, productsDiv, checkoutcol2Div, quantityDiv, checkoutcol3Div, amountDiv, checkoutcol4, removeDiv, 
		remProductId, checkoutrow2, checkoutvaluecol1, co_col1position1, co_product_image, subtotalAmount,
		co_product_description, checkoutvaluecol2, checkoutvaluecol3, checkoutvaluecol4, data, clear1, subtotal, subtotal1, clear2, buttons, button1, button2, event, j, i, self = this, api, phrescoapi, output1, output2, wsURL;
		
		shoppingcard_data = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		productArray = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		
		
		shoppingcart = new  ShoppingCart();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(data){
			wsURL = data;
			api = new EShopAPI();
			api.initialize(wsURL); 
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			mainContent = $('<div></div>');
			topH3 = $('<h3>product Checkout</h3>');
			productContainer = $('<div class="productcontainer">');
			backHref = $('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
			shoppingCarth5 = $('<h5> My Shopping Cart</h5>');
			checkoutcol1Div = $('<div class="checkoutcol1"> ');
			productsDiv = $('<div class="co_col1position1">Products</div> ');
			checkoutcol1Div.append(productsDiv);
			checkoutcol2Div = $(' <div class="checkoutcol2">');
			quantityDiv = $('<div class="co_col1position2">Quantity</div> ');
			checkoutcol2Div.append(quantityDiv);
			checkoutcol3Div = $(' <div class="checkoutcol3">');
			amountDiv = $('<div class="co_col1position2">Total Amount</div> ');
			checkoutcol3Div.append(amountDiv);
			checkoutcol4 = $(' <div class="checkoutcol4">');
			removeDiv = $('<div class="co_col1position2">Remove Item</div> ');
			checkoutcol4.append(removeDiv);
			productContainer.append(backHref);
			productContainer.append(shoppingCarth5);
			productContainer.append(checkoutcol1Div);
			productContainer.append(checkoutcol2Div);
			productContainer.append(checkoutcol3Div);
			productContainer.append(checkoutcol4);
			
			if(shoppingcard_data !== undefined && shoppingcard_data !== null){

				for (j = 0; j < shoppingcard_data.length; j++) {

					remProductId = shoppingcard_data[j].productId;
					checkoutrow2= $('<div class="chectoutrow2">');
					checkoutvaluecol1= $('<div class="checkoutvaluecol1">'); 
					co_col1position1= $('<div class="co_col1position1">');
					co_product_image= $('<div class="co_product_image"><img src="' + api.wsURLWithoutContext + 'eshop/images/web/' + shoppingcard_data[j].image + '" width="120" height="120" alt="' + api.wsURLWithoutContext + 'eshop/images/web/' + shoppingcard_data[j].image + '"></div>');
					co_product_description= $('<div class="co_product_description">' + shoppingcard_data[j].name + '</div>');
					co_col1position1.append(co_product_image);
					co_col1position1.append(co_product_description);
					checkoutvaluecol1.append(co_col1position1);
					subtotal = shoppingcard_data[j].price;
					
					data = {};
					data.productId = shoppingcard_data[j].productId;
					data.singlePrice = shoppingcard_data[j].price;

					checkoutvaluecol2 = $('<div class="checkoutvaluecol2"><div class="co_col1position2"><div class="co_input"><input type="text" value="' + shoppingcard_data[j].quantity + '" name="productQuantity" id="productQuantity" size="3" maxlength="2" style="width:40px" /></div></div></div>');
					checkoutvaluecol3 = $('<div class="checkoutvaluecol3"><div class="co_col1position2"><div class="co_input"><span id="totalAmount_' + data.productId + '">' + (shoppingcard_data[j].quantity * subtotal) +'</span></div></div></div>');  
					checkoutvaluecol4 = $('<div class="checkoutvaluecol4"><div class="co_col1position2"><input type="submit" value="Remove" class="remove_buttonstyle"/></div></div>');  

					checkoutrow2.append(checkoutvaluecol1);
					checkoutrow2.append(checkoutvaluecol2);
					checkoutrow2.append(checkoutvaluecol3);
					checkoutrow2.append(checkoutvaluecol4);
					productContainer.append(checkoutrow2);
				}

				clear1 = $('<div class="clear"></div>');
				subtotal1 = $('<div class="subtotal_pos">SubTotal: $'+ shoppingcart.totalCalc(shoppingcard_data) +'</div>'); 
				clear2 = $('<div class="clear"></div>'); 
				buttons = $('<div class="checkout_buttonposition2">');
				button1 = $('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');
				button2 = $('<input type="submit" value="Check Out" class="checkout_buttonstyle" />');

				subtotalAmount = subtotal1;
				event = {};

				if (self.listener !== null && self.listener !== undefined) {
					self.listener.publish(event,"MyCart",[self.phrescoapi.productArray]);
				}
				buttons.append(button1);
				buttons.append(button2);
				productContainer.append(clear1);
				productContainer.append(subtotal1);
				productContainer.append(clear2);
				if(shoppingcard_data.length !== 0){
					productContainer.append(buttons);
				}
			}
			
			shoppingcart.totalCalc = function(shoppingcard_data){
				var totalAmount =0, i;

				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;	
			};
									   
			mainContent.append(topH3);  
			mainContent.append(productContainer);
			output2 = mainContent;
		});
		
		setTimeout (function(){
			start();
			notEqual(output1.html(), output2.html(), "Test Shopping cart - Test case passed"); 
		}, 1000);
		
	});
	
	asyncTest("Test Shopping cart - mismatch case", function() {
		
		var shoppingcart, shoppingcard_data = {}, productArray = [], mainContent, topH3, productContainer, backHref, shoppingCarth5,
		checkoutcol1Div, productsDiv, checkoutcol2Div, quantityDiv, checkoutcol3Div, amountDiv, checkoutcol4, removeDiv, 
		remProductId, checkoutrow2, checkoutvaluecol1, co_col1position1, co_product_image, subtotalAmount,
		co_product_description, checkoutvaluecol2, checkoutvaluecol3, checkoutvaluecol4, data, clear1, subtotal, subtotal1, clear2, buttons, button1, button2, event, j, i, self = this, api, phrescoapi, output1, output2;
		
		shoppingcard_data = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		productArray = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		
		
		shoppingcart = new  ShoppingCart();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		//api.wsURL = wsconfig.WSConfigurl;
		wsconfig.getEnvironment(function(data){
			api.wsURL = data;
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;

			output1 = shoppingcart.testRenderUI();
			
			mainContent = $('<div></div>');
			topH3 = $('<h3>product Checkout</h3>');
			productContainer = $('<div class="productcontainer">');
			backHref = $('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
			shoppingCarth5 = $('<h5> My Shopping Cart</h5>');
			checkoutcol1Div = $('<div class="checkoutcol1"> ');
			productsDiv = $('<div class="co_col1position1">Products</div> ');
			checkoutcol1Div.append(productsDiv);
			checkoutcol2Div = $(' <div class="checkoutcol2">');
			quantityDiv = $('<div class="co_col1position2">Quantity</div> ');
			checkoutcol2Div.append(quantityDiv);
			checkoutcol3Div = $(' <div class="checkoutcol3">');
			amountDiv = $('<div class="co_col1position2">Total Amount</div> ');
			checkoutcol3Div.append(amountDiv);
			checkoutcol4 = $(' <div class="checkoutcol4">');
			removeDiv = $('<div class="co_col1position2">Remove Item</div> ');
			checkoutcol4.append(removeDiv);
			productContainer.append(backHref);
			productContainer.append(shoppingCarth5);
			productContainer.append(checkoutcol1Div);
			productContainer.append(checkoutcol2Div);
			productContainer.append(checkoutcol3Div);
			productContainer.append(checkoutcol4);
			if(shoppingcard_data !== undefined && shoppingcard_data !== null){

				for (j = 0; j < 1; j++) {

					remProductId = shoppingcard_data[j].productId;// for removing purpose
					checkoutrow2= $('<div class="chectoutrow2">');
					checkoutvaluecol1= $('<div class="checkoutvaluecol1">'); 
					co_col1position1= $('<div class="co_col1position1">');
					co_product_image= $('<div class="co_product_image"><img src="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '" width="120" height="120" alt="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '"></div>');
					co_product_description= $('<div class="co_product_description">' + shoppingcard_data[j].name + '</div>');
					co_col1position1.append(co_product_image);
					co_col1position1.append(co_product_description);
					checkoutvaluecol1.append(co_col1position1);
					subtotal = shoppingcard_data[j].price;
					
					data = {};
					data.productId = shoppingcard_data[j].productId;
					data.singlePrice = shoppingcard_data[j].price;

					checkoutvaluecol2 = $('<div class="checkoutvaluecol2"><div class="co_col1position2"><div class="co_input"><input type="text" value="' + shoppingcard_data[j].quantity + '" name="productQuantity" id="productQuantity" size="3" maxlength="2" style="width:40px" /></div></div></div>');
					checkoutvaluecol3 = $('<div class="checkoutvaluecol3"><div class="co_col1position2"><div class="co_input"><span id="totalAmount_' + data.productId + '">' + (shoppingcard_data[j].quantity * subtotal) +'</span></div></div></div>');  
					checkoutvaluecol4 = $('<div class="checkoutvaluecol4"><div class="co_col1position2"><input type="submit" value="Remove" class="remove_buttonstyle"/></div></div>');  

					checkoutrow2.append(checkoutvaluecol1);
					checkoutrow2.append(checkoutvaluecol2);
					checkoutrow2.append(checkoutvaluecol3);
					checkoutrow2.append(checkoutvaluecol4);
					productContainer.append(checkoutrow2);
				}

				clear1 = $('<div class="clear"></div>');
				subtotal1 = $('<div class="subtotal_pos">SubTotal: $'+ shoppingcart.totalCalc(shoppingcard_data) +'</div>'); 
				clear2 = $('<div class="clear"></div>'); 
				buttons = $('<div class="checkout_buttonposition2">');
				button1 = $('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');
				button2 = $('<input type="submit" value="Check Out" class="checkout_buttonstyle" />');

				subtotalAmount = subtotal1;
				event = {};

				if (self.listener !== null && self.listener !== undefined) {
					self.listener.publish(event,"MyCart",[self.phrescoapi.productArray]);
				}
				buttons.append(button1);
				buttons.append(button2);
				productContainer.append(clear1);
				productContainer.append(subtotal1);
				productContainer.append(clear2);
				if(shoppingcard_data.length !== 0){
					productContainer.append(buttons);
				}
			}
			
			shoppingcart.totalCalc = function(shoppingcard_data){
				var totalAmount =0, i;

				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;	
			};
									   
			mainContent.append(topH3);  
			mainContent.append(productContainer);
			output2 = mainContent;
			
		});
		
		setTimeout (function(){
			start();
			notEqual(output1.html(), output2.html(), "Test Shopping cart - mismatch case - test passed"); 
		}, 2000);
	});
	
	 asyncTest("Test Shopping cart  with different data", function() {
		
		var shoppingcart, shoppingcard_data = {}, productArray = [], mainContent, topH3, productContainer, backHref, shoppingCarth5,
		checkoutcol1Div, productsDiv, checkoutcol2Div, quantityDiv, checkoutcol3Div, amountDiv, checkoutcol4, removeDiv, 
		remProductId, checkoutrow2, checkoutvaluecol1, co_col1position1, co_product_image, subtotalAmount,
		co_product_description, checkoutvaluecol2, checkoutvaluecol3, checkoutvaluecol4, data, clear1, subtotal, subtotal1, clear2, buttons, button1, button2, event, j, i, self = this, api, phrescoapi, output1, output2;
		
		shoppingcard_data = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		productArray = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
		
		shoppingcart = new  ShoppingCart();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(data){
			api.wsURL = data;
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			shoppingcard_data = [{image : "product/htc_mobile_25.png",name:"HTC Wildfire ", productId : 25, quantity : 1, price: 255},{image : "product/sony_mobile_30.png", name:"Motorola DEFY ", productId : 30, quantity : 1, price: 280}];
			productArray = [{image : "product/htc_mobile_25.png",name:"HTC Wildfire ", productId : 25, quantity : 1, price: 255},{image : "product/sony_mobile_30.png", name:"Motorola DEFY ", productId : 30, quantity : 1, price: 280}];
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			
			mainContent = $('<div></div>');
			topH3 = $('<h3>product Checkout</h3>');
			productContainer = $('<div class="productcontainer">');
			backHref = $('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
			shoppingCarth5 = $('<h5> My Shopping Cart</h5>');
			checkoutcol1Div = $('<div class="checkoutcol1"> ');
			productsDiv = $('<div class="co_col1position1">Products</div> ');
			checkoutcol1Div.append(productsDiv);
			checkoutcol2Div = $(' <div class="checkoutcol2">');
			quantityDiv = $('<div class="co_col1position2">Quantity</div> ');
			checkoutcol2Div.append(quantityDiv);
			checkoutcol3Div = $(' <div class="checkoutcol3">');
			amountDiv = $('<div class="co_col1position2">Total Amount</div> ');
			checkoutcol3Div.append(amountDiv);
			checkoutcol4 = $(' <div class="checkoutcol4">');
			removeDiv = $('<div class="co_col1position2">Remove Item</div> ');
			checkoutcol4.append(removeDiv);
			productContainer.append(backHref);
			productContainer.append(shoppingCarth5);
			productContainer.append(checkoutcol1Div);
			productContainer.append(checkoutcol2Div);
			productContainer.append(checkoutcol3Div);
			productContainer.append(checkoutcol4);
			
			if(shoppingcard_data !== undefined && shoppingcard_data !== null){

				for (j = 0; j < shoppingcard_data.length; j++) {

					remProductId = shoppingcard_data[j].productId;// for removing purpose
					checkoutrow2= $('<div class="chectoutrow2">');
					checkoutvaluecol1= $('<div class="checkoutvaluecol1">'); 
					co_col1position1= $('<div class="co_col1position1">');
					co_product_image= $('<div class="co_product_image"><img src="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '" width="120" height="120" alt="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '"></div>');
					co_product_description= $('<div class="co_product_description">' + shoppingcard_data[j].name + '</div>');
					co_col1position1.append(co_product_image);
					co_col1position1.append(co_product_description);
					checkoutvaluecol1.append(co_col1position1);
					subtotal = shoppingcard_data[j].price;
					
					data = {};
					data.productId = shoppingcard_data[j].productId;
					data.singlePrice = shoppingcard_data[j].price;

					checkoutvaluecol2 = $('<div class="checkoutvaluecol2"><div class="co_col1position2"><div class="co_input"><input type="text" value="' + shoppingcard_data[j].quantity + '" name="productQuantity" id="productQuantity" size="3" maxlength="2" style="width:40px" /></div></div></div>');
					checkoutvaluecol3 = $('<div class="checkoutvaluecol3"><div class="co_col1position2"><div class="co_input"><span id="totalAmount_' + data.productId + '">' + (shoppingcard_data[j].quantity * subtotal) +'</span></div></div></div>');  
					checkoutvaluecol4 = $('<div class="checkoutvaluecol4"><div class="co_col1position2"><input type="submit" value="Remove" class="remove_buttonstyle"/></div></div>');  

					checkoutrow2.append(checkoutvaluecol1);
					checkoutrow2.append(checkoutvaluecol2);
					checkoutrow2.append(checkoutvaluecol3);
					checkoutrow2.append(checkoutvaluecol4);
					productContainer.append(checkoutrow2);
				}

				clear1 = $('<div class="clear"></div>');
				subtotal1 = $('<div class="subtotal_pos">SubTotal: $'+ shoppingcart.totalCalc(shoppingcard_data) +'</div>'); 
				clear2 = $('<div class="clear"></div>'); 
				buttons = $('<div class="checkout_buttonposition2">');
				button1 = $('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');
				button2 = $('<input type="submit" value="Check Out" class="checkout_buttonstyle" />');

				subtotalAmount = subtotal1;
				event = {};

				if (self.listener !== null && self.listener !== undefined) {
					self.listener.publish(event,"MyCart",[self.phrescoapi.productArray]);
				}
				buttons.append(button1);
				buttons.append(button2);
				productContainer.append(clear1);
				productContainer.append(subtotal1);
				productContainer.append(clear2);
				if(shoppingcard_data.length !== 0){
					productContainer.append(buttons);
				}
			}
			
			shoppingcart.totalCalc = function(shoppingcard_data){
				var totalAmount =0, i;

				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;	
			};
									   
			mainContent.append(topH3);  
			mainContent.append(productContainer);
			output2 = mainContent;
		});	
		setTimeout (function(){
			start();
			notEqual(output1.html(), output2.html(), "Test Shopping cart with different data - test passed"); 
		}, 1000);
	});
	asyncTest("Test Shopping cart with different product sets", function() {
		
		var shoppingcart, shoppingcard_data = {}, productArray = [], mainContent, topH3, productContainer, backHref, shoppingCarth5,
		checkoutcol1Div, productsDiv, checkoutcol2Div, quantityDiv, checkoutcol3Div, amountDiv, checkoutcol4, removeDiv, 
		remProductId, checkoutrow2, checkoutvaluecol1, co_col1position1, co_product_image, subtotalAmount,
		co_product_description, checkoutvaluecol2, checkoutvaluecol3, checkoutvaluecol4, data, clear1, subtotal, subtotal1, clear2, buttons, button1, button2, event, j, i , self = this, api, phrescoapi, output1, output2;
		
		shoppingcard_data = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273},{image : "product/htc_mobile_25.png",name:"HTC Wildfire ", productId : 25, quantity : 1, price: 255}];
		productArray = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273},{image : "product/htc_mobile_25.png",name:"HTC Wildfire ", productId : 25, quantity : 1, price: 255}];
		
		shoppingcart = new  ShoppingCart();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		//api.wsURL = wsconfig.WSConfigurl;
		wsconfig.getEnvironment(function(data){
			api.wsURL = data;
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			shoppingcard_data = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
			productArray = [{image : "product/bb_mobile_24.png",name:"BlackBerry Torch 9800 ", productId : 24, quantity : 1, price: 512},{image : "product/nokia_mobile_26.png", name:"Nokia C6-01 ", productId : 26, quantity : 1, price: 273}];
			
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			
			mainContent = $('<div></div>');
			topH3 = $('<h3>product Checkout</h3>');
			productContainer = $('<div class="productcontainer">');
			backHref = $('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
			shoppingCarth5 = $('<h5> My Shopping Cart</h5>');
			checkoutcol1Div = $('<div class="checkoutcol1"> ');
			productsDiv = $('<div class="co_col1position1">Products</div> ');
			checkoutcol1Div.append(productsDiv);
			checkoutcol2Div = $(' <div class="checkoutcol2">');
			quantityDiv = $('<div class="co_col1position2">Quantity</div> ');
			checkoutcol2Div.append(quantityDiv);
			checkoutcol3Div = $(' <div class="checkoutcol3">');
			amountDiv = $('<div class="co_col1position2">Total Amount</div> ');
			checkoutcol3Div.append(amountDiv);
			checkoutcol4 = $(' <div class="checkoutcol4">');
			removeDiv = $('<div class="co_col1position2">Remove Item</div> ');
			checkoutcol4.append(removeDiv);
			productContainer.append(backHref);
			productContainer.append(shoppingCarth5);
			productContainer.append(checkoutcol1Div);
			productContainer.append(checkoutcol2Div);
			productContainer.append(checkoutcol3Div);
			productContainer.append(checkoutcol4);
			
			if(shoppingcard_data !== undefined && shoppingcard_data !== null){

				for (j = 0; j < shoppingcard_data.length; j++) {

					remProductId = shoppingcard_data[j].productId;// for removing purpose
					checkoutrow2= $('<div class="chectoutrow2">');
					checkoutvaluecol1= $('<div class="checkoutvaluecol1">'); 
					co_col1position1= $('<div class="co_col1position1">');
					co_product_image= $('<div class="co_product_image"><img src="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '" width="120" height="120" alt="' + api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image + '"></div>');
					co_product_description= $('<div class="co_product_description">' + shoppingcard_data[j].name + '</div>');
					co_col1position1.append(co_product_image);
					co_col1position1.append(co_product_description);
					checkoutvaluecol1.append(co_col1position1);
					subtotal = shoppingcard_data[j].price;
					
					data = {};
					data.productId = shoppingcard_data[j].productId;
					data.singlePrice = shoppingcard_data[j].price;

					checkoutvaluecol2 = $('<div class="checkoutvaluecol2"><div class="co_col1position2"><div class="co_input"><input type="text" value="' + shoppingcard_data[j].quantity + '" name="productQuantity" id="productQuantity" size="3" maxlength="2" style="width:40px" /></div></div></div>');
					checkoutvaluecol3 = $('<div class="checkoutvaluecol3"><div class="co_col1position2"><div class="co_input"><span id="totalAmount_' + data.productId + '">' + (shoppingcard_data[j].quantity * subtotal) +'</span></div></div></div>');  
					checkoutvaluecol4 = $('<div class="checkoutvaluecol4"><div class="co_col1position2"><input type="submit" value="Remove" class="remove_buttonstyle"/></div></div>');  

					checkoutrow2.append(checkoutvaluecol1);
					checkoutrow2.append(checkoutvaluecol2);
					checkoutrow2.append(checkoutvaluecol3);
					checkoutrow2.append(checkoutvaluecol4);
					productContainer.append(checkoutrow2);
				}

				clear1 = $('<div class="clear"></div>');
				subtotal1 = $('<div class="subtotal_pos">SubTotal: $'+ shoppingcart.totalCalc(shoppingcard_data) +'</div>'); 
				clear2 = $('<div class="clear"></div>'); 
				buttons = $('<div class="checkout_buttonposition2">');
				button1 = $('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');
				button2 = $('<input type="submit" value="Check Out" class="checkout_buttonstyle" />');

				subtotalAmount = subtotal1;
				event = {};

				if (self.listener !== null && self.listener !== undefined) {
					self.listener.publish(event,"MyCart",[self.phrescoapi.productArray]);
				}
				buttons.append(button1);
				buttons.append(button2);
				productContainer.append(clear1);
				productContainer.append(subtotal1);
				productContainer.append(clear2);
				if(shoppingcard_data.length !== 0){
					productContainer.append(buttons);
				}
			}
			
			shoppingcart.totalCalc = function(shoppingcard_data){
				var totalAmount =0, i;

				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;	
			};
									   
			mainContent.append(topH3);  
			mainContent.append(productContainer);
			output2 = mainContent;
		});
		
		setTimeout (function(){
			start();
			notEqual(output1.html(), output2.html(), "Test Shopping cart with different products sets- test passed"); 
		}, 2000);
	});
	
});