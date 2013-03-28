/*global define, $ window */

define( "eshop/widgets/MyCart", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function MyCart() {
    }

    MyCart.prototype = new Clazz();    
    MyCart.prototype = new Widget(); 

    MyCart.prototype.mainNode = undefined;
    MyCart.prototype.mainContent = undefined;
    MyCart.prototype.hideItems = undefined;
    MyCart.prototype.listener = undefined;
    MyCart.prototype.phrescoapi = undefined;

    MyCart.prototype.initialize = function(container, listener, phrescoapi) {
        listener.subscribe("MyCart",this,"onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
    };

    MyCart.prototype.setMainContent = function() {
        var itemCount = 0, i,
        self = this,
        totalPrice = 0, mainContent, cashBanner, myCartBDiv,
        carticonDiv, cartheaderDiv, splitDiv, ItemDiv, split2Div, totalPriceDiv, clearDiv, val1Div, val2Div;

        if(self.phrescoapi.productArray !== null && 
           self.phrescoapi.productArray.length > 0)
        {
            for (i = 0; i < self.phrescoapi.productArray.length; i++) {
                itemCount += Number(self.phrescoapi.productArray[i].quantity);
                totalPrice += Number(self.phrescoapi.productArray[i].quantity * self.phrescoapi.productArray[i].price);
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
        val1Div = $('<div class="mycarttextvalue1" id="totalItem">' + itemCount + '</div>');
        val2Div = $('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">' + totalPrice + '</div>');

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
        this.mainContent = mainContent;
    };

    MyCart.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	MyCart.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    MyCart.prototype.onHashChange = function(event) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    MyCart.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return MyCart;
});
