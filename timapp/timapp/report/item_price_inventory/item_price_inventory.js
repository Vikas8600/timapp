// Copyright (c) 2022, SohailAmar and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Item Price Inventory"] = {
	"filters": [
		{
			"fieldname":"item_code",
			"label": __("Item"),
			"fieldtype": "Link",
			"options": "Item"
		}
	]
};
