/*global require */

require ( [ "jquery", "./Products", "./EShopAPI", "./WSConfig", "qunit" ] , function($, Products, EShopAPI, WSConfig, QUnit) {
	var equal = QUnit.equal, expect = QUnit.expect, notEqual = QUnit.notEqual, testAllProductsFailure = QUnit.test, testAllProductsSuccess = QUnit.test, testAllProductsWithDiffProdCount = QUnit.test, products, wsconfig, categoryId, self = this, api, output1, output2;
	products = new Products();
	api = new EShopAPI();
	
	testAllProductsSuccess(" Test all products " , function(){
		products.categoryId = "All Products";
		products.api = api;
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		
		output1 = products.renderUI();
		
		categoryId = "All Products";
		var self = this,
		mainContent = $('<div></div>'),
		topH3 = $('<h3>All Products</h3>'),
		navUL = $('<ul></ul>');
		
		api.getAllProducts(categoryId, function(jsonObject){
			var productList = jsonObject,
			i, product, innerLi, innerDiv1, innerDiv2, productNamelink,
			productPriceDiv, productButtonDiv, ahref1, ahref2, data,
			newproducts = productList.product.length;

			for (i = 0; i < newproducts; i++) {
				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="'+api.wsURLWithoutContext+'/images/web/'+product.image+'" alt=""></a></div>');
				innerDiv2 = $('<div class="info"></div>');
				productNamelink = $('<a class="title2" href="#">'+product.name+'</a>');
				productPriceDiv = $('<div class="price"><span class="st">Our price:</span><strong>$'+product.listPrice+'</strong><br><span class="st2">Sell at:</span><span class="st3">$'+product.sellPrice+'</span></div></div>');
				productButtonDiv = $('<div class="actions">');
				ahref1 = $('<a href="#">Details</a>');
				ahref2 = $('<a href="#">Add to cart</a>');
				data = {};
				data.productId = product.id;
				data.name = product.name;
				data.quantity = 1;
				data.price = product.sellPrice;
				data.image = product.image;
				data.totalPrice = (data.quantity * product.sellPrice);
				productButtonDiv.append(ahref1);
				productButtonDiv.append(ahref2);
				innerDiv2.append(productNamelink);
				innerDiv2.append(productPriceDiv);
				innerDiv2.append(productButtonDiv);
				innerLi.append(innerDiv1);
				innerLi.append(innerDiv2);
				navUL.append(innerLi);
			}
		});      
		mainContent.append(topH3);     
		mainContent.append(navUL);
		output2 = mainContent.append(navUL);
		equal(output1.html(), output2.html(), "Test all products - test case passed");
	});
	
	/* testAllProductsWithDiffProdCount(" Test all products with different product count" , function(){
		products.categoryId = "All Products";
		products.api = api;
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		
		output1 = products.renderUI();
		
		categoryId = "All Products";
		var self = this,
		mainContent = $('<div></div>'),
		topH3 = $('<h3>All Products</h3>'),
		navUL = $('<ul></ul>');
		
		api.getAllProducts(categoryId, function(jsonObject){
			var productList = jsonObject,
			i, product, innerLi, innerDiv1, innerDiv2, productNamelink,
			productPriceDiv, productButtonDiv, ahref1, ahref2, data,
			newproducts = productList.product.length;

			for (i = 0; i < newproducts - 2; i++) {
				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="'+api.wsURLWithoutContext+'/images/web/'+product.image+'" alt=""></a></div>');
				innerDiv2 = $('<div class="info"></div>');
				productNamelink = $('<a class="title2" href="#">'+product.name+'</a>');
				productPriceDiv = $('<div class="price"><span class="st">Our price:</span><strong>$'+product.listPrice+'</strong><br><span class="st2">Sell at:</span><span class="st3">$'+product.sellPrice+'</span></div></div>');
				productButtonDiv = $('<div class="actions">');
				ahref1 = $('<a href="#">Details</a>');
				ahref2 = $('<a href="#">Add to cart</a>');
				data = {};
				data.productId = product.id;
				data.name = product.name;
				data.quantity = 1;
				data.price = product.sellPrice;
				data.image = product.image;
				data.totalPrice = (data.quantity * product.sellPrice);
				productButtonDiv.append(ahref1);
				productButtonDiv.append(ahref2);
				innerDiv2.append(productNamelink);
				innerDiv2.append(productPriceDiv);
				innerDiv2.append(productButtonDiv);
				innerLi.append(innerDiv1);
				innerLi.append(innerDiv2);
				navUL.append(innerLi);
			}
		});      
		mainContent.append(topH3);     
		mainContent.append(navUL);
		output2 = mainContent.append(navUL);
		notEqual(output1.html(), output2.html(), "Test all products with different product count - test case passed");
	}); */
	
	testAllProductsFailure(" Test all products mismatch scenario" , function(){
		products.categoryId = "All Products";
		products.api = api;
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		
		output1 = products.renderUI();
		
		categoryId = "Special Products";
		var self = this,
		mainContent = $('<div></div>'),
		topH3 = $('<h3>All Products</h3>'),
		navUL = $('<ul></ul>');
		
		api.getAllProducts(categoryId, function(jsonObject){
			var productList = jsonObject,
			i, product, innerLi, innerDiv1, innerDiv2, productNamelink,
			productPriceDiv, productButtonDiv, ahref1, ahref2, data,
			newproducts = productList.product.length;

			for (i = 0; i < newproducts; i++) {
				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="'+api.wsURLWithoutContext+'/images/web/'+product.image+'" alt=""></a></div>');
				innerDiv2 = $('<div class="info"></div>');
				productNamelink = $('<a class="title2" href="#">'+product.name+'</a>');
				productPriceDiv = $('<div class="price"><span class="st">Our price:</span><strong>$'+product.listPrice+'</strong><br><span class="st2">Sell at:</span><span class="st3">$'+product.sellPrice+'</span></div></div>');
				productButtonDiv = $('<div class="actions">');
				ahref1 = $('<a href="#">Details</a>');
				ahref2 = $('<a href="#">Add to cart</a>');
				data = {};
				data.productId = product.id;
				data.name = product.name;
				data.quantity = 1;
				data.price = product.sellPrice;
				data.image = product.image;
				data.totalPrice = (data.quantity * product.sellPrice);
				productButtonDiv.append(ahref1);
				productButtonDiv.append(ahref2);
				innerDiv2.append(productNamelink);
				innerDiv2.append(productPriceDiv);
				innerDiv2.append(productButtonDiv);
				innerLi.append(innerDiv1);
				innerLi.append(innerDiv2);
				navUL.append(innerLi);
			}
		});      
		mainContent.append(topH3);     
		mainContent.append(navUL);
		output2 = mainContent.append(navUL);
		notEqual(output1.html(), output2.html(), "Test all products mismatch scenario - test case passed");
	});
});