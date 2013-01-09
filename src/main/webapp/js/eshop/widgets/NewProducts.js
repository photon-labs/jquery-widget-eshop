/*global define, $ window */

define( "eshop/widgets/Newproducts", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Newproducts() {
    }

    Newproducts.prototype = new Clazz();    
    Newproducts.prototype = new Widget(); 

    Newproducts.prototype.mainNode = undefined;
    Newproducts.prototype.mainContent = undefined;
    Newproducts.prototype.hideItems = undefined;
    Newproducts.prototype.listener = undefined;
    Newproducts.prototype.api = undefined;
    Newproducts.prototype.phrescoapi = undefined;
    
    Newproducts.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("NewProducts",this,"onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.hideItms = [];
        this.phrescoapi = phrescoapi;
        this.api = api; 
    };

    Newproducts.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'),
        topH3 = $('<h3>New Products</h3>'),
        self = this,
        navUL = $('<ul></ul>'), productList, newproducts, product, innerLi, innerDiv1, innerDiv2,
        ahref, pricebtton, data, i;
       
        self.api.getTopsellProducts(function(jsonObject){
            productList = jsonObject;
            newproducts = productList.product.length;
            for (i = 0; i < newproducts; i++) {
                product = jsonObject.product[i];
                innerLi = $('<li></li>');
                innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="' + self.api.wsURL + '/images/web/' + product.image + '" alt=""></a></div>');
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

                self.addFunction(pricebtton, data, self, innerDiv1);

                innerDiv2.append(ahref); 
                innerDiv2.append(pricebtton);                   
                innerLi.append(innerDiv1);
                innerLi.append(innerDiv2);
                navUL.append(innerLi);
            }    
        });    

        mainContent.append(topH3);     
        mainContent.append(navUL);
        this.mainContent = mainContent;
    };

    Newproducts.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	Newproducts.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Newproducts.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    Newproducts.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    Newproducts.prototype.addFunction = function(pricebtton, data, self, innerDiv1){
       $(pricebtton).bind('click', data , function(event){
            self.listener.unsubscribe("ProductsHide","hideWidget");
            self.hideItems = ['ProductDetails'];
            self.phrescoapi.hideWidget(self.hideItems);    
            self.phrescoapi.showShoppingCart(event.data);
            var data = {productArray : self.phrescoapi.productArray,categoryID : null,productID : null};
            self.listener.publish(event,"ShoppingCart",data);
        });
         $(innerDiv1).bind('click', {productId : data.productId} , function(event){
            self.hideItems = ['Products','ShoppingCart'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
    };

    return Newproducts;
});
