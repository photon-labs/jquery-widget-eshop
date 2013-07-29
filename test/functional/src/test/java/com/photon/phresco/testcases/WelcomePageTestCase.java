/**
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
package com.photon.phresco.testcases;

import java.io.IOException;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.model.Jquerywidgetsdata.Jquerywidget;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;

@SuppressWarnings("unused")
public class WelcomePageTestCase {

	private  UIConstants uiConstants;
	private  PhrescoUiConstants phrescoUIConstants;
	private  WelcomeScreen welcomeScreen;
	private  String methodName;
	private  String selectedBrowser;

	// private Log log = LogFactory.getLog(getClass());
	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public  void setUp(String browser, String platform) throws Exception {
		try {
			phrescoUIConstants = new PhrescoUiConstants();
			uiConstants = new UIConstants();
			String selectedBrowser = browser;
			String selectedPlatform = platform;
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
	       String applicationURL = phrescoUIConstants.getProtocol() + "://"
					+ phrescoUIConstants.getHost() + ":" + phrescoUIConstants.getPort()
					+ "/";
			welcomeScreen = new WelcomeScreen(selectedBrowser,selectedPlatform, applicationURL,
					phrescoUIConstants.getContext(),  uiConstants);
			
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}

	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			Assert.assertNotNull(welcomeScreen);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAudioDevicesAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			
			welcomeScreen.AudioDevices(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheCamerasAddToCart(Jquerywidget jquerywidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.Cameras(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheVideoGamesAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTelevisionAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.Television(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTabletsAddToCart(Jquerywidget jquerywidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.Tablets(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMP3PlayersAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.MP3Players(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMoviesAndMusicAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMobilePhonesAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAccessoriesAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.Accessories(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jquerywidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheComputersAddToCart(Jquerywidget jquerywidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.Computers(methodName);
			welcomeScreen.billingInfo(methodName,jquerywidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}
	
	@AfterTest
	public  void tearDown() {
		welcomeScreen.closeBrowser();
	}

	
	
}