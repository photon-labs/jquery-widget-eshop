/*global require*/

require([ "jquery", "eshop/widgets/Newproducts", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig"], function($, Newproducts, EShopAPI, WSConfig) {

//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, wsconfig, testWithSameLength = QUnit.test, testWithDifferentLength = QUnit.test, output1, output2;
	module("Newproducts.js;Newproducts");
	asyncTest("Test New Products", function() {
	
		var newProduct, mainContent, topH3, api, self = this, navUL, productList, newproducts, product, innerLi, innerDiv1, innerDiv2, ahref, pricebtton, data, i, productlength, wsURL, wsconfig;
		
		newProduct = new Newproducts();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			newProduct.api = api;
		
		});
		
		setTimeout(function() {
			 start();
			output1 = newProduct.testRenderUI();

			mainContent = $('<div></div>');
			topH3 = $('<h3>New Products</h3>');
			navUL = $('<ul></ul>');
			
			api.getTopsellProducts(function(jsonObject){
				productList = jsonObject;
				newproducts = productList.product.length;
				for (i = 0; i < newproducts; i++) {
					product = jsonObject.product[i];
					innerLi = $('<li></li>');
					innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="' + api.wsURLWithoutContext + '/images/web/' + product.image + '" alt=""></a></div>');
					innerDiv2 = $('<div class="info">');
					ahref = $('<a class="title2" href="#">' + product.name + '</a><div class="price"><span class="special">Sell at:</span><span class="special">$' + product.sellPrice + '</span></div>');
					pricebtton = $('<div class="pricebtn"><a class="addtocart_buttonstyle" href="#">Add to cart</a></div>');
					data = {};

					data.productId = product.id;
					data.name = product.name;
					data.quantity = 1;
					data.price = product.sellPrice;
					data.image = product.image;
					data.totalPrice = (data.quantity * product.sellPrice);
					innerDiv2.append(ahref); 
					innerDiv2.append(pricebtton);                   
					innerLi.append(innerDiv1);
					innerLi.append(innerDiv2);
					navUL.append(innerLi);
				}  
			});  

			mainContent.append(topH3);     
			mainContent.append(navUL);
			
			output2 = mainContent; 

			equal(output1.html(), output2.html()," New Products - With same length - Test case passed"); 
		}, 1000);
	
	});
	
	/* testWithDifferentLength("New Products - With different length.", function() {
	
		var newProduct, mainContent, topH3, api, self = this, navUL, productList, newproducts, product, innerLi, innerDiv1, innerDiv2, ahref, pricebtton, data, i, productlength;
		
		newProduct = new Newproducts();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		newProduct.api = api;

		output1 = newProduct.renderUI();

		productlength = 11;
		mainContent = $('<div></div>');
        topH3 = $('<h3>New Products</h3>');
		navUL = $('<ul></ul>');
		
		api.getTopsellProducts(function(jsonObject){
            productList = jsonObject;
            for (i = 0; i < productlength; i++) {
                product = jsonObject.product[i];
                innerLi = $('<li></li>');
                innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="' + api.wsURLWithoutContext + '/images/web/' + product.image + '" alt=""></a></div>');
                innerDiv2 = $('<div class="info">');
                ahref = $('<a class="title2" href="#">' + product.name + '</a><div class="price"><span class="special">Sell at:</span><span class="special">$' + product.sellPrice + '</span></div>');
                pricebtton = $('<div class="pricebtn"><a class="addtocart_buttonstyle" href="#">Add to cart</a></div>');
                
				data = {};
                data.productId = product.id;
                data.name = product.name;
                data.quantity = 1;
                data.price = product.sellPrice;
                data.image = product.image;
                data.totalPrice = (data.quantity * product.sellPrice);
                innerDiv2.append(ahref); 
                innerDiv2.append(pricebtton);                   
                innerLi.append(innerDiv1);
                innerLi.append(innerDiv2);
                navUL.append(innerLi);
            }  
        });  

		mainContent.append(topH3);     
        mainContent.append(navUL);
		
		output2 = mainContent; 

		notEqual(output1.html(), output2.html(),  "New Products - With different length - Test case passed"); 
	}); */
});