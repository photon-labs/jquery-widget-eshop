/*global require */

require([ "jquery", "eshop/widgets/MyCart", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, MyCart, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual ,expect = QUnit.expect, testMycartSuccess = QUnit.test, testMycartFail = QUnit.test, productArray, productArray1, i, cashBanner;

	/**
	 * Test that the setMainContent method sets the text in the MyCart-widget
	 */
	  module("Login.js;Login");
	test("Test MyCart with same quantity.", function() {
	
		var mainContent, mycart, phrescoapi, output1, output2, self=this, myCartBDiv,
        carticonDiv, cartheaderDiv, splitDiv, ItemDiv, split2Div, totalPriceDiv, clearDiv, val1Div, val2Div, itemCount = 0, totalPrice = 0;
	
	
		mycart = new MyCart();
		phrescoapi = new Phresco();
		mycart.phrescoapi = phrescoapi;
		
		productArray = [{quantity : 1, price: 1500}];
		
		mycart.phrescoapi.productArray = productArray;

		output1 = mycart.testRenderUI();
		
		productArray1 = [{quantity : 1, price: 1500}];
		
		if(productArray1 !== null && 
           productArray1.length > 0)
        {
            for (i = 0; i < productArray1.length; i++) {
                itemCount += Number(productArray1[i].quantity);
                totalPrice += Number(productArray1[i].quantity * productArray1[i].price);
            }
        }

		mainContent = $('<div></div>');
        cashBanner = $('<div class="cashbanner"><img src="images/eshop/cashdelivery_banner.png" width="181" height="70" alt="Cash delivery"></div>');
        myCartBDiv = $('<div class="mycartbg">');
        carticonDiv = $('<div class="carticon"><img src="images/eshop/mycart_icon.png" width="28" height="21" alt="My Cart icon"> </div>');
        
        cartheaderDiv = $('<a href="#"><div class="cartheader">My Cart </div></a>');
        splitDiv = $('<div class="split"></div>');
        ItemDiv = $('<div class="mycarttext"> Item </div>');
        split2Div = $('<div class="split2"></div>');
        totalPriceDiv = $('<div class="mycarttext">Total Price </div>');
        clearDiv = $('<div class="clear"></div>');
        val1Div = $('<div class="mycarttextvalue1" id="totalItem">'+ itemCount +'</div>');
        val2Div = $('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">'+ totalPrice +'</div>');

        myCartBDiv.append(carticonDiv);
        myCartBDiv.append(cartheaderDiv);
        myCartBDiv.append(splitDiv);
        myCartBDiv.append(ItemDiv);
        myCartBDiv.append(split2Div);
        myCartBDiv.append(totalPriceDiv);
        myCartBDiv.append(clearDiv);
        myCartBDiv.append(val1Div);
        myCartBDiv.append(val2Div);
    
        mainContent.append(cashBanner);       
        mainContent.append(myCartBDiv);  
		output2 = mainContent; 
           // Expect that the text was set on the expected element
         equal(output1.html(), output2.html(),	"Success case for Mycart");
	});
	
	test("Test MyCart with Different quantity", function() {
	
		var mainContent, mycart, phrescoapi, output1, output2, self=this, myCartBDiv,
        carticonDiv, cartheaderDiv, splitDiv, ItemDiv, split2Div, totalPriceDiv, clearDiv, val1Div, val2Div, itemCount = 0, totalPrice = 0;
	
	
		mycart = new MyCart();
		phrescoapi = new Phresco();
		mycart.phrescoapi = phrescoapi;
		
		productArray = [{quantity : 1, price: 1500}];
		
		mycart.phrescoapi.productArray = productArray;

		output1 = mycart.testRenderUI();
		
		productArray1 = [{quantity : 2, price: 1500}];
		
		if(productArray1 !== null && 
           productArray1.length > 0)
        {
            for (i = 0; i < productArray1.length; i++) {
                itemCount += Number(productArray1[i].quantity);
                totalPrice += Number(productArray1[i].quantity * productArray1[i].price);
            }
        }

		mainContent = $('<div></div>');
        cashBanner = $('<div class="cashbanner"><img src="images/eshop/cashdelivery_banner.png" width="181" height="70" alt="Cash delivery"></div>');
        myCartBDiv = $('<div class="mycartbg">');
        carticonDiv = $('<div class="carticon"><img src="images/eshop/mycart_icon.png" width="28" height="21" alt="My Cart icon"> </div>');
        
        cartheaderDiv = $('<a href="#"><div class="cartheader">My Cart </div></a>');
        splitDiv = $('<div class="split"></div>');
        ItemDiv = $('<div class="mycarttext"> Item </div>');
        split2Div = $('<div class="split2"></div>');
        totalPriceDiv = $('<div class="mycarttext">Total Price </div>');
        clearDiv = $('<div class="clear"></div>');
        val1Div = $('<div class="mycarttextvalue1" id="totalItem">'+ itemCount +'</div>');
        val2Div = $('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">'+ totalPrice +'</div>');

        myCartBDiv.append(carticonDiv);
        myCartBDiv.append(cartheaderDiv);
        myCartBDiv.append(splitDiv);
        myCartBDiv.append(ItemDiv);
        myCartBDiv.append(split2Div);
        myCartBDiv.append(totalPriceDiv);
        myCartBDiv.append(clearDiv);
        myCartBDiv.append(val1Div);
        myCartBDiv.append(val2Div);
    
        mainContent.append(cashBanner);       
        mainContent.append(myCartBDiv);  
		output2 = mainContent; 

           // Expect that the text was set on the expected element
        notEqual(output1.html(), output2.html(),	"Failure case for Mycart");
	});
});
