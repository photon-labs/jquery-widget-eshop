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
/*global require */

require([ "jquery", "eshop/widgets/WSConfig", "eshop/widgets/EShopAPI",  "eshop/widgets/Category", "eshop/widgets/Phresco" ], function($, WSConfig, EShopAPI, Category, Phresco) {

	//var equal = QUnit.equal, expect = QUnit.expect, test = QUnit.test, wsconfig;

	/**
	 * Test that the setMainContent method sets the text in the category-widget
	 */
	 module("Category.js;Category");
	asyncTest("category-widget unite test case passed.", function() {
		var category, initeObj, listener, api, phresco, mainContent, currentName, currentID, navUL, output1, output2, wsconfig, wsURL;

		// Setup view and call method under test
		
		category = new Category();
		wsconfig = new WSConfig();
		api = new EShopAPI();		
		
		wsconfig.getEnvironment(function(data){
			api.initialize(data); 
			category.api = api;
		});	
		
		setTimeout(function() {
			 start();
			output1 = category.testRenderUI();

			mainContent = $('<section id="submenu">');
			currentName = 'name';
			currentID = 'id';
			navUL = $('<ul></ul>');

			api.getCategories(function(jsonObject){

				var productList = jsonObject,
				totalCategories = productList.category.length,
				i, category, categoryId, lis;

				for (i = 0; i < totalCategories; i++) {
					category = productList.category[i];
					categoryId = category.id;
					lis = $('<li><span><a href="javascript:void(0);">' + category[currentName] + '</a></span></li>'); 
					navUL.append(lis);
				}
			});

			output2 = mainContent.append(navUL);

			// Expect that the text was set on the expected element
			equal(output1.html(), output2.html(),	"Expected text not set in category-widget");
		}, 1000);
	});
});