/*global require */

require(  [ "jquery", "eshop/widgets/OrderHistory", "eshop/widgets/EShopAPI"], function($, OrderHistory, EShopAPI) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testOrderHistorySuccess = QUnit.test, testOrderHistoryFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the order-History
	 */
	
	module("OrderHistory.js;OrderHistory");
	test("Test OrderHistory with same data.", function() {
	
		var orderHistory, api, phrescoapi, self = this, output1, output2, product, orderhistory, orderhistory1, loginresponse, mainContent, selection, divleft, h3, table, tr1, td1, td12, tbody, tr2, td2, td21, tr3, td3, td31, tr4, td4, td41, i;
		
		orderHistory = new OrderHistory();
		api = new EShopAPI();
		orderHistory.api = api;
		
		loginresponse = {message:"success", successMessage:	"Login Success", userId:1, userName:"John Anderson"};
		orderhistory = {product:[{orderDate:"2012-6-26", orderId:3, totalPrice:1500, totalqty:1}]};
		orderhistory1 = {product:[{orderDate:"2012-6-26", orderId:3, totalPrice:1500, totalqty:1}]};
		
		orderHistory.api.loginresponse = loginresponse;
		orderHistory.api.orderhistory = orderhistory;
		output1 = orderHistory.testRenderUI();
		
		if(orderhistory1 !== undefined){
			mainContent = $('<div id="maincontact">');
			selection = $('<section id="contact">');
			divleft = $('<div id="">');
			h3 = $('<h3> Order History </h3>');
			table = $('<table summary="Order History" id="newspaper-a">');
			for (i = 0; i < orderhistory1.product.length; i++) {
				tr1 = $('<tr>');
				td1 = $('<td><b>Order Id</b></td>');
				td12 = $('<td ><b>' + orderhistory1.product[i].orderId +'</b></td>');
				tr1.append(td1);
				tr1.append(td12);
				tbody = $('<tbody>');
				tr2 = $('<tr>');	
				td2 = $('<td>Prd Qty</td>');
				td21 = $('<td>' + orderhistory1.product[i].totalqty +'</td>');
				tr2.append(td2);
				tr2.append(td21);
				
				tr3 = $('<tr>');	
				td3 = $('<td>Price</td>');
				td31 = $('<td>' + orderhistory1.product[i].totalPrice +'</td>');
				tr3.append(td3);
				tr3.append(td31);
				
				tr4 = $('<tr>');	
				td4 = $('<td>DOP</td>');
				td41 = $('<td>' + orderhistory1.product[i].orderDate +'</td>');
				tr4.append(td4);
				tr4.append(td41);
				
				tbody.append(tr1);
				tbody.append(tr2);
				tbody.append(tr3);
				tbody.append(tr4);
				table.append(tbody);
			}
			divleft.append(h3);
			divleft.append(table);
			selection.append(divleft);
			mainContent.append(selection);
			output2 = mainContent;
			
		}
		equal(output1.html(), output2.html(), "OrderHistory case Success");
	}); 
	
	test("Test OrderHistory with different data.", function() {
	
		var orderHistory, api, phrescoapi, self = this, output1, output2, product, orderhistory, orderhistory1, loginresponse, mainContent, selection, divleft, h3, table, tr1, td1, td12, tbody, tr2, td2, td21, tr3, td3, td31, tr4, td4, td41, i;
		
		orderHistory = new OrderHistory();
		api = new EShopAPI();
		orderHistory.api = api;
		
		loginresponse = {message:"success", successMessage:	"Login Success", userId:1, userName:"John Anderson"};
		orderhistory = {product:[{orderDate:"2012-6-26", orderId:3, totalPrice:1500, totalqty:1}]};
		orderhistory1 = {product:[{orderDate:"2012-6-26", orderId:3, totalPrice:3000, totalqty:2}]};
		
		orderHistory.api.loginresponse = loginresponse;
		orderHistory.api.orderhistory = orderhistory;
		output1 = orderHistory.testRenderUI();
		
		if(orderhistory1 !== undefined){
			mainContent = $('<div id="maincontact">');
			selection = $('<section id="contact">');
			divleft = $('<div id="">');
			h3 = $('<h3> Order History </h3>');
			table = $('<table summary="Order History" id="newspaper-a">');
			for (i = 0; i < orderhistory1.product.length; i++) {
				tr1 = $('<tr>');
				td1 = $('<td><b>Order Id</b></td>');
				td12 = $('<td ><b>' + orderhistory1.product[i].orderId +'</b></td>');
				tr1.append(td1);
				tr1.append(td12);
				tbody = $('<tbody>');
				tr2 = $('<tr>');	
				td2 = $('<td>Prd Qty</td>');
				td21 = $('<td>' + orderhistory1.product[i].totalqty +'</td>');
				tr2.append(td2);
				tr2.append(td21);
				
				tr3 = $('<tr>');	
				td3 = $('<td>Price</td>');
				td31 = $('<td>' + orderhistory1.product[i].totalPrice +'</td>');
				tr3.append(td3);
				tr3.append(td31);
				
				tr4 = $('<tr>');	
				td4 = $('<td>DOP</td>');
				td41 = $('<td>' + orderhistory1.product[i].orderDate +'</td>');
				tr4.append(td4);
				tr4.append(td41);
				
				tbody.append(tr1);
				tbody.append(tr2);
				tbody.append(tr3);
				tbody.append(tr4);
				table.append(tbody);
			}
			divleft.append(h3);
			divleft.append(table);
			selection.append(divleft);
			mainContent.append(selection);
			output2 = mainContent;
			
		}
		
		notEqual(output1.html(), output2.html(), "OrderHistory case Success");
	});
});