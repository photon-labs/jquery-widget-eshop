/*global define, $, window */

define( "eshop/widgets/OrderFormView", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function OrderFormView() {
    }

    OrderFormView.prototype = new Clazz();    
    OrderFormView.prototype = new Widget(); 

    OrderFormView.prototype.mainNode = undefined;
    OrderFormView.prototype.mainContent = undefined;
    OrderFormView.prototype.hideItems = undefined;
    OrderFormView.prototype.listener = undefined;
    OrderFormView.prototype.api = undefined;
    OrderFormView.prototype.phrescoapi = undefined;

    OrderFormView.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("OrderFormView", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    OrderFormView.prototype.setMainContent = function() {
		var orderDetail = this.phrescoapi.orderDetail,
		self = this,

        mainContent = $('<div></div>'),
        topH3 = $('<h3> Computers</h3>'),
        productContainer = $('<div class="productcontainer">'),
		fieldholdertitle = $('<div class="fieldholder">'),
		h5 = $('<h5> Customer Information</h5>'),
		formrow = $('<div class="formrow">'),
		fieldset = $('<div class="col1"><div class="col1position1">Email:</div></div><div class="col2"><div class="col1position2">'+orderDetail.email+'</div></div>'),
		
		billh5 = $('<h5> Billing / Delivery Informations</h5>'),
		
		formrow1 = $('<div class="formrow">'),
		firstname = $('<div class="col1"> <div class="col1position1">First name:</div></div><div class="col2"><div class="col1position2">'+orderDetail.firstName+'</div></div>'),
		
		formrow2 = $('<div class="formrow">'),
		lastname = $('<div class="col1"><div class="col1position1">Last name:</div></div><div class="col2"><div class="col1position2">'+orderDetail.lastName+'</div></div>'),
		
		formrow3 = $('<div class="formrow">'),
		company = $('<div class="col1"><div class="col1position1">Company:</div></div><div class="col2"><div class="col1position2">'+orderDetail.company+'</div></div>'),
		
		formrow4 = $('<div class="formrow">'),
		address1 = $('<div class="col1"><div class="col1position1">Address1:</div></div><div class="col2"><div class="col1position2">'+orderDetail.address1+'</div></div>'),
		
		formrow5 = $('<div class="formrow">'),
		address2 = $('<div class="col1"><div class="col1position1">Address2:</div></div><div class="col2"><div class="col1position2">'+orderDetail.address2+'</div></div>'),
		
		formrow6 = $('<div class="formrow">'),
		city = $('<div class="col1"><div class="col1position1">City:</div></div><div class="col2"><div class="col1position2">'+orderDetail.city+'</div></div>'),
		
		formrow7 = $('<div class="formrow">'),
		state = $('<div class="col1"><div class="col1position1">State / Province:</div></div><div class="col2"><div class="col1position2">'+orderDetail.state+'</div></div>'),
		
		formrow8 = $('<div class="formrow">'),
		country = $('<div class="col1"> <div class="col1position1">Country</div> </div><div class="col2"><div class="col1position2">'+orderDetail.country+'</div></div>'),
		
		formrow9 = $('<div class="formrow">'),
		postcode = $('<div class="col1"><div class="col1position1">Postcode</div></div><div class="col2"><div class="col1position2">'+orderDetail.postcode+'</div></div>'),
		
		formrow10 = $('<div class="formrow">'),
		phonenumber = $('<div class="col1"><div class="col1position1">Phonenumber</div></div><div class="col2"><div class="col1position2">'+orderDetail.phonenumber+'</div></div>'),
		
		formrow11 = $('<div class="formrow"></div>'),
		paymentmethod = $('<h5> Payment Method</h5>'),
		
		formrow12 = $('<div class="formrow">'),
		subtotal = $('<div class="col1"> <div class="col1position1">Subtotal:</div> </div><div class="col2"><div class="col1position2">1212121212</div></div>'),
		
		formrow13 = $('<div class="formrow">'),
		ordertotal = $('<div class="col1"><div class="col1position1">Payment method:</div></div><div class="col2"><div class="col1position2">Cheque</div></div>'),
		
		formrow14 = $('<div class="formrow">'),
		mailto = $('<div class="col1"><div class="col1position1">Mail to:</div> </div><div class="col2"><div class="col1position2">Phresco</div></div>'),
		
		formrow15 = $('<div class="formrow"></div>'),
		ordercomment = $('<h5> Order Comments</h5>'),
		
		formrow16 = $('<div class="formrow">'),
		comment = $('<div class="col_comments">'+orderDetail.comments+'</div>'),

		buttonposition2 = $('<div class="buttonposition2">'),
		backbtn = $('<input type="submit" value="Back" class="buttonstyle"/>'),
		submitbtn = $('<input type="submit" value="Submit Order" class="buttonstyle"/></div>');

        formrow.append(fieldset);  
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
		
		$(backbtn).bind('click', orderDetail , function(event){
			self.hideItems = ['OrderFormView'];
            self.phrescoapi.hideWidget(self.hideItems);
			self.listener.publish(event,"OrderForm",[event.data]);
		});
		$(submitbtn).bind('click', {categoryId:0} , function(event){
			self.hideItems = ['OrderFormView'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.phrescoapi.showOrderSuccess();
			self.listener.publish(event,"OrderSuccess",[event.data]);
		});
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
	    this.mainContent = mainContent;
    };

    OrderFormView.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	OrderFormView.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    
    OrderFormView.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

	OrderFormView.prototype.hideWidget = function() {
        this.mainNode.hide();
    };

    return OrderFormView;
});
