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

define( "eshop/widgets/Contactus", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Contactus() {
    }

    Contactus.prototype = new Clazz();    
    Contactus.prototype = new Widget(); 

    Contactus.prototype.mainNode = undefined;
    Contactus.prototype.mainContent = undefined;
    Contactus.prototype.listener = undefined;

    Contactus.prototype.initialize = function(container, listener) {
        listener.subscribe("Contactus",this,"onHashChange");
        this.mainNode = container; 
        this.listener = listener;
    };

    Contactus.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'),
        aboutus = $('<div id="maincontact">'),
        selection = $('<section id="contact">'),
        divleft = $('<div id="">'),
        h3title = $('<h3> Contact Us </h3>'),
        contactdescrip = $('<div class="contactdescrip">'),
        h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>'),
        ptag =  $('<p>MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>'),
        cleardiv = $('<div class="clear"></div>');         
        contactdescrip.append(h4title);
        contactdescrip.append(ptag);
        divleft.append(h3title);
        divleft.append(contactdescrip);
        divleft.append(cleardiv);
        selection.append(divleft);
        aboutus.append(selection);
        mainContent.append(aboutus);
        this.mainContent = mainContent;
    };

    Contactus.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
	
	//For Test
	Contactus.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Contactus.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    Contactus.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return Contactus;
});
