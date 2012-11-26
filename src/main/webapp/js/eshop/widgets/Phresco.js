/*global define, $, window, jsonPath */

define( "eshop/widgets/Phresco", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Phresco() {
    }

    Phresco.prototype = new Clazz();    
    Phresco.prototype = new Widget(); 

    Phresco.prototype.mainNode = undefined;
    Phresco.prototype.mainContent = undefined;
    Phresco.prototype.productArray = undefined;
    Phresco.prototype.self = undefined;
    Phresco.prototype.orderDetail = undefined;
    Phresco.prototype.register = undefined;
    Phresco.prototype.registerdata = undefined;
    Phresco.prototype.login = undefined;
    Phresco.prototype.logindata = undefined;
    Phresco.prototype.pricequantity = undefined;
    Phresco.prototype.listener = undefined;
    Phresco.prototype.api = undefined;

    Phresco.prototype.initialize = function(listener, api) {
		this.productArray = [];
        this.orderDetail = {};
        this.register = {};
        this.registerdata = {};
        this.login = {};
        this.logindata = {};
        this.pricequantity = {};
        this.listener = listener;
        this.self = this;
        this.api = api;
    };
    
	Phresco.prototype.showShoppingCart = function(data) {
        var isProdExist = false, i;

        for (i = 0; i < this.productArray.length; i++) {
            if(this.productArray[i].productId === data.productId){
                isProdExist = true;
                break;
            }
        }

        if(!isProdExist) {
            this.productArray.push(data);
        }
	};

    Phresco.prototype.removeShoppingCart = function(productid) {
        var i;
         for (i = 0; i < this.productArray.length; i++) {
            if(this.productArray[i].productId === productid){
                this.productArray.splice(i,1);
                break;
            }
        }
    };
    
    Phresco.prototype.sliderWrapperShowHide = function(bCheck, hideItems){

        $.each(hideItems,function(){

            if(bCheck === true){
                $("#" + this).show();
            }
            else{
                $("#" + this).hide();
            }
        });
    };

    Phresco.prototype.showSubmitOrder = function() {
        
        var orderFormFields = ["email", "firstName", "lastName","company", "address1", "address2","city","state","country","postCode", "phoneNumber", "paymentmethod_0", "cardNumber", "securityNumber", "nameOnCard"];
        this.orderDetail = {};
        this.orderDetail.email = $("#email").val();
        this.orderDetail.firstName =$("#firstName").val();
        this.orderDetail.lastName = $("#lastName").val();
        this.orderDetail.company = $("#company").val();
        this.orderDetail.address1 =  $("#address1").val();
        this.orderDetail.address2 =  $("#address2").val();
        this.orderDetail.city = $("#city").val();
        this.orderDetail.state = $("#state").val();
        this.orderDetail.country =  $("#country").val();
        this.orderDetail.postcode = $("#postCode").val();
        this.orderDetail.phonenumber =  $("#phoneNumber").val();
        this.orderDetail.cardnumber =  $("#cardNumber").val();
        this.orderDetail.securitynumber =  $("#securityNumber").val();
        this.orderDetail.nameoncard =  $("#nameOnCard").val();
        this.orderDetail.comments =  $("#comments").val();

        return (this.validateFormFields(orderFormFields));
    };

    Phresco.prototype.validateFormFields = function (validateFormFields) {
        var fieldSet = this.getFieldset(),
        fieldsLength = fieldSet.length,
        i, field, jsonField, fieldObj, id, type, value, errMessage, errId, text,
        regex, character;

        for (i = 0; i < validateFormFields.length; i++)  {  
            field = validateFormFields[i];
            jsonField = "$." + field;
            fieldObj = jsonPath(fieldSet, jsonField);
            
            if (fieldObj[0] !== undefined && "TRUE" === fieldObj[0].mandatory) {
                id = fieldObj[0].fieldId;
                type = fieldObj[0].type;                        
                value = $(id).val();
                errMessage = id+"_err";
                errId = id+"_err_div";
                
                 if ($.trim(value) === "") {
                    text = id.split("#");
                    $(errMessage).html("please enter "+ text[1]);
                    $(errId).addClass("error");
					$(id).val("");
                    $(id).focus();
                    return false;
                }
                else{
                    if(value !== "" && type === "EMAIL") {
                        regex = /^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$/;
                        if (!regex.test(value)) {
                            $(errMessage).html("please enter valid email id ");
                            $(errId).addClass("error");
                            $(id).focus();
                          return false;
                        } 
                        $(errMessage).html('');
                        $(errId).removeClass("error");
                    }
                    else if(value !== "" && type === "TEXT"){ 
                        character = /^[a-zA-Z\s]+$/;
                        if (!character.test(value)) {
                            $(errMessage).html("please enter character only");
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        $(errMessage).html('');
                        $(errId).removeClass("error");
                    }
                     else if(value !== "" && type === "STRING"){ 
                        character = /^[a-zA-Z0-9\s\^,\^.,\^#,\^(,\^)]+$/;
                        if (!character.test(value)) {
                            $(errMessage).html("please enter character and number only");
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        $(errMessage).html('');
                        $(errId).removeClass("error");
                    }
                    else if(value !== "" && type === "NUMBER"){
                        character = /^[0-9\s\^+\^\-]+$/;
                        if (!character.test(value)) {
                            $(errMessage).html("please enter correct format");
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        $(errMessage).html('');
                        $(errId).removeClass("error");
                    }                    
                }
            }
        }
        return true;
    };

    Phresco.prototype.getFieldset = function () {
       var fieldset = {"email":{"fieldId":"#email",
                       "type":"EMAIL","mandatory":"TRUE"},
                       "firstName":{"fieldId":"#firstName","type":"TEXT","mandatory":"TRUE"},
                       "lastName":{"fieldId":"#lastName","type":"TEXT","mandatory":"TRUE"},
                       "company":{"fieldId":"#company","type":"TEXT","mandatory":"TRUE"},
                       "address1":{"fieldId":"#address1","type":"STRING","mandatory":"TRUE"},
                       "address2":{"fieldId":"#address2","type":"STRING","mandatory":"TRUE"},
                       "city":{"fieldId":"#city","type":"TEXT", "mandatory":"TRUE"},
                       "state":{"fieldId":"#state","type":"TEXT","mandatory":"TRUE"},
                       "country":{"fieldId":"#country","type":"TEXT","mandatory":"TRUE"},
                       "postCode":{"fieldId":"#postCode","type":"STRING","mandatory":"TRUE"},
                       "phoneNumber":{"fieldId":"#phoneNumber","type":"NUMBER","mandatory":"TRUE"},
                       "paymentmethod":{"fieldId":"#paymentmethod_0","type":"OPTION","mandatory":"TRUE"},
                       "cardNumber":{"fieldId":"#cardNumber","type":"NUMBER","mandatory":"TRUE"},
                       "securityNumber":{"fieldId":"#securityNumber","type":"PASSWORD","mandatory":"TRUE"},
                       "nameOnCard":{"fieldId":"#nameOnCard","type":"TEXT","mandatory":"TRUE"}};
       return fieldset;
    };

    Phresco.prototype.userRegister = function () {
        var registerFields = ["regfirstname", "reglastname","regemail","regpassword", "regphonenumber"];
       
        this.register = {};
        this.register.firstName = $("#regfirstname").val();
        this.register.lastName = $("#reglastname").val();
        this.register.email = $("#regemail").val();
        this.register.password = $("#regpassword").val();
        this.register.phoneNumber = $("#regphonenumber").val();
        this.registerdata = {};
        this.registerdata.register = this.register;
        return (this.registerFormFields(registerFields));
    };

    Phresco.prototype.registerFormFields = function (registerFields) {
        var fieldSet, fieldsLength, i, field, jsonField, fieldObj, 
        id, type, value, errMessage, errId, text, textmsg, regex, character; 

        if(registerFields[0] === "logEmail"){
            fieldSet = this.getLoginFieldset();
        } else {
            fieldSet = this.getregFieldset();
        } 
        
        fieldsLength = fieldSet.length;

        for (i = 0; i < registerFields.length; i++)  {  
            field = registerFields[i];
            jsonField = "$." + field;
            fieldObj = jsonPath(fieldSet, jsonField);
            if ("TRUE" === fieldObj[0].mandatory) {
                id = fieldObj[0].fieldId;
                type = fieldObj[0].type;
                value = $(id).val();
                errMessage = id+"_err";
                errId = id+"_err_div";
                 if ($.trim(value) === "") {
                    text = id.split("#");
                    textmsg = text[1].split("g");
                    $(errMessage).html("Please enter " + textmsg[1]);
                    $(errId).addClass("error");
					$(id).val("");
                    $(id).focus();
                    return false;
                }
                
                else{
                    if(value !== "" && type === "EMAIL") {
                        regex = /^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$/;
                        if (!regex.test(value)) {
                            $(errMessage).html("please enter valid email id ");
                            $(errId).addClass("error");
                            $(id).focus();
                          return false;
                        } 
                    }
                    else if(value !== "" && type === "TEXT"){
                        character =  /^[a-zA-Z\s]+$/;
                        if (!character.test(value)) {
                            $(errMessage).html("please enter character only");
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                    }
                    else if(value !== "" && type === "NUMBER"){
                        character =  /^[0-9\s]+$/;
                        if (!character.test(value)) {
                            $(errMessage).html("please enter number only");
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                    }                    
                    
                }
                $(errMessage).html('');
                $(errId).removeClass("error");
            }
        }
        return true;
    };

    Phresco.prototype.userLogin = function () {
        var loginFields = ["logEmail","logpassword"];
        this.login = {};
        this.login.loginEmail = $("#logEmail").val();
        this.login.password = $("#logpassword").val();
        this.logindata = {};
        this.logindata.login = this.login;
        return (this.registerFormFields(loginFields));
    };

	Phresco.prototype.addRating = function (starId) { 
		var i, j;
		$("#starValue").val(starId);
		for(i=1; i<= starId; i++){
			$("#starImage_"+i).html('<img src="images/eshop/red_star.png" width="16" height="16" title="' + i + '">');
		}
		for(j=starId+1; j <= 5; j++){
			$("#starImage_"+j).html('<img src="images/eshop/white_star.png" width="16" height="16" title="' + j + '">');
		}
	};

	Phresco.prototype.submitReview = function (starId) { 

		var uid, review, currentTime, currentYear, currentMonth, currentDate, currentHours, currentMinutes, currentSeconds,
		commentDate, data;
		
		if(this.api.loginresponse.userId){
			uid = this.api.loginresponse.userId;
		} else { uid = 0; }
			
		review = {};
		review.productId = $("#productId").val();
		review.userId = uid;
		review.rating = $("#starValue").val();
		review.comment = $("#comments").val();
		currentTime = new Date();
		currentYear = new Date(currentTime).getFullYear ();
		currentMonth = new Date(currentTime).getMonth () + 1;
		currentDate = new Date(currentTime).getDate ();

		currentHours = currentTime.getHours ();
		currentMinutes = currentTime.getMinutes ();
		currentSeconds = currentTime.getSeconds ();
		
		currentHours = ( currentHours >= 10 ) ? currentHours : "0"+currentHours;
		currentMinutes = ( currentMinutes >= 10) ? currentMinutes : "0"+ currentMinutes;
		currentSeconds = ( currentSeconds >= 10) ? currentSeconds : "0"+ currentSeconds;
		
		commentDate = currentYear+'-'+currentMonth+'-'+currentDate+' '+currentHours+':'+currentMinutes+':'+currentSeconds;
		review.commentDate = commentDate;
		data = {};
		data.review = review;
		return data;
	};
	
    Phresco.prototype.priceCount = function(){
        var itemCount = 0,
        totalPrice = 0, i;
        if(this.productArray !== null && this.productArray.length > 0){
            for (i = 0; i < this.productArray.length; i++) {
                itemCount += Number(this.productArray[i].quantity);
                totalPrice += Number(this.productArray[i].quantity * this.productArray[i].price);
            }
        }
        this.pricequantity = {};
        this.pricequantity.itemCount = itemCount;
        this.pricequantity.totalPrice = totalPrice;
        return this.pricequantity;
    };

    Phresco.prototype.showOrderSuccess = function() {    
        var productQty = this.pricequantity.itemCount,          
        orderDetailget = this.orderDetail,
        productDetails = this.productArray,
        cartTotal = this.pricequantity.totalPrice,// for inserting purpose
        totalItem = this.pricequantity.itemCount,// for inserting purpose
        customerEmail = this.orderDetail.email,// for inserting purpose 
        //userId = apiRef.get("userId", userId),// for inserting purpose 
        userId = this.api.loginresponse.userId,
        comments = this.orderDetail.comments;// for inserting purpose
        
        this.api.postOrder(orderDetailget, customerEmail, comments, productDetails, cartTotal, totalItem, userId);
    };

    Phresco.prototype.getregFieldset = function () {
        var registerfieldset = {"regemail":{"fieldId":"#regemail","type":"EMAIL","mandatory":"TRUE"},"regfirstname":{"fieldId":"#regfirstname","type":"TEXT","mandatory":"TRUE"},"reglastname":{"fieldId":"#reglastname","type":"TEXT","mandatory":"TRUE"},"regpassword":{"fieldId":"#regpassword","type":"PASSWORD","mandatory":"TRUE"},"regphonenumber":{"fieldId":"#regphonenumber","type":"NUMBER","mandatory":"TRUE"}};
        return registerfieldset;
    };

    Phresco.prototype.getLoginFieldset = function () {
        var loginfieldset = {"logEmail":{"fieldId":"#logEmail","type":"EMAIL","mandatory":"TRUE"},"logpassword":{"fieldId":"#logpassword","type":"PASSWORD","mandatory":"TRUE"}};
        return loginfieldset;
    };
      
    Phresco.prototype.hideWidget = function(hideItems){
        var self = this;
        $.each(hideItems,function(){
            self.listener.unsubscribe(this + "Hide","hideWidget");
        });
    };

    return Phresco;
});
