sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('cbe.cbecompdyn.ext.controller.ObjectPageCon', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf cbe.cbecompdyn.ext.controller.ObjectPageCon
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				 
				var oModel = this.base.getExtensionAPI().getModel();


			},
			routing: {
				onAfterBinding: async function (oBindingContext) {
					 
					function generateUniqueId() {
						// Generate a random number
						var randomNumber = Math.floor(Math.random() * 1000000);

						// Get the current timestamp
						var timestamp = new Date().getTime();

						// Combine timestamp and random number to create a unique ID
						var uniqueId = timestamp + '-' + randomNumber;

						return uniqueId;
					}



					const DataGiven = {
						"Client": "ISRO - TWT",
						"Project": "TRISONIC WIND TUNNEL Project, ISRO, Vikram Sarabhai Space Centre, Thiruvananthapuram, Kerala",
						"Indent": "Awaited",
						"items": [
							{
								"itemno": "item1",
								"item_desc": "Air Storage Vessel",
								"capacity_each_in_cu_mtr": "770 Cu Mtr",
								"dia_in_mm": "4500",
								"tl_to_tl_len": "45500",
								"moc": " ",
								"design_pressure_bar": "16",
								"weights_in_kg": "1320000",
								"qty_no": "6",
								"bidders": [
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works NashikO",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Final Negotiated Price after Reverse Auction",
												"qtn_ref": "E-Mail offer dated 30-04-2019",
												"date": "30-04-2019",
												"validity": "120 days",
												"unit_rate": " 33875000",
												"unit_rate_per_kg": "154",
												"total_amt_inr": " 20,32,50,000",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 20,32,50,000",
												"RNOD": " ",
												"Custom Duty & Cess": "",
												"SGST": "",
												"IGST": "",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works NashikF",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											}

										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},


								]
							},
							{
								"itemno": "item1",
								"item_desc": "Air Storage Vessel",
								"capacity_each_in_cu_mtr": "770 Cu Mtr",
								"dia_in_mm": "4500",
								"tl_to_tl_len": "45500",
								"moc": " ",
								"design_pressure_bar": "16",
								"weights_in_kg": "1320000",
								"qty_no": "6",
								"bidders": [
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Final Negotiated Price after Reverse Auction",
												"qtn_ref": "E-Mail offer dated 30-04-2019",
												"date": "30-04-2019",
												"validity": "120 days",
												"unit_rate": " 33875000",
												"unit_rate_per_kg": "154",
												"total_amt_inr": " 20,32,50,000",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 20,32,50,000",
												"RNOD": " ",
												"Custom Duty & Cess": "",
												"SGST": "",
												"IGST": "",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											}

										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},


								]
							},
							{
								"itemno": "item1",
								"item_desc": "Air Storage Vessel",
								"capacity_each_in_cu_mtr": "770 Cu Mtr",
								"dia_in_mm": "4500",
								"tl_to_tl_len": "45500",
								"moc": " ",
								"design_pressure_bar": "16",
								"weights_in_kg": "1320000",
								"qty_no": "6",
								"bidders": [
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Final Negotiated Price after Reverse Auction",
												"qtn_ref": "E-Mail offer dated 30-04-2019",
												"date": "30-04-2019",
												"validity": "120 days",
												"unit_rate": " 33875000",
												"unit_rate_per_kg": "154",
												"total_amt_inr": " 20,32,50,000",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 20,32,50,000",
												"RNOD": " ",
												"Custom Duty & Cess": "",
												"SGST": "",
												"IGST": "",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											}

										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
										]
									},


								]
							},
							{
								"itemno": "item1",
								"item_desc": "Air Storage Vessel",
								"capacity_each_in_cu_mtr": "770 Cu Mtr",
								"dia_in_mm": "4500",
								"tl_to_tl_len": "45500",
								"moc": " ",
								"design_pressure_bar": "16",
								"weights_in_kg": "1320000",
								"qty_no": "6",
								"bidders": [
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Final Negotiated Price after Reverse Auction",
												"qtn_ref": "E-Mail offer dated 30-04-2019",
												"date": "30-04-2019",
												"validity": "120 days",
												"unit_rate": " 33875000",
												"unit_rate_per_kg": "154",
												"total_amt_inr": " 20,32,50,000",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 20,32,50,000",
												"RNOD": " ",
												"Custom Duty & Cess": "",
												"SGST": "",
												"IGST": "",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											}

										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},
									{
										"Supplier": "Artson Enginerring Ltd",
										"Location": "Nashik",
										"offers": [
											{
												"offername": "Original Offer",
												"qtn_ref": "AEL/NSK/TPL/AV/PB/16054/2018-19, Rev-1",
												"date": "11-02-2019",
												"validity": "120 days",
												"unit_rate": "39095000",
												"unit_rate_per_unit": "178",
												"total_amt_inr": " 23,45,70,000",
												"spares for 2 years": " 50,000",
												"grandtotal": " 23,46,20,000",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 23,46,20,000",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": " 27,68,51,600",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": " 23,46,20,000",
												"Per Diem rate for Supervision for Erection and commissioning": " ",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},
											{
												"offername": "Reverse Auction Offer",
												"qtn_ref": "Reverse Auction",
												"date": "15-04-2019",
												"validity": "120 days",
												"unit_rate": "35166666",
												"unit_rate_per_kg": "160",
												"total_amt_inr": " 21,09,99,996",
												"spares for 2 years": " ",
												"Packing, Marking, Forwarding & Freight": [
													"Included",
													" "
												],
												"Inspection / Testing Charges": [
													"Included",
													" "
												],
												"Documentation Charges": [
													"Included",
													" "
												],
												"Total Basic Price including packing, marking & forwarding": " 21,09,99,996",
												"RNOD": " ",
												"Custom Duty & Cess": "NA",
												"SGST": "",
												"IGST": "18%",
												"UGST": "",
												"Shipment charges from EXW to ISRO Mahendragiri": "By TPL",
												"Total Basic Price including packing, marking & forwarding, Transportation including Taxes": "",
												"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes": "",
												"Per Diem rate for Supervision for Erection and commissioning": "7500",
												"PriceBasis": "Ex-Works Nashik",
												"Point of Delivery": "Ex-Works Nashik",
												"Delivery Period": "Receipt of order, Approved MDS – 0 date; Duration : Milestone *To + 6 Weeks : Design and Drawing preparation & approval from CCOE-PESO officeTo + 12 Weeks : Material procurementTo + 24 Weeks : Manufacturing, NDT clearanceTo + 26 Weeks : Surface preparation, primer painting To + 27 Weeks : Dispatch of 1st consignment ( 6 Pieces )  To + 31 Weeks : Dispatch of 2nd consignment ( 6 Pieces )  ",
												"Payment Terms": "10% Total Contracts Price released after: a) Corporate Guarantee for 10% of Total Contract Price. b) Correct Proforma invoice. c) Corporate Performance Guarantee (10% of Total Contract Price) within 15 days from PO date. d) Unconditional acceptance of Purchase Order. 10% Total Contract Price released after design and drawing approval and Corporate Guarantee submission. 20% Total Contracts Price released within 30 days upon receipt of major materials (Plates) and Corporate Guarantee. 30% of Total Contract Price payable within 30 days after dispatch. 10% of Total Contract Price payable within 30 days upon successful Hydrotest at site. 15% of Total Contract Price payable within 30 days upon successful NDT at site. 5% of Total Contract Price payable within 30 days upon handing over of Tank, submission of as-built Drawings, and Final Document Dossier. Payments released upon completion of approved milestones through NEFT/RTGS/Bank to Bank transfer, with certified invoices referencing TPL job no. OG-500047-ISRO-SIET. Commercial Invoices consigned to M/s Tata Projects Limited, Floor 2, Transocean House, Lake Boulevard Road, Hiranandani Business Park, Powai, Mumbai-400 076, India. Bank Guarantees per TPL formats sent to TPL, RO Mumbai at Powai.",
												"Liquidated Damages": "0.5% (Half percent) of Total Contract Price, subject to a maximum of 5% (Five percent) of the Total Contract Price, for each calendar week of delay or part thereof. ",
												"Warranty / Defect Liability Period": "Warranty for the performance of all the Ordered items/packages under the Contract, against any manufacturing defects, for the period of 18 (Eighteen) months from the date of issue of certificate of completion and final acceptance in writing by TPL and/or ISRO or 36 (Thirty-Six) months from the date of last supply at project site, whichever is earlier.  During this period, all the relevant cost towards repair and/or replacement of defective parts/items shall be borne by Supplier.  Any part / item repaired and/or replaced shall be under a further warranty for a period of 12 months from the date of acceptance of such repaired and/or replaced part/ item. ",
												"CPBG": "Corporate Guarantee shall be provided valid until the expiry of Defect Liability Period with further claim period validity of Six (06) months.",
												"Contact Person": "Mr.Prashant Bachhav / Mr.Saket Mathur",
												"Contact No.": "Mr.Prashant Bachhav, Mob No:9860252880/ Mr.Saket Mathur ,Mob No:7095557701",
												"Order can be given to……...": "M/s Artson Engineering Ltd",
												"Techncially Approved": "Technically Accepted",
												"Approved Vendor": "Yes"
											},


										]
									},


								]
							},
						]
					};


					//  
					// //mainHbox
					// var omainHBox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();

					// //indent
					// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[1].setText(`${DataGiven.Indent}`);
					// //Project
					// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setText(`${DataGiven.Project}`);
					// //indent
					// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[1].setText(`${DataGiven.Client}`);

					// var itemstable = omainHBox.getItems()[0].getItems()[2];

					// for (let i = 0; i < DataGiven.items.length; i++) {
					// 	itemstable.addItem(new sap.m.ColumnListItem(`${"collistitem" + (i + 1)}`));
					// 	let columnlist = itemstable.getItems()[i];

					// 	let itemdesc = new sap.m.Text(`${"itemdesc" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].item_desc}`,
					// 		tooltip: `${DataGiven.items[i].item_desc}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(itemdesc);

					// 	let capacity_each_in_cu_mtr = new sap.m.Text(`${"capacity_each_in_cu_mtr" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].capacity_each_in_cu_mtr}`,
					// 		tooltip: `${DataGiven.items[i].capacity_each_in_cu_mtr}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(capacity_each_in_cu_mtr);

					// 	let dia_in_mm = new sap.m.Text(`${"dia_in_mm" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].dia_in_mm}`,
					// 		tooltip: `${DataGiven.items[i].dia_in_mm}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(dia_in_mm);

					// 	let tl_to_tl_len = new sap.m.Text(`${"tl_to_tl_len" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].tl_to_tl_len}`,
					// 		tooltip: `${DataGiven.items[i].tl_to_tl_len}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(tl_to_tl_len);

					// 	let moc = new sap.m.Text(`${"moc" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].moc}`,
					// 		tooltip: `${DataGiven.items[i].moc}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(moc);

					// 	let design_pressure_bar = new sap.m.Text(`${"design_pressure_bar" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].design_pressure_bar}`,
					// 		tooltip: `${DataGiven.items[i].design_pressure_bar}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(design_pressure_bar);

					// 	let weights_in_kg = new sap.m.Text(`${"weights_in_kg" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].weights_in_kg}`,
					// 		tooltip: `${DataGiven.items[i].weights_in_kg}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(weights_in_kg);

					// 	let qty_no = new sap.m.Text(`${"qty_no" + (i + 1)}`, {
					// 		text: `${DataGiven.items[i].qty_no}`,
					// 		tooltip: `${DataGiven.items[i].qty_no}`,
					// 		wrapping: false
					// 	})
					// 	columnlist.addCell(qty_no);
					// }

					// var Scrollhbox = omainHBox.getItems()[1].getContent()[0];

					// for (let i = 0; i < DataGiven.items[0].bidders.length; i++) {
					// 	 
					// 	Scrollhbox.addItem(new sap.m.VBox(`${"sectionvbox" + (i + 1)}`))
					// 	let curr_sectionvbox = Scrollhbox.getItems()[i];

					// 	curr_sectionvbox.addStyleClass("BorderClass");

					// 	curr_sectionvbox.addItem(new sap.m.VBox(`${"vboxsuppnameloc" + (i + 1)}`));
					// 	curr_sectionvbox.addItem(new sap.m.HBox(`${"hbmiddlesection" + (i + 1)}`));
					// 	curr_sectionvbox.addItem(new sap.m.VBox(`${"vbox_last_section" + (i + 1)}`));


					// 	//3rd vbox final one
					// 	var vbox_last_section = curr_sectionvbox.getItems()[2];

					// 	var combobox = new sap.m.ComboBox(`${"combobox" + (i + 1)}`, {
					// 		change: function (oEvent) {
					// 			 
					// 			for (let index = 0; index < oEvent.getSource().getParent().getItems()[1].getItems().length; index++) {
					// 				if (oEvent.getSource().getItems()[index].getText() == oEvent.getSource().getValue()) {
					// 					oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(true);
					// 				}
					// 				else {
					// 					oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(false);
					// 				}

					// 			}
					// 		}
					// 	});
					// 	vbox_last_section.addItem(combobox);

					// 	var hboxcombo = new sap.m.HBox(`${"hboxcombo" + (i + 1)}`);
					// 	vbox_last_section.addItem(hboxcombo);

					// 	var last_hcombobox = vbox_last_section.getItems()[1];

					// 	// for (let l = 0; l < DataGiven.items[0].bidders.length; l++) {
					// 	// 	var 

					// 	// }

					// 	//vbox1
					// 	let vboxsuppnameloc = curr_sectionvbox.getItems()[0];


					// 	//Supplier
					// 	vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierName" + (i + 1)}`, {
					// 		text: `${DataGiven.items[0].bidders[i].Supplier}`
					// 	}));

					// 	//Location
					// 	vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierLocation" + (i + 1)}`, {
					// 		text: `${DataGiven.items[0].bidders[i].Location}`
					// 	}));

					// 	vboxsuppnameloc.addStyleClass("v11spaceBetweenclass");


					// 	//Hbox middle
					// 	 
					// 	var hbmiddlesection = curr_sectionvbox.getItems()[1];

					// 	//Loop for Vboxs
					// 	for (let k = 0; k < DataGiven.items[0].bidders[i].offers.length; k++) {
					// 		 
					// 		hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`));

					// 		var vbmiddlesection = hbmiddlesection.getItems()[k];
					// 		vbmiddlesection.addStyleClass("customVBox");

					// 		vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

					// 		var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

					// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].qtn_ref}`,
					// 		}));
					// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].date}`
					// 		}));
					// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_validity" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].validity}`
					// 		}));
					// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_cylindrical_space" + generateUniqueId()}`, {
					// 			text: ""
					// 		}));
					// 		vbmiddlesection_innervb.addStyleClass("vbmiddlesectionclass");


					// 		/////////
					// 		// var innerHbox = new sap.m.HBox(`${"innerHBox"+generateUniqueId()}`);

					// 		// vbmiddlesection.addItem(innerHbox);

					// 		// var hboxitems = vbmiddlesection.getItems()[1];

					// 		var inner_vbox = new sap.m.VBox(`${"innervbox" + generateUniqueId()}`);
					// 		vbmiddlesection.addItem(inner_vbox);
					// 		// hboxitems.addItem(inner_vbox);

					// 		inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].offername}`,
					// 			design: "Bold"
					// 		}));

					// 		var oTable = new sap.m.Table({
					// 			id: `${"offer" + generateUniqueId()}`,
					// 			class: "tableBorder",
					// 			growing: true,
					// 			growingThreshold: 20,
					// 			width: "100%",
					// 			fixedLayout: false
					// 		});

					// 		oTable.addStyleClass("tableBorder");

					// 		inner_vbox.addItem(oTable);

					// 		// Define columns
					// 		 
					// 		var oColumn1 = new sap.m.Column({
					// 			id: `${"unit_rate" + generateUniqueId()}`,
					// 			header: new sap.m.Text({ text: "unit rate(INR)", wrapping: false })
					// 		});

					// 		var oColumn2 = new sap.m.Column({
					// 			id: `${"unit_rate_per" + generateUniqueId()}`,
					// 			header: new sap.m.Text({ text: "unit rate/KG", wrapping: false })
					// 		});

					// 		var oColumn3 = new sap.m.Column({
					// 			id: `${"total_amt_offer" + generateUniqueId()}`,
					// 			header: new sap.m.Text({ text: "Total Amount (INR)", wrapping: false })
					// 		});

					// 		// Add columns to the table
					// 		oTable.addColumn(oColumn1);
					// 		oTable.addColumn(oColumn2);
					// 		oTable.addColumn(oColumn3);

					// 		for (let j = 0; j < DataGiven.items.length; j++) {
					// 			 
					// 			if (!DataGiven.items[j].bidders[i].offers[k]) {
					// 				continue;
					// 			}
					// 			var oItem = new sap.m.ColumnListItem({
					// 				id: `${"item1data" + generateUniqueId()}`,
					// 				cells: [
					// 					new sap.m.Text({ text: `${DataGiven.items[j].bidders[i].offers[k].unit_rate}` }),
					// 					new sap.m.Text({ text: "178" }),
					// 					new sap.m.Text({ text: `${DataGiven.items[j].bidders[i].offers[k].total_amt_inr}` })
					// 				]
					// 			});
					// 			oTable.addItem(oItem);

					// 		}
					// 		var oItem1 = new sap.m.ColumnListItem({
					// 			id: `${"blankspace" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" })
					// 			]
					// 		});

					// 		oTable.addItem(oItem1);
					// 		var oItem2 = new sap.m.ColumnListItem({
					// 			id: `${"spare" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["spares for 2 years"]}` })
					// 			]
					// 		});

					// 		oTable.addItem(oItem2);
					// 		var oItem3 = new sap.m.ColumnListItem({
					// 			id: `${"grandtotal" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k].grandtotal}` })
					// 			]
					// 		});

					// 		oTable.addItem(oItem3);
					// 		var oItem4 = new sap.m.ColumnListItem({
					// 			id: `${"parkingmarking" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Packing, Marking, Forwarding & Freight"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem4);
					// 		var oItem5 = new sap.m.ColumnListItem({
					// 			id: `${"inspection" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Inspection / Testing Charges"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem5);
					// 		var oItem6 = new sap.m.ColumnListItem({
					// 			id: `${"documentation" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Documentation Charges"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem6);
					// 		var oItem7 = new sap.m.ColumnListItem({
					// 			id: `${"totalbasicpricing" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Total Basic Price including packing, marking & forwarding"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem7);
					// 		var oItem8 = new sap.m.ColumnListItem({
					// 			id: `${"rnod" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k].RNOD}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem8);
					// 		var oItem9 = new sap.m.ColumnListItem({
					// 			id: `${"customduty" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Custom Duty & Cess"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem9);
					// 		var oItem10 = new sap.m.ColumnListItem({
					// 			id: `${"sgst" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k].SGST}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem10);
					// 		var oItem11 = new sap.m.ColumnListItem({
					// 			id: `${"igst" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k].IGST}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${(Number(DataGiven.items[0].bidders[i].offers[k].IGST)) * (Number(DataGiven.items[0].bidders[i].offers[0]["Total Basic Price including packing, marking & forwarding"])) / 100}` }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem11);
					// 		var oItem12 = new sap.m.ColumnListItem({
					// 			id: `${"ugst" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k].UGST}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${(Number(DataGiven.items[0].bidders[i].offers[k].UGST)) * (Number(DataGiven.items[0].bidders[i].offers[0]["Total Basic Price including packing, marking & forwarding"])) / 100}` }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem12);
					// 		var oItem13 = new sap.m.ColumnListItem({
					// 			id: `${"shipment" + generateUniqueId()}`,
					// 			cells: [

					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Shipment charges from EXW to ISRO Mahendragiri"]}` }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 			]
					// 		});

					// 		oTable.addItem(oItem13);
					// 		var oItem14 = new sap.m.ColumnListItem({
					// 			id: `${"totalincludingtaxes" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Total Basic Price including packing, marking & forwarding, Transportation including Taxes"]}` })
					// 			]
					// 		});
					// 		oTable.addItem(oItem14);
					// 		var oItem14 = new sap.m.ColumnListItem({
					// 			id: `${"total_excluding_taxes" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes"]}` })
					// 			]
					// 		});
					// 		oTable.addItem(oItem14);
					// 		var oItem15 = new sap.m.ColumnListItem({
					// 			id: `${"perdiemrate" + generateUniqueId()}`,
					// 			cells: [
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: "" }),
					// 				new sap.m.Text({ text: `${DataGiven.items[0].bidders[i].offers[k]["Per Diem rate for Supervision for Erection and commissioning"]}` })
					// 			]
					// 		});
					// 		oTable.addItem(oItem15);

					// 		 
					// 		var combobox_item = vbox_last_section.getItems()[0]

					// 		combobox_item.setValue(`${DataGiven.items[0].bidders[i].offers[(DataGiven.items[0].bidders[i].offers.length) - 1].offername}`);



					// 		var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].offername}`
					// 		})

					// 		combobox_item.addItem(item);

					// 		last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

					// 		var chvbox = last_hcombobox.getItems()[k];

					// 		if (combobox_item.getValue() != DataGiven.items[0].bidders[i].offers[k].offername) {
					// 			chvbox.setVisible(false)
					// 		}

					// 		chvbox.addStyleClass("spacebetweenclass");

					// 		 
					// 		//Price Basis
					// 		chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].PriceBasis}`
					// 		}));

					// 		//Point of Delivery
					// 		chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Point of Delivery"]}`
					// 		}));
					// 		 
					// 		//Delivery Period
					// 		chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
					// 			vertical: true,
					// 			width: "500px",
					// 			height: "100px"
					// 		}))

					// 		chvbox.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Delivery Period"]}`
					// 		}));


					// 		//Payment Terms
					// 		chvbox.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll" + generateUniqueId()}`, {
					// 			vertical: true,
					// 			width: "500px",
					// 			height: "100px"
					// 		}))

					// 		chvbox.getItems()[3].addContent(new sap.m.Text(`${"paymentterms" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Payment Terms"]}`
					// 		}));

					// 		//Liquidated Damages
					// 		chvbox.addItem(new sap.m.ScrollContainer(`${"liquidedScroll" + generateUniqueId()}`, {
					// 			vertical: true,
					// 			width: "500px",
					// 			height: "100px"
					// 		}))

					// 		chvbox.getItems()[4].addContent(new sap.m.Text(`${"liquided" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Liquidated Damages"]}`
					// 		}));

					// 		//Warranty / Defect Liability Period
					// 		chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
					// 			vertical: true,
					// 			width: "500px",
					// 			height: "100px"
					// 		}))

					// 		chvbox.getItems()[5].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Warranty / Defect Liability Period"]}`
					// 		}));

					// 		//CPBG
					// 		chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
					// 			vertical: true,
					// 			width: "500px",
					// 			height: "100px"
					// 		}))

					// 		chvbox.getItems()[6].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k].CPBG}`
					// 		}));

					// 		//Contact Person
					// 		chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Contact Person"]}`
					// 		}));

					// 		//Contact NO
					// 		chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Contact No."]}`
					// 		}));

					// 		//Order can be given to……...
					// 		chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Order can be given to……..."]}`
					// 		}));

					// 		//Techncially Approved
					// 		chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Techncially Approved"]}`
					// 		}));

					// 		//Approved Vendor
					// 		chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
					// 			text: `${DataGiven.items[0].bidders[i].offers[k]["Approved Vendor"]}`
					// 		}));




					// 	}



					// }


					// console.log();

					//full details
					var settings = {
						url: "/odata/v4/catalogcbeservice" + oBindingContext.sPath + "?$expand=vendors($expand=bids($expand=offers))",
						method: "GET",

					}
					var Odata_raw;
					await $.ajax(settings).done(async (results, textStatus, request) => {
						 
						Odata_raw = results;
					}).fail((err) => {
						 
					});

					

					var tempspath = oBindingContext.sPath;

					var key_field = tempspath.match(/'([^']+)'/);
					//items data
					var settings = {
						url: '/odata/v4/catalogcbeservice/list_of_items?$filter=PAN_Number eq ' + `'${key_field[1]}'`,
						method: "GET",
					}

					var list_of_items;
					await $.ajax(settings).done(async (results, textStatus, request) => {
						 
						list_of_items = results.value;
					}).fail((err) => {
						 
					});
					//items data
					var settings = {
						url: '/odata/v4/catalogcbeservice/list_items?$filter=PAN_Number eq ' + `'${key_field[1]}'`,
						method: "GET",
					}

					var list_items_with_duplicates;
					await $.ajax(settings).done(async (results, textStatus, request) => {
						 
						list_items_with_duplicates = results.value;
					}).fail((err) => {
						 
					});
					 ;

					var settings = {
						url: `/odata/v4/catalogcbeservice/OFFER`,
						method: "GET",
					}

					var total_offers_of_vendor;
					await $.ajax(settings).done(async (results, textStatus, request) => {
						 
						total_offers_of_vendor = results.value;
					}).fail((err) => {
						 
					});


					 
					//mainHbox
					var omainHBox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();

					//indent
					// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[1].setText(`${DataGiven.Indent}`);
					omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[0].setVisible(false);
					//Project
					omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setText(`${Odata_raw.Project_Description}`);
					//indent
					// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[1].setText(`${DataGiven.Client}`);
					omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[0].setVisible(false);

					var itemstable = omainHBox.getItems()[0].getItems()[2];

					const uniqueitesm = [];
					let uniqueItemsCount = 0;
					for (let i = 0; i < list_of_items.length; i++) {
						 


						itemstable.addItem(new sap.m.ColumnListItem(`${"collistitem" + (i + 1)}`));
						let columnlist = itemstable.getItems()[i];

						let itemdesc = new sap.m.Text(`${"itemdesc" + (i + 1)}`, {
							text: `${list_of_items[i].Item_Short_Description}`,
							tooltip: `${list_of_items[i].Item_Short_Description}`,
							wrapping: false
						})
						columnlist.addCell(itemdesc);

						let capacity_each_in_cu_mtr = new sap.m.Text(`${"capacity_each_in_cu_mtr" + (i + 1)}`, {
							text: `${list_of_items[i].capactity_each}`,
							tooltip: `${list_of_items[i].capactity_each}`,
							wrapping: false
						})
						columnlist.addCell(capacity_each_in_cu_mtr);

						let dia_in_mm = new sap.m.Text(`${"dia_in_mm" + (i + 1)}`, {
							text: `${list_of_items[i].dia}`,
							tooltip: `${list_of_items[i].dia}`,
							wrapping: false
						})
						columnlist.addCell(dia_in_mm);

						let tl_to_tl_len = new sap.m.Text(`${"tl_to_tl_len" + (i + 1)}`, {
							text: `${list_of_items[i].tl_tl_len}`,
							tooltip: `${list_of_items[i].tl_tl_len}`,
							wrapping: false
						})
						columnlist.addCell(tl_to_tl_len);

						let moc = new sap.m.Text(`${"moc" + (i + 1)}`, {
							text: `${list_of_items[i].moc}`,
							tooltip: `${list_of_items[i].moc}`,
							wrapping: false
						})
						columnlist.addCell(moc);

						let design_pressure_bar = new sap.m.Text(`${"design_pressure_bar" + (i + 1)}`, {
							text: `${list_of_items[i].design_pb}`,
							tooltip: `${list_of_items[i].design_pb}`,
							wrapping: false
						})
						columnlist.addCell(design_pressure_bar);

						let weights_in_kg = new sap.m.Text(`${"weights_in_kg" + (i + 1)}`, {
							text: `${list_of_items[i].weights}`,
							tooltip: `${list_of_items[i].weights}`,
							wrapping: false
						})
						columnlist.addCell(weights_in_kg);

						let qty_no = new sap.m.Text(`${"qty_no" + (i + 1)}`, {
							text: `${list_of_items[i].Quantity}`,
							tooltip: `${list_of_items[i].Quantity}`,
							wrapping: false
						})
						columnlist.addCell(qty_no);

					}

					var Scrollhbox = omainHBox.getItems()[1].getContent()[0];
					var vendorslist = Odata_raw.vendors;

					for (let i = 0; i < vendorslist.length; i++) {
						 
						Scrollhbox.addItem(new sap.m.VBox(`${"sectionvbox" + (i + 1)}`))
						let curr_sectionvbox = Scrollhbox.getItems()[i];

						curr_sectionvbox.addStyleClass("BorderClass");

						curr_sectionvbox.addItem(new sap.m.VBox(`${"vboxsuppnameloc" + (i + 1)}`));
						curr_sectionvbox.addItem(new sap.m.HBox(`${"hbmiddlesection" + (i + 1)}`));
						curr_sectionvbox.addItem(new sap.m.VBox(`${"vbox_last_section" + (i + 1)}`));


						//3rd vbox final one
						var vbox_last_section = curr_sectionvbox.getItems()[2];

						var combobox = new sap.m.ComboBox(`${"combobox" + (i + 1)}`, {
							change: function (oEvent) {
								 
								for (let index = 0; index < oEvent.getSource().getParent().getItems()[1].getItems().length; index++) {
									if (oEvent.getSource().getItems()[index].getText() == oEvent.getSource().getValue()) {
										oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(true);
									}
									else {
										oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(false);
									}

								}
							}
						});
						vbox_last_section.addItem(combobox);

						var hboxcombo = new sap.m.HBox(`${"hboxcombo" + (i + 1)}`);
						vbox_last_section.addItem(hboxcombo);

						var last_hcombobox = vbox_last_section.getItems()[1];

						// for (let l = 0; l < DataGiven.items[0].bidders.length; l++) {
						// 	var 

						// }

						//vbox1
						let vboxsuppnameloc = curr_sectionvbox.getItems()[0];


						//Supplier
						vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierName" + (i + 1)}`, {
							text: `${vendorslist[i].Vendor_Name ? vendorslist[i].Vendor_Name : 'NA'}`
						}));

						//Location
						vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierLocation" + (i + 1)}`, {
							text: `${vendorslist[i].Vendor_Location ? vendorslist[i].Vendor_Location : 'NA'}`
						}));

						vboxsuppnameloc.addStyleClass("v11spaceBetweenclass");


						//Hbox middle
						 
						var hbmiddlesection = curr_sectionvbox.getItems()[1];

						var settings = {
							url: `/odata/v4/catalogcbeservice/OFFER?$filter=PAN_Number eq '${key_field[1]}' and vendor_code eq '${vendorslist[i].vendor_code}'`,
							method: "GET",
						}

						var total_offers_of_vendor;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							 
							total_offers_of_vendor = results.value;
						}).fail((err) => {
							 
						});

						let processedOfferIds = [];
						//Loop for Vboxs
						for (let k = 0; k < total_offers_of_vendor.length; k++) {
							 debugger
							if (total_offers_of_vendor[k].PAN_Number != key_field[1] & total_offers_of_vendor[k].vendor_code != vendorslist[i].vendor_code) {
								continue
							}
							const currentOfferId = total_offers_of_vendor[k].offer_id;

							// Check if the offer_id has been processed before
							if (processedOfferIds.includes(currentOfferId)) {
								continue;
							}
							processedOfferIds.push(currentOfferId);
							 
							hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`));

							var vbmiddlesection = hbmiddlesection.getItems()[k];
							vbmiddlesection.addStyleClass("customVBox");

							vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

							var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

							vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].qtn_ref}`,
							}));
							vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].date}`
							}));
							vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_validity" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].validity}`
							}));
							vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_cylindrical_space" + generateUniqueId()}`, {
								text: ""
							}));
							vbmiddlesection_innervb.addStyleClass("vbmiddlesectionclass");


							/////////
							// var innerHbox = new sap.m.HBox(`${"innerHBox"+generateUniqueId()}`);

							// vbmiddlesection.addItem(innerHbox);

							// var hboxitems = vbmiddlesection.getItems()[1];

							var inner_vbox = new sap.m.VBox(`${"innervbox" + generateUniqueId()}`);
							vbmiddlesection.addItem(inner_vbox);
							// hboxitems.addItem(inner_vbox);

							inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].offer_name}`,
								design: "Bold"
							}));

							var oTable = new sap.m.Table({
								id: `${"offer" + generateUniqueId()}`,
								class: "tableBorder",
								growing: true,
								growingThreshold: 20,
								width: "100%",
								fixedLayout: false
							});

							oTable.addStyleClass("tableBorder");

							inner_vbox.addItem(oTable);

							// Define columns
							 
							var oColumn1 = new sap.m.Column({
								id: `${"unit_rate" + generateUniqueId()}`,
								header: new sap.m.Text({ text: "unit rate(INR)", wrapping: false })
							});

							var oColumn2 = new sap.m.Column({
								id: `${"unit_rate_per" + generateUniqueId()}`,
								header: new sap.m.Text({ text: "unit rate/KG", wrapping: false })
							});

							var oColumn3 = new sap.m.Column({
								id: `${"total_amt_offer" + generateUniqueId()}`,
								header: new sap.m.Text({ text: "Total Amount (INR)", wrapping: false })
							});

							// Add columns to the table
							oTable.addColumn(oColumn1);
							oTable.addColumn(oColumn2);
							oTable.addColumn(oColumn3);



							var settings = {
								url: '/odata/v4/catalogcbeservice/items_with_vendor?$filter=PAN_Number eq ' + `'${key_field[1]}'`,
								method: "GET",
							}

							var items_of_vendor;
							await $.ajax(settings).done(async (results, textStatus, request) => {
								 
								items_of_vendor = results.value;
							}).fail((err) => {
								 
							});

							//no of items for loops
							var settings = {
								url: '/odata/v4/catalogcbeservice/list_of_items?$filter=PAN_Number eq ' + `'${key_field[1]}'`,
								method: "GET",
							}

							var no_of_items;
							await $.ajax(settings).done(async (results, textStatus, request) => {
								 
								no_of_items = results.value;
							}).fail((err) => {
								 
							});





							// var items_of_vendor = vendorslist[i].bids
							for (let j = 0; j < no_of_items.length; j++) {
								 
								// if (!DataGiven.items[j].bidders[i].offers[k]) {
								// 	continue;
								// }

								let cnt = 0;
								for (let l = 0; l < items_of_vendor.length; l++) {
									if (items_of_vendor[l].Item_Code == no_of_items[j].Item_Code & items_of_vendor[l].vendor_code == vendorslist[i].vendor_code) {
										cnt++;
										var oItem = new sap.m.ColumnListItem({
											id: `${"item1data" + generateUniqueId()}`,
											cells: [
												new sap.m.Text({ text: `${vendorslist[i]?.bids[j]?.offers[k]?.unit_rate ?? 'NA'}` }),
												new sap.m.Text({ text: `${vendorslist[i]?.bids[j]?.offers[k]?.unit_rate_per_unit ?? 'NA'}` }),
												new sap.m.Text({ text: `${vendorslist[i]?.bids[j]?.offers[k]?.total_amt_inr ?? 'NA'}` })
											]
										});
										oTable.addItem(oItem);
									}


								}
								if (!cnt) {
									var oItem = new sap.m.ColumnListItem({
										id: `${"item1data" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" })
										]
									});
									oTable.addItem(oItem);
								}


							}
							var oItem1 = new sap.m.ColumnListItem({
								id: `${"blankspace" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" })
								]
							});

							oTable.addItem(oItem1);
							var oItem2 = new sap.m.ColumnListItem({
								id: `${"spare" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${total_offers_of_vendor[k].spares_for_2_years}` })
								]
							});

							oTable.addItem(oItem2);
							var oItem3 = new sap.m.ColumnListItem({
								id: `${"grandtotal" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${total_offers_of_vendor[k].grandtotal}`, design: "Bold" })
								]
							});

							oTable.addItem(oItem3);
							var oItem4 = new sap.m.ColumnListItem({
								id: `${"parkingmarking" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].packing_marking_forwarding}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem4);
							var oItem5 = new sap.m.ColumnListItem({
								id: `${"inspection" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].inspection_testing_charges}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem5);
							var oItem6 = new sap.m.ColumnListItem({
								id: `${"documentation" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].documentation_charges}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem6);
							var oItem7 = new sap.m.ColumnListItem({
								id: `${"totalbasicpricing" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].total_basic_price_including_packing}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem7);
							var oItem8 = new sap.m.ColumnListItem({
								id: `${"rnod" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].rnod}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem8);
							var oItem9 = new sap.m.ColumnListItem({
								id: `${"customduty" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].custom_duty_cess}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem9);
							var oItem10 = new sap.m.ColumnListItem({
								id: `${"sgst" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].sgst}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem10);
							var oItem11 = new sap.m.ColumnListItem({
								id: `${"igst" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].igst}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${(Number(total_offers_of_vendor[k].igst)) * (Number(total_offers_of_vendor[k].total_basic_price_including_packing)) / 100}` }),
								]
							});

							oTable.addItem(oItem11);
							var oItem12 = new sap.m.ColumnListItem({
								id: `${"ugst" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].ugst}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${(Number(total_offers_of_vendor[k].ugst)) * (Number(total_offers_of_vendor[k].total_basic_price_including_packing)) / 100}` }),
								]
							});

							oTable.addItem(oItem12);
							var oItem13 = new sap.m.ColumnListItem({
								id: `${"shipment" + generateUniqueId()}`,
								cells: [

									new sap.m.Text({ text: `${total_offers_of_vendor[k].shipment_charges}` }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
								]
							});

							oTable.addItem(oItem13);
							var oItem14 = new sap.m.ColumnListItem({
								id: `${"totalincludingtaxes" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${total_offers_of_vendor[k].total_basic_price_with_taxes}` })
								]
							});
							oTable.addItem(oItem14);
							var oItem14 = new sap.m.ColumnListItem({
								id: `${"total_excluding_taxes" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${total_offers_of_vendor[k].total_basic_price_without_taxes}` })
								]
							});
							oTable.addItem(oItem14);
							var oItem15 = new sap.m.ColumnListItem({
								id: `${"perdiemrate" + generateUniqueId()}`,
								cells: [
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: "" }),
									new sap.m.Text({ text: `${total_offers_of_vendor[k].per_diem_rate_for_supervision}` })
								]
							});
							oTable.addItem(oItem15);

							 
							var combobox_item = vbox_last_section.getItems()[0]

							combobox_item.setValue(`${total_offers_of_vendor[total_offers_of_vendor.length - 1].offer_name}`);



							var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
								text: `${total_offers_of_vendor[k].offer_name}`
							})

							combobox_item.addItem(item);

							last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

							var chvbox = last_hcombobox.getItems()[k];

							if (combobox_item.getValue() != total_offers_of_vendor[k].offer_name) {
								chvbox.setVisible(false)
							}

							chvbox.addStyleClass("spacebetweenclass");

							 
							//Price Basis
							chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].PriceBasis}`
							}));

							//Point of Delivery
							chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].point_of_delivery}`
							}));
							 
							//Delivery Period
							chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
								vertical: true,
								width: "500px",
								height: "100px"
							}))

							chvbox.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].delivery_period}`
							}));


							//Payment Terms
							chvbox.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll" + generateUniqueId()}`, {
								vertical: true,
								width: "500px",
								height: "100px"
							}))

							chvbox.getItems()[3].addContent(new sap.m.Text(`${"paymentterms" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].payment_terms}`
							}));

							//Liquidated Damages
							chvbox.addItem(new sap.m.ScrollContainer(`${"liquidedScroll" + generateUniqueId()}`, {
								vertical: true,
								width: "500px",
								height: "100px"
							}))

							chvbox.getItems()[4].addContent(new sap.m.Text(`${"liquided" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].liquidated_damages}`
							}));

							//Warranty / Defect Liability Period
							chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
								vertical: true,
								width: "500px",
								height: "100px"
							}))

							chvbox.getItems()[5].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].warranty_defect_liability_period}`
							}));

							//CPBG
							chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
								vertical: true,
								width: "500px",
								height: "100px"
							}))

							chvbox.getItems()[6].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].cpbg}`
							}));

							//Contact Person
							chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].contact_person}`
							}));

							//Contact NO
							chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].contact_number}`
							}));

							//Order can be given to……...
							chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].order_given_to}`
							}));

							//Techncially Approved
							chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].technically_approved}`
							}));

							//Approved Vendor
							chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
								text: `${total_offers_of_vendor[k].approved_vendor}`
							}));




						}
					}
				},

			}
		}
	});
});
