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
/*global define, $ window */

define( "eshop/widgets/Category", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Category() {
    }

    Category.prototype = new Clazz();    
    Category.prototype = new Widget(); 

    Category.prototype.mainNode = undefined;
    Category.prototype.mainContent = undefined;
    Category.prototype.hideItems = undefined;
    Category.prototype.listener = undefined;
    Category.prototype.phrescoapi = undefined;
    Category.prototype.api = undefined;

    Category.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Category", this, "onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Category.prototype.setMainContent = function() {

	    var mainContent = $('<section id="submenu">'),
        self = this,
        currentName = 'name',
        currentID = 'id',
        navUL = $('<ul></ul>');
		this.api.getCategories(function(jsonObject){
			var productList = jsonObject,
			totalCategories = productList.category.length,
            i, category, categoryId, lis;

			for (i = 0; i < totalCategories; i++) {
				category = productList.category[i];
                categoryId = category.id;
                lis = $('<li><span><a href="javascript:void(0);">' + category[currentName] + '</a></span></li>'); 
                self.addFunction(lis, category[currentID], self);
				navUL.append(lis);
			}
		});

        mainContent.append(navUL);
        this.mainContent = mainContent;
    };

    Category.prototype.renderUI = function() {
        this.setMainContent();
        this.mainContent.show();
        return this.mainContent;
    };
	
	//For Test
	Category.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Category.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };
    
    Category.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    Category.prototype.addFunction = function(lis, category, self){
        $(lis).bind('click', {categoryId : category, searchCriteria : null} , function(event){

            self.hideItems = ['ProductDetails','ShoppingCart','OrderFormView','OrderForm','Login','OrderSuccess','Contactus','Aboutus','Register','OrderHistory','LoginSuccess','RegisterSuccess'];
            self.phrescoapi.hideWidget(self.hideItems);

            self.hideItems = ['slider','wrapper'];
            self.phrescoapi.sliderWrapperShowHide(false, self.hideItems);
            
            self.listener.publish(event,"Products",[event.data]);
            self.listener.publish(event,"NewProducts",[event.data]);
            self.listener.publish(event,"MyCart",[event.data]);
        });
    };

    return Category;
});

