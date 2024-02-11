sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/m/MessageToast"],function(e,t){"use strict";return e.extend("cbedcompdbdyn.ext.controller.ObjectPageCon",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){try{debugger;function ne(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}var a=e.sPath;var s=a.match(/'([^']+)'/);sap.ui.core.BusyIndicator.show();var n=this.base.getAppComponent().getManifestObject()._oBaseUri._string;if(n){var o={url:n+"odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var r;await $.ajax(o).done(async(e,t,a)=>{r=e.value}).fail(e=>{console.log(e);t.show(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var d;await $.ajax(o).done(async(e,t,a)=>{d=e.value}).fail(e=>{console.log(e);t.show(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var m;await $.ajax(o).done(async(e,t,a)=>{m=e.value}).fail(e=>{console.log(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/PAN_Info",method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/PAN_Info",method:"GET"}}var l;await $.ajax(o).done(async(e,t,a)=>{l=e.value}).fail(e=>{console.log(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/PAN_vendor_reponse_details",method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/PAN_vendor_reponse_details",method:"GET"}}var i;await $.ajax(o).done(async(e,t,a)=>{i=e.value}).fail(e=>{console.log(e)});var g=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();g.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[0].setVisible(false);g.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setText(`${" "+r[0]?.Project_Description??" "}`);g.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setTextAlign("End");g.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[0].setVisible(false);var c=g.getItems()[0].getItems()[2].getItems()[0];var p=g.getItems()[0].getItems()[1].getItems()[0];if(!p.getItems()[1]){p.addItem(new sap.ui.core.Icon(`${"cylindricaldtaicon"+ne()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){debugger;var t=g.getItems()[0];if(t.getWidth()=="30%"){c.setFixedLayout(false);t.setWidth("70%")}else{c.setFixedLayout(true);t.setWidth("30%")}}}))}c.destroyItems();const oe=new Set;const re=[];d.forEach(e=>{if(!oe.has(e.Item_Code)){oe.add(e.Item_Code);re.push(e)}});for(let le=0;le<re.length;le++){c.addItem(new sap.m.ColumnListItem(`${"collistitem"+(le+1)}`));let ie=c.getItems()[le];let ge=new sap.m.Text(`${"itemdesc"+(le+1)}`,{text:`${d[le]?.Item_Short_Description??" "}`,tooltip:`${d[le]?.Item_Short_Description??" "}`,wrapping:false});ie.addCell(ge);let ce=new sap.m.Text(`${"capacity_each_in_cu_mtr"+(le+1)}`,{text:`${d[le]?.capactity_each??" "}`,tooltip:`${d[le]?.capactity_each??" "}`,wrapping:false});ie.addCell(ce);let pe=new sap.m.Text(`${"dia_in_mm"+(le+1)}`,{text:`${d[le]?.dia??" "}`,tooltip:`${d[le]?.dia??" "}`,wrapping:false});ie.addCell(pe);let xe=new sap.m.Text(`${"tl_to_tl_len"+(le+1)}`,{text:`${d[le]?.tl_tl_len??" "}`,tooltip:`${d[le]?.tl_tl_len??" "}`,wrapping:false});ie.addCell(xe);let Ie=new sap.m.Text(`${"moc"+(le+1)}`,{text:`${d[le]?.moc??" "}`,tooltip:`${d[le]?.moc??" "}`,wrapping:false});ie.addCell(Ie);let ue=new sap.m.Text(`${"design_pressure_bar"+(le+1)}`,{text:`${d[le]?.design_pb??" "}`,tooltip:`${d[le]?.design_pb??" "}`,wrapping:false});ie.addCell(ue);let we=new sap.m.Text(`${"weights_in_kg"+(le+1)}`,{text:`${d[le]?.weights??" "}`,tooltip:`${d[le]?.weights??" "}`,wrapping:false});ie.addCell(we);let $e=new sap.m.Text(`${"qty_no"+(le+1)}`,{text:`${d[le]?.Quantity??" "}`,tooltip:`${d[le]?.Quantity??" "}`,wrapping:false});ie.addCell($e)}var x=g.getItems()[1].getContent()[0];x.destroyItems();if(n){var o={url:n+"odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var I;await $.ajax(o).done(async(e,t,a)=>{I=e.value}).fail(e=>{console.log(e)});let de=new Set;let me=0;for(let ve=0;ve<I.length;ve++){const _e=I[ve].vendor_code;if(de.has(_e)){continue}de.add(_e);x.addItem(new sap.m.VBox(`${"sectionvbox"+(ve+1)}`));let be=x.getItems()[me];me++;debugger;be.addStyleClass("BorderClass");be.addItem(new sap.m.VBox(`${"vboxsuppnameloc"+(ve+1)}`));be.addItem(new sap.m.HBox(`${"hbmiddlesection"+(ve+1)}`));be.addItem(new sap.m.VBox(`${"vbox_last_section"+(ve+1)}`));var u=be.getItems()[2];var w=new sap.m.ComboBox(`${"combobox"+(ve+1)}`,{change:function(e){for(let t=0;t<e.getSource().getParent().getItems()[1].getItems().length;t++){if(e.getSource().getItems()[t].getText()==e.getSource().getValue()){e.getSource().getParent().getItems()[1].getItems()[t].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[t].setVisible(false)}}}});u.addItem(w);debugger;var v=new sap.m.HBox(`${"hboxcombo"+(ve+1)}`);u.addItem(v);var _=u.getItems()[1];let Te=be.getItems()[0];Te.addItem(new sap.m.Title(`${"SupplierName"+(ve+1)}`,{text:`${I[ve].Vendor_Name?I[ve].Vendor_Name:" "}`}));Te.addItem(new sap.m.Title(`${"SupplierLocation"+(ve+1)}`,{text:`${I[ve].Vendor_Location?I[ve].Vendor_Location:" "}`}));debugger;Te.addStyleClass("v11spaceBetweenclass");var b=be.getItems()[1];debugger;let fe=0;let Ce=0;do{if(I[fe].ProjectId==s[1]&&I[fe].Proposed_Vendor_Code==I[ve].Proposed_Vendor_Code){b.addItem(new sap.m.VBox(`${"vbmiddlesection"+ne()}`,{}));var T=b.getItems().length;var f=b.getItems()[T-1];f.addStyleClass("customVBox");f.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb"+ne()}`));var C=f.getItems()[0];C.addItem(new sap.m.Text(`${"org_qtn_ref"+ne()}`,{text:`${I[fe]?.qtn_ref??" "}`}));C.addItem(new sap.m.Text(`${"org_date"+ne()}`,{text:`${I[fe]?.date??" "}`}));C.addItem(new sap.m.Text(`${"org_validity"+ne()}`,{text:`${I[fe]?.validity??" "}`}));C.addItem(new sap.m.Text(`${"org_cylindrical_space"+ne()}`,{text:""}));C.addStyleClass("vbmiddlesectionclass");var h=new sap.m.VBox(`${"innervbox"+ne()}`,{});f.addItem(h);debugger;let he=l.find(e=>e.PAN_Number===I[fe].PAN_Number);h.addItem(new sap.m.Label(`${"original_offer"+ne()}`,{text:`${he?.status_a??" "}`,design:"Bold"}));var y=new sap.m.Table({id:`${"offer"+ne()}`,class:"tableBorder",growing:true,growingThreshold:20,width:"350px",fixedLayout:true});debugger;y.addStyleClass("tableBorder");h.addItem(y);var P=new sap.m.Column({id:`${"unit_rate"+ne()}`,header:new sap.m.Text({text:"Unit Rate",wrapping:false})});var V=new sap.m.Column({id:`${"unit_rate_per"+ne()}`,header:new sap.m.Text({text:"Rate per Unit",wrapping:false})});debugger;var L=new sap.m.Column({id:`${"total_amt_offer"+ne()}`,header:new sap.m.HBox});y.addColumn(P);y.addColumn(V);y.addColumn(L);var S=y.getColumns()[2].getHeader();S.addItem(new sap.m.Label({text:"Total Amount",design:"Bold"}));S.addItem(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){debugger;let t=e.getSource().getParent().getParent().getParent();if(t.getColumns()[0].getVisible()==true){t.getColumns()[0].setVisible(false);t.getColumns()[1].setVisible(false)}else{t.getColumns()[0].setVisible(true);t.getColumns()[1].setVisible(true)}for(let e=0;e<t.getItems().length;e++){if(t.getItems()[e].getCells()[0].getVisible()==true){t.getItems()[e].getCells()[0].setVisible(false);t.getItems()[e].getCells()[1].setVisible(false)}else{t.getItems()[e].getCells()[0].setVisible(true);t.getItems()[e].getCells()[1].setVisible(true)}}}}));var B=[];var N=0;var A="";let ye=0;let Pe=new Set;const Ve=d.filter(e=>e.PAN_Number===I[fe].PAN_Number&&e.Proposed_Vendor_Code===I[fe].Proposed_Vendor_Code);debugger;for(let ke=0;ke<re.length;ke++){const De=re[ke];const Ue=Ve.find(e=>e.Item_Code===De.Item_Code);if(Ue){const He=Number(Ue.Amount??0)*Number(Ue.Quantity??0);const Me=`${He} ${Ue.Unit_Price??" "}`;N+=He;A=Ue.Unit_Price;const Qe=new sap.m.ColumnListItem({id:`${"item1data"+ne()}`,cells:[new sap.m.Text({text:`${Ue.Amount??" "} ${Ue.Unit_Price}`}),new sap.m.Text({text:`${Ue.unit_rate_per_unit??" "}`}),new sap.m.Text({text:Me})]});y.addItem(Qe)}else{const We=new sap.m.ColumnListItem({id:`${"item1data"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(We)}}debugger;const Le=i.filter(e=>e.PAN_Number===I[fe].PAN_Number&&e.Proposed_Vendor_Code===I[fe].Proposed_Vendor_Code);var j=new sap.m.ColumnListItem({id:`${"blankspace"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(j);var E=new sap.m.ColumnListItem({id:`${"spare"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${I[fe]?.spares_for_2_years??" "}`})]});y.addItem(E);var q=new sap.m.ColumnListItem({id:`${"grandtotal"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(q);var G=new sap.m.ColumnListItem({id:`${"parkingmarking"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.packing_marking_forwarding??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(G);var k=new sap.m.ColumnListItem({id:`${"inspection"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.inspection_testing_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(k);var D=new sap.m.ColumnListItem({id:`${"documentation"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.documentation_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(D);var U=new sap.m.ColumnListItem({id:`${"totalbasicpricing"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(U);var H=new sap.m.ColumnListItem({id:`${"rnod"+ne()}`,cells:[new sap.m.Label({text:`${I[fe]?.rnod??" "}`,design:"Bold"}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(H);var M=new sap.m.ColumnListItem({id:`${"customduty"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.custom_duty_cess??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(M);var Q=new sap.m.ColumnListItem({id:`${"sgst"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.sgst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(Q);var W=new sap.m.ColumnListItem({id:`${"igst"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.igst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Number(I[fe]?.igst??" ")*Number(I[fe]?.total_basic_price_including_packing??" ")/100}`})]});y.addItem(W);var z=new sap.m.ColumnListItem({id:`${"ugst"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.ugst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Number(I[fe]?.ugst??" ")*Number(I[fe]?.total_basic_price_including_packing??" ")/100}`})]});y.addItem(z);var F=new sap.m.ColumnListItem({id:`${"shipment"+ne()}`,cells:[new sap.m.Text({text:`${I[fe]?.shipment_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(F);var O=new sap.m.ColumnListItem({id:`${"totalincludingtaxes"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(O);var O=new sap.m.ColumnListItem({id:`${"total_excluding_taxes"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(O);var R=new sap.m.ColumnListItem({id:`${"perdiemrate"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${I[fe]?.per_diem_rate_for_supervision??" "}`})]});y.addItem(R);debugger;var J=u.getItems()[0];var K=new sap.ui.core.Item(`${"item1"+ne()}`,{text:`${he?.status_a??" "}`});J.addItem(K);J.setValue(`${he?.status_a??""}`);_.addItem(new sap.m.VBox(`${"offer"+ne()}`));var X=_.getItems()[Ce];Ce++;debugger;X.addStyleClass("spacebetweenclass");debugger;X.addItem(new sap.m.Text(`${"pricebasis"+ne()}`,{text:`${I[fe]?.PriceBasis??"test"}`}));X.addItem(new sap.m.Text(`${"pointofdelivery"+ne()}`,{text:`${I[fe]?.point_of_delivery??"test"}`}));X.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll"+ne()}`,{vertical:true,height:"100px"}));X.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod"+ne()}`,{text:`${I[fe]?.delivery_period??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll"+ne()}`,{vertical:true,height:"100px"}));X.getItems()[3].addContent(new sap.m.Text(`${"paymentterms"+ne()}`,{text:`${I[fe]?.payment_terms??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"liquidedScroll"+ne()}`,{vertical:true,height:"100px"}));X.getItems()[4].addContent(new sap.m.Text(`${"liquided"+ne()}`,{text:`${I[fe]?.liquidated_damages??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"warrantyScroll"+ne()}`,{vertical:true,height:"100px"}));X.getItems()[5].addContent(new sap.m.Text(`${"warranty"+ne()}`,{text:`${I[fe]?.warranty_defect_liability_period??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"cpbgScroll"+ne()}`,{vertical:true,height:"100px"}));X.getItems()[6].addContent(new sap.m.Text(`${"cpbg"+ne()}`,{text:`${Le[0]?.CPBG??" "}`}));const Se=Le[0].Vendor_Contact_PersonDASH1;var Y=/name\s*:(.*?)\s*email/;var Z=Se.match(Y);var ee=Z?Z[1].trim():null;debugger;X.addItem(new sap.m.Text(`${"contactperson"+ne()}`,{text:`${ee??"testContact"}`}));const Be=/ph1\s*:\s*(.*?)\s*ph2/;const Ne=Se.match(Be);const Ae=Ne?Ne[1].trim():null;const je=/ph2\s*:\s*(.*?)$/;const Ee=Se.match(je);const qe=Ee?Ee[1].trim():null;X.addItem(new sap.m.Text(`${"contactno"+ne()}`,{text:`${Ae+", "+qe??"test"}`}));X.addItem(new sap.m.Text(`${"ordercanbe"+ne()}`,{text:`${I[fe]?.order_given_to??"test"}`}));X.addItem(new sap.m.Text(`${"technicallyapproved"+ne()}`,{text:`${I[fe]?.Technically_Approved??"test"}`}));X.addItem(new sap.m.Text(`${"approvedvendor"+ne()}`,{text:`${I[fe]?.approved_vendor??"test"}`}));let Ge=X.getItems()[X.getItems().length-1];Ge.addStyleClass("customlaststyleclassrsection")}fe++;debugger}while(fe<I.length)}var te=g.getItems()[0].getItems()[3].getItems()[5].getItems()[1];var ae=g.getItems()[0].getItems()[3].getItems()[12].getItems()[1];var se=g.getItems()[0].getItems()[3].getItems()[15].getItems()[1];te.firePress();ae.firePress();se.firePress();debugger;sap.ui.core.BusyIndicator.hide()}catch(ze){debugger;t.show(ze)}}}}})});