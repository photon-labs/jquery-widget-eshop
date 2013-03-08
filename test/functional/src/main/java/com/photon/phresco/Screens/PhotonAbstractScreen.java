package com.photon.phresco.Screens;

import java.io.IOException;


import com.photon.phresco.uiconstants.YUIWidgetData;
import com.photon.phresco.uiconstants.UIConstants;

public class PhotonAbstractScreen extends BaseScreen {


	public PhotonAbstractScreen(){
	
	}
	

	protected PhotonAbstractScreen(String selectedBrowser,String selectedPlatform,String applicationURL,String applicationContext,YUIWidgetData YUIWidgetData,UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, selectedPlatform,applicationURL,applicationContext,YUIWidgetData,uiConstants);
	}

}
