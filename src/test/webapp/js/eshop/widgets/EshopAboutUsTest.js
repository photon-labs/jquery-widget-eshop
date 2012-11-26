/*global require */

require(  [ "jquery", "eshop/widgets/Aboutus"], function($, Aboutus) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testContactUsSuccess = QUnit.test, testContactUsFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Contact-Us
	 */
	module("Aboutus.js;Aboutus");
	test("Test Aboutus with same text.", function() {
		var aboutus, output1, output2, mainContent, about, selection, divleft, h3title, contactdescrip, h4title, ptag, cleardiv;
		
		aboutus = new Aboutus();
		output1 = aboutus.testRenderUI();
		
		mainContent = $('<div></div>');
        about = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        h3title = $('<h3> About Us </h3>');           
        contactdescrip = $('<div class="contactdescrip">');
        h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>');
        ptag =  $('<p>Dummy content for Contact The 11.6" MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>');
        cleardiv = $('<div class="clear"></div>');         

        contactdescrip.append(h4title);
        contactdescrip.append(ptag);
        divleft.append(h3title);
        divleft.append(contactdescrip);
        divleft.append(cleardiv);
        selection.append(divleft);
        about.append(selection);
        mainContent.append(about);
		
		output2 = mainContent;
		
		equal(output1.html(), output2.html(), "Aboutus case Success");
	}); 
	
	test("Test Aboutus with different text.", function() {
		var aboutus, contactus, output1, output2, mainContent, about, selection, divleft, h3title, contactdescrip, h4title, ptag, cleardiv;
		
		aboutus = new Aboutus();
		output1 = aboutus.testRenderUI();
		
		mainContent = $('<div></div>');
        about = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        h3title = $('<h3> About Us </h3>');           
        contactdescrip = $('<div class="contactdescrip">');
        /* h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>'); */
        ptag =  $('<p>Dummy content for Contact The 11.6" MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>');
        cleardiv = $('<div class="clear"></div>');         

        /* contactdescrip.append(h4title); */
        contactdescrip.append(ptag);
        divleft.append(h3title);
        divleft.append(contactdescrip);
        divleft.append(cleardiv);
        selection.append(divleft);
        about.append(selection);
        mainContent.append(about);
		
		output2 = mainContent;
		
		notEqual(output1.html(), output2.html(), "Aboutus case Failure");
	}); 
});