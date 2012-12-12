package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.JQueryWidgetData;
import com.photon.phresco.uiconstants.UIConstants;


public class WelcomeScreen extends PhotonAbstractScreen {
	public WelcomeScreen(String selectedBrowser,String selectedPlatform, String applicationURL,
			String applicationContext,JQueryWidgetData jQueryWidgetData, UIConstants uiConstants)
			throws InterruptedException, IOException, Exception {
		super(selectedBrowser,selectedPlatform, applicationURL, applicationContext,
				jQueryWidgetData, uiConstants);

	}

	

}
