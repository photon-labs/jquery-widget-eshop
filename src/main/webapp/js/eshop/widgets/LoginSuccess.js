/*global define, $, window */

define( "eshop/widgets/LoginSuccess", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function LoginSuccess() {
    }

    LoginSuccess.prototype = new Clazz();    
    LoginSuccess.prototype = new Widget(); 

    LoginSuccess.prototype.mainNode = undefined;
    LoginSuccess.prototype.mainContent = undefined;
    LoginSuccess.prototype.apiHost = undefined;
    LoginSuccess.prototype.apiPort = undefined;
    LoginSuccess.prototype.hideItems = undefined;
    LoginSuccess.prototype.listener = undefined;
    LoginSuccess.prototype.api = undefined;
    LoginSuccess.prototype.phrescoapi = undefined;

    LoginSuccess.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("LoginSuccess", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    LoginSuccess.prototype.setMainContent = function() {
        var self = this,
        mainContent = $('<div></div>'),
        contactus = $('<div id="maincontact">'),
        selection = $('<section id="contact">'),
        divleft = $('<div id="">'),
        contactdescrip = $('<div class="contactdescrip">'),
        myCart = $('<div class="mycart_div"></div>'),
        log_div = $('<div class="log_div"></div>'),
        log_innerdiv = $('<div class="log_innerdiv"></div>'),
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>'),
        log_heading = $('<div class="log_heading">Login</div>'),
        log_txt_div = $('<div class="log_txt_div"></div>'),
        registrationStatus = $('<div class="log_txt"></div>'),
        statusMsg = $('<div class="log_txt_lft">Status : '+ self.api.loginresponse.successMessage +'</div>'),
        log_txtEmail = $('<div class="log_txt">'),
        log_txt_lftEmail = $('<div class="log_txt_lft">Email : '+ self.phrescoapi.login.loginEmail+'</div>'),
        log_txtuserName_txt = $('<div class="log_txt"></div>'),
        log_txtuserName = $('<div class="log_txt_lft">Name : '+ self.api.loginresponse.userName+'</div>'),
        cleardiv = $('<div class="clear"></div>');

        registrationStatus.append(statusMsg);
        log_txtEmail.append(log_txt_lftEmail);
        log_txtuserName_txt.append(log_txtuserName);
                          
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);
        log_txt_div.append(log_txtuserName_txt);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
        contactdescrip.append(myCart);
        
        divleft.append(contactdescrip);    
        divleft.append(cleardiv);
        selection.append(divleft);
        contactus.append(selection);
        mainContent.append(contactus);
        this.mainContent = mainContent;
    };

    LoginSuccess.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	LoginSuccess.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    LoginSuccess.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    LoginSuccess.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return LoginSuccess;
});
