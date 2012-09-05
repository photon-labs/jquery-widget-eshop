/*global define, $ window */

define( "eshop/widgets/Aboutus", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Aboutus() {
    }

    Aboutus.prototype = new Clazz();    
    Aboutus.prototype = new Widget(); 

    Aboutus.prototype.mainNode = undefined;
    Aboutus.prototype.mainContent = undefined;
    Aboutus.prototype.listener = undefined;

    Aboutus.prototype.initialize = function(container, listener, phrescoapi) {
        listener.subscribe("Aboutus", this, "onHashChange");
		listener.subscribe("ShowAboutus", this, "showWidget");
        this.mainNode = container;
        this.listener = listener;
		this.phrescoapi = phrescoapi;
    };

    Aboutus.prototype.setMainContent = function() {

        var mainContent = $('<div></div>'),
        aboutus = $('<div id="maincontact">'),
        selection = $('<section id="contact">'),
        divleft = $('<div id="">'),
        h3title = $('<h3> About Us </h3>'),            
        contactdescrip = $('<div class="contactdescrip">'),
        h4title = $('<h4 class="descrip"> WELCOME TO PHRESCO </h4>'),
        ptag =  $('<p>Dummy content for Contact The 11.6" MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer.  Apple"s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer. </p> <br>'),
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

    Aboutus.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Aboutus" );
        return this.mainContent;
    };
            
    Aboutus.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.showWidget();
    };

    Aboutus.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	Aboutus.prototype.showWidget = function() {
        this.mainNode.show();
    };
    
    return Aboutus;

});
