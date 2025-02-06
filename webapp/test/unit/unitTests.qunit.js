/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"customer_app_freestyle/customer_app_freestyle/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
