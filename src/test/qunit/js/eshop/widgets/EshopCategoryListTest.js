/*global require */

require([ "jquery", "./Category", "./EShopAPI", "./WSConfig", "qunit" ], function($, Category, EShopAPI, WSConfig, QUnit) {

	var equal = QUnit.equal, expect = QUnit.expect, test = QUnit.test, wsconfig;

	/**
	 * Test that the setMainContent method sets the text in the category-widget
	 */
	test("category-widget unite test case passed.", function() {

		var category, initeObj, listener, api, phresco, mainContent, currentName, currentID, navUL, output1, output2;

		// Setup view and call method under test
		category = new Category();
		api = new EShopAPI();
        wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
        category.api = api;
		//category.listener = undefined;
		//category.phrescoapi = undefined;

		output1 = category.renderUI();

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
	});
});