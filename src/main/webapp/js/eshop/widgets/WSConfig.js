/*global define, $ window */

define( "eshop/widgets/WSConfig", [ "jquery" ], function($) {
	
	function WSConfig () {
	}
    
	WSConfig.prototype.WSConfigurl = {context:"eshop",host:"172.16.17.180",port:"2020",protocol:"http"};
	
	return WSConfig;
});

