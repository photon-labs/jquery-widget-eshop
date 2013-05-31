package com.photon.phresco.uiconstants;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.testng.ITestContext;
import org.testng.annotations.DataProvider;


import com.photon.phresco.model.Jquerywidgetsdata.Jquerywidget;
import com.photon.phresco.model.Jquerywidgetsdata;



public class TestDataProvider<E> {

	
	@DataProvider(name = "jquerywidgetdata")
	public static Iterator<Object[]> synonymsDataProvider (ITestContext context) throws JAXBException {

		String inputFile = context.getCurrentXmlTest().getParameter("jquerywidgetdataXml");
		Jquerywidgetsdata jquerywidget = getFileContentList(inputFile, Jquerywidgetsdata.class);
		List<Jquerywidget> jquerywidgets = jquerywidget.getJquerywidget();
		return getDataObject(jquerywidgets);

	}

	
	private static <T> Iterator<Object[]> getDataObject(List<T> objList) {
		List<Object[]> dataToBeReturned = new ArrayList<Object[]>();
		for (T userData : objList) {
			dataToBeReturned.add(new Object[] { userData } );
		}

		return dataToBeReturned.iterator();
	}
	
	

	@SuppressWarnings("unchecked")
	private static <T> T getFileContentList(String filenamePath, Class<T> clazz) throws JAXBException {

		JAXBContext jaxbContext = JAXBContext.newInstance(clazz);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		InputStream resourceAsStream = clazz.getResourceAsStream(filenamePath);
		return (T) jaxbUnmarshaller.unmarshal(resourceAsStream);
	}
}
