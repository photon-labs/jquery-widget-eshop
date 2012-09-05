/*global define, $, window */

define( "eshop/widgets/Navigation", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Navigation() {
    }
    
    Navigation.prototype = new Clazz();    
    Navigation.prototype = new Widget(); 

    Navigation.prototype.mainNode = undefined;
    Navigation.prototype.mainContent = undefined;
    Navigation.prototype.hideItems = undefined;
    Navigation.prototype.phrescoapi = undefined;
    Navigation.prototype.listener = undefined;
    Navigation.prototype.api = undefined;

    Navigation.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("Navigation", this, "onHashChange");
		 listener.subscribe("ShowNavigation", this, "showWidget");
        this.listener = listener; 
        this.mainNode = container;
        this.phrescoapi = phrescoapi;
        this.api = api; 
    };

    Navigation.prototype.setMainContent = function() {
        
        var self = this,
        logtext = (self.api.loginresponse.message === "success" && self.api.loginresponse.userId !== undefined )?"LogOut":"Login",
        texttLi = (self.api.loginresponse.message === "success" && self.api.loginresponse.message !== undefined )?"logoutLi":"loginLi",
        ordertext = (self.api.loginresponse.userId !== 0 && self.api.loginresponse.userId !== undefined )?"My Order":"Sign up",
        ordertextLi = (self.api.loginresponse.userId !== 0 && self.api.loginresponse.userId !== undefined )?"myorderLI":"signupLI",
        mainContent = $('<nav id="navigation"></nav>'),
        navUL = $('<ul></ul>'),
        lis = '<li class="selected" id="homeLI"><a id="aboutUs" style="cursor:pointer">Home</a></li>', 
        liList;
        lis +=  '<li id="productsLI"><a style="cursor:pointer">Products</a></li>';
        lis +=  '<li id="specialsLI"><a style="cursor:pointer">Specials</a></li>';
        lis +=  '<li id="contactUsLI"><a style="cursor:pointer">Contact us</a></li>';
        lis +=  '<li id="aboutUsLI"><a style="cursor:pointer">About us</a></li>';

        lis +=  '<li id="'+ ordertextLi +'"><a style="cursor:pointer">'+ ordertext +'</a></li>';
        lis +=  '<li id="'+ texttLi +'"><a style="cursor:pointer">'+ logtext +'</a></li>';
        lis +=  '<li id="myorderLI"><a style="display: none; cursor:pointer">My Order</a></li>'; 
        lis +=  '<li id="logoutLi"><a style="display: none; cursor:pointer">Log Out</a></li>';
        
        liList = $(lis);
        navUL.append(liList);
        mainContent.append(navUL);
        this.mainContent = mainContent;

        $(liList).bind('click', function(event){

            self.removeStyle();
            $(this).addClass("selected");

            if(event.currentTarget.id === "homeLI"){

                self.hideItems = ['ProductDetails','ShoppingCart','Aboutus','Contactus','OrderFormView','OrderForm','Login','OrderSuccess','Register','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.commonItemsToShow(event);

            } else if(event.currentTarget.id === "productsLI"){
                self.hideItems = ['ProductDetails','ShoppingCart','Aboutus','Contactus','OrderFormView','OrderForm','Login','OrderSuccess','Register','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.commonItemsToShow(event);

            } else if(event.currentTarget.id === "specialsLI"){
                self.hideItems = ['ProductDetails','ShoppingCart','Aboutus','Contactus','OrderFormView','OrderForm','Login','OrderSuccess','Register','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.commonItemsToShow(event);

            } else if(event.currentTarget.id === "contactUsLI"){
                self.hideItems = ['slider'];
                self.phrescoapi.sliderWrapperShowHide(false,self.hideItems);
                self.hideItems = ['Products','ProductDetails','ShoppingCart','Aboutus','OrderFormView','OrderForm','Login','OrderSuccess','Register','NewProducts','MyCart','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Contactus",[event.data]);
                
            } else if(event.currentTarget.id === "aboutUsLI"){
                self.hideItems = ['slider'];
                self.phrescoapi.sliderWrapperShowHide(false,self.hideItems);
                self.hideItems = ['Products','ProductDetails','ShoppingCart','Contactus','OrderFormView','OrderForm','Login','OrderSuccess','Register','NewProducts','MyCart','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Aboutus",[event.data]);
                
            } else if(event.currentTarget.id === "signupLI"){

                self.hideItems = ['slider','wrapper'];
                self.phrescoapi.sliderWrapperShowHide(false,self.hideItems);
                self.hideItems = ['Products','NewProducts','Aboutus','Contactus','Login','ProductDetails','ShoppingCart','MyCart','OrderFormView','OrderForm','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Register",[event.data]);
                
            } else if(event.currentTarget.id === "loginLi"){

                self.hideItems = ['slider','wrapper'];
                self.phrescoapi.sliderWrapperShowHide(false,self.hideItems);
                self.hideItems = ['Products','NewProducts','Aboutus','Contactus','Register','ProductDetails','ShoppingCart','MyCart','OrderFormView','OrderForm','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Login",[event.data]);

            } else if(event.currentTarget.id === "myorderLI"){

                self.hideItems = ['slider','wrapper'];
                self.phrescoapi.sliderWrapperShowHide(false,self.hideItems);
                self.hideItems = ['Products','NewProducts','Aboutus','Contactus','Login','ProductDetails','ShoppingCart','MyCart','OrderFormView','OrderForm','RegisterSuccess', 'LoginSuccess'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.api.getOrderHistory(self.api.loginresponse.userId);
                self.listener.publish(event,"OrderHistory",[event.data]);
            } else if(event.currentTarget.id === "logoutLi"){
                self.hideItems = ['ProductDetails','ShoppingCart','Aboutus','Contactus','OrderFormView','OrderForm','Login','OrderSuccess','Register','RegisterSuccess', 'LoginSuccess','OrderHistory'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.api.loginresponse.message = "failure";
                self.listener.publish(event,"Navigation",[event.data]);
                self.listener.publish(event,"Products",1); // pass the category id 1 for home page
                self.listener.publish(event,"NewProducts",[event.data]);
                self.listener.publish(event,"MyCart",[event.data]);
            }
        });
    }; 

    Navigation.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Navigation.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.showWidget();
    };

    Navigation.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	 Navigation.prototype.showWidget = function(){
        this.mainNode.show();
    };

    Navigation.prototype.removeStyle = function(){

        this.hideItems = ['homeLI','productsLI','specialsLI','contactUsLI','aboutUsLI','signupLI','loginLi','myorderLI','logoutLi'];

        $.each(this.hideItems,function(){
                $("#" + this).removeClass("selected");
            });
    };

    Navigation.prototype.commonItemsToShow = function(event){

        this.hideItems = ['slider','wrapper'];

        this.phrescoapi.sliderWrapperShowHide(true,this.hideItems);


        this.hideItems = ['Login','Register','ProductDetails','ShoppingCart'];
        this.phrescoapi.hideWidget(this.hideItems);

        if(event.currentTarget.id === "productsLI"){
            this.listener.publish(event,"Products",{categoryId:'All Products',searchCriteria:null});
        }else if(event.currentTarget.id === "specialsLI"){
            this.listener.publish(event,"Products",{categoryId:'Special Products',searchCriteria:null});
        }else{
            this.listener.publish(event,"Products",{categoryId:1,searchCriteria:null});
        }

        this.listener.publish(event,"NewProducts",[event.data]);
        this.listener.publish(event,"MyCart",[event.data]);
    };

    return Navigation;
});