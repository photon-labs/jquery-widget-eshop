/*global define, $, window */
   
define( "eshop/widgets/ContactusBootstrap", [ "jquery", "eshop/widgets/Contactus" ], function($, Contactus) {

    function ContactusBootstrap() {
    }

    ContactusBootstrap.prototype.container = undefined;
    ContactusBootstrap.prototype.contactusWidget = undefined;

    ContactusBootstrap.prototype.init = function(listener, api) {
        this.container = $("eshop\\:contactus-widget"); 

        if(this.container !== null ) {
            this.contactusWidget = new Contactus();
            this.contactusWidget.initialize(this.container, listener);
            this.contactusWidget.render(this.container);
        }
    };

    return ContactusBootstrap;
});