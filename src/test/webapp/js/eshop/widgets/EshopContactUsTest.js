/*global require */

require(  [ "jquery", "eshop/widgets/Contactus"], function($, Contactus) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testContactUsSuccess = QUnit.test, testContactUsFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Contact-Us
	 */
	 module("Contactus.js;Contactus");
	test("Test Contactus with same text.", function() {
		var contactus, output1, output2, mainContent, aboutus, selection, divleft, h3title, contactdescrip, h4title, ptag, cleardiv;
		
		contactus = new Contactus();
		output1 = contactus.testRenderUI();
		
		mainContent = $('<div></div>');
        aboutus = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        h3title = $('<h3> Contact Us </h3>');
        contactdescrip = $('<div class="contactdescrip">');
        h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>');
        ptag =  $('<p>MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>');
        cleardiv = $('<div class="clear"></div>');         
        contactdescrip.append(h4title);
        contactdescrip.append(ptag);
        divleft.append(h3title);
        divleft.append(contactdescrip);
        divleft.append(cleardiv);
        selection.append(divleft);
        aboutus.append(selection);
        mainContent.append(aboutus);
		
		output2 = mainContent;
		equal(output1.html(), output2.html(), "Contactus case Success");
	}); 
	
	test("Test Contactus with different text.", function() {
		var contactus, output1, output2, mainContent, aboutus, selection, divleft, h3title, contactdescrip, h4title, ptag, cleardiv;
		
		contactus = new Contactus();
		output1 = contactus.testRenderUI();
		
		mainContent = $('<div></div>');
        aboutus = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        h3title = $('<h3> Contact Us </h3>');
        contactdescrip = $('<div class="contactdescrip">');
        /* h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>'); */
        ptag =  $('<p>MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>');
        cleardiv = $('<div class="clear"></div>');         
        /* contactdescrip.append(h4title); */
        contactdescrip.append(ptag);
        divleft.append(h3title);
        divleft.append(contactdescrip);
        divleft.append(cleardiv);
        selection.append(divleft);
        aboutus.append(selection);
        mainContent.append(aboutus);
		
		output2 = mainContent;
		
		notEqual(output1.html(), output2.html(), "Contactus case Failure");
	}); 
});