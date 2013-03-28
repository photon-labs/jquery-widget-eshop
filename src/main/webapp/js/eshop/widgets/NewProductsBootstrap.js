/*global define, $, window */
   
define( "eshop/widgets/NewproductsBootstrap", [ "jquery", "eshop/widgets/Newproducts" ], function($, Newproducts) {

    function NewproductsBootstrap() {
    }

    NewproductsBootstrap.prototype.container = undefined;
    NewproductsBootstrap.prototype.newproductsWidget = undefined;

    NewproductsBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:newproducts-widget");

        if(this.container !== null ) {
            this.newproductsWidget = new Newproducts();
            this.newproductsWidget.initialize(this.container, listener, api, phrescoapi);
            this.newproductsWidget.render(this.container);
        }
    };

    return NewproductsBootstrap;
});

