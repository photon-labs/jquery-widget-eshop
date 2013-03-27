/*
 * PHR_jquerywidget
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global define, $, window */

define( "eshop/widgets/OrderSuccess", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function OrderSuccess() {
    }

    OrderSuccess.prototype = new Clazz();    
    OrderSuccess.prototype = new Widget(); 

    OrderSuccess.prototype.mainNode = undefined;
    OrderSuccess.prototype.mainContent = undefined;
    OrderSuccess.prototype.listener = undefined;
    OrderSuccess.prototype.api = undefined;
    OrderSuccess.prototype.phrescoapi = undefined;

    OrderSuccess.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("OrderSuccess", this, "onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    OrderSuccess.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'),
        topH3 = $('<h3> Computers</h3>'),
        productContainer = $('<div class="productcontainer">'),
		divfirst = $('<div>'),
		msgh4 = $('<h4 class="descrip"> Success Messages</h4>'),
		message = $('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
		divfirst.append(msgh4);
		divfirst.append(message);
		productContainer.append(divfirst);
        mainContent.append(topH3);  
        mainContent.append(productContainer);
        this.mainContent = mainContent;
    };

    OrderSuccess.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	OrderSuccess.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    OrderSuccess.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    OrderSuccess.prototype.hideWidget = function() {
        this.mainNode.hide();
    };

    return OrderSuccess;
});
