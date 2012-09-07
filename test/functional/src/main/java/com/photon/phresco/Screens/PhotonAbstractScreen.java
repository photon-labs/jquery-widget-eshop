package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.JQueryWidgetData;
import com.photon.phresco.uiconstants.UIConstants;

public class PhotonAbstractScreen extends BaseScreen {


	public PhotonAbstractScreen(){
	
	}
	

	protected PhotonAbstractScreen(String selectedBrowser,String applicationURL,String applicationContext,JQueryWidgetData jQueryWidgetData,UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, applicationURL,applicationContext,jQueryWidgetData,uiConstants);
	}

}
