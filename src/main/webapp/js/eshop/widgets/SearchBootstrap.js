/*global define, $, window */
   
define( "eshop/widgets/SearchBootstrap", [ "jquery", "eshop/widgets/Search" ], function($, Search) {

    function SearchBootstrap() {
    }

    SearchBootstrap.prototype.container = undefined;
    SearchBootstrap.prototype.searchWidget = undefined;

    SearchBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container =  $("eshop\\:search-widget");

        if(this.container !== null ) {
            this.searchWidget = new Search();
            this.searchWidget.initialize(this.container, listener, phrescoapi);
            this.searchWidget.render(this.container);
        }
    };

    return SearchBootstrap;
});