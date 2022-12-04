/*
 * Copyright (c) 2010-2022 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
const editorData = {
	id: "dsm",
	label: "Database Schema Modeler",
	factory: "frame",
	region: "center",
	link: "../ide-schema/modeler.html",
	contentTypes: ["application/database-schema-model+xml"]
};
if (typeof exports !== 'undefined') {
	exports.getEditor = function () {
		return editorData;
	}
}