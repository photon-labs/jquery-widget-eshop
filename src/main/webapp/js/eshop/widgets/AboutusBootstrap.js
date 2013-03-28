/*global define, $, window */
   
define( "eshop/widgets/AboutusBootstrap", [ "jquery", "eshop/widgets/Aboutus" ], function($, Aboutus) {

    function AboutusBootstrap() {
    }

    AboutusBootstrap.prototype.container = undefined;
    AboutusBootstrap.prototype.aboutusWidget = undefined;

    AboutusBootstrap.prototype.init = function(listener, api) {
        this.container = $("eshop\\:aboutus-widget"); 

        if(this.container !== null ) {

            this.aboutusWidget = new Aboutus();
            this.aboutusWidget.initialize(this.container, listener);
            this.aboutusWidget.render(this.container);
        }
    };

    return AboutusBootstrap;
});