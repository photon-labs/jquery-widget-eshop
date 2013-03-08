package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;

public class PhrescoUiConstants {
	private ReadXMLFile readXml;

	public String CONTEXT = "context";
	public String HOST = "host";
	public String BROWSER = "Browser";
	public String PROTOCOL = "protocol";
	public String PORT = "port";
	public String RESOLUTION="Resolution";
	/*public String ADMIN="admin_username";
	public String DEPLOY="deploy_dir";
	public String ADD_CONTEXT="additional_context";
	public String ADMINPWD="admin_password";
	public String VERSION ="version";
	public String CERTIFICATE="certificate";
	public String TYPE="type";
	public String REMOTE="remoteDeployment";*/

	public PhrescoUiConstants() {
		try {
			readXml = new ReadXMLFile();
			Field[] arrayOfField1 = super.getClass().getFields();
			Field[] arrayOfField2 = arrayOfField1;
			int i = arrayOfField2.length;
			for (int j = 0; j < i; ++j) {
				Field localField = arrayOfField2[j];
				Object localObject = localField.get(this);
				if (localObject instanceof String)
					localField
							.set(this, readXml.getValue((String) localObject));

			}
		} catch (Exception localException) {
			throw new RuntimeException("Loading "
					+ super.getClass().getSimpleName() + " failed",
					localException);
		}
	}
}