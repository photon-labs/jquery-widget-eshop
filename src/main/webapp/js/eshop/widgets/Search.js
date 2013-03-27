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

define( "eshop/widgets/Search", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Search() {
    }

    Search.prototype = new Clazz();    
    Search.prototype = new Widget(); 

    Search.prototype.mainNode = undefined;
    Search.prototype.mainContent = undefined;
    Search.prototype.phrescoapi = undefined;
    Search.prototype.listener = undefined;

    Search.prototype.initialize = function(container, listener, phrescoapi) {
        listener.subscribe("Search",this,"onHashChange");
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.mainNode =container;
    };

    Search.prototype.setMainContent = function() {
        var self = this, 
		mainContent = $('<div id="header" class="top_head"></div>'),
        mainContent1 = $('<div class="logo"/></div>'),
        navUL = $('<a href="#"><img src="images/eshop/logo.png" title="Phresco" alt="Phresco" /></a>'),
        liList = $('<section id="search"></section>'),
		serachForm = $('<form action="#" onsubmit="return false;" method="get"><input type="text" id="searchText" placeholder="Search" name="q"><input type="image" src="images/eshop/searchicon.png" width="20" height="20"  alt="searchicon" class="searchbtn"></form>');
 
        $('.searchbtn').live('click', function (event) {
            var data = {categoryId:null,searchCriteria:$('#searchText').val()} ;
            self.listener.publish(event,"Products",[data]);
            $('#searchText').val('');
        });

        liList.append(serachForm);
        mainContent1.append(navUL);
		mainContent.append(mainContent1);
        mainContent.append(liList);
        self.mainContent = mainContent;
    };

    Search.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };

    Search.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    Search.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return Search;
});