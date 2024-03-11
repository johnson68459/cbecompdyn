sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/m/MessageToast","sap/ui/export/Spreadsheet","sap/ui/model/json/JSONModel","sap/ui/export/library"],function(e,t,a){"use strict";var s=a.EdmType;let l=true;return e.extend("cbedcompdbdyn.ext.controller.ObjectPageCon",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel();let t=this.base.getView().mAggregations.content[0].mAggregations.headerTitle;t.destroyActions()},routing:{onAfterBinding:async function(e){try{function ne(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}var a=e.sPath;var s=a.match(/'([^']+)'/);sap.ui.core.BusyIndicator.show();var l="";let oe="cbeObjectPageData";let re=this.base.getView().getModel().bindContext(`/${oe}(...)`);re.setParameter("projectId",s[1]);await re.execute();let ie=re.getBoundContext().getValue();ie=JSON.parse(ie.value);console.log(ie);var n=ie[0][0];var o=ie[1];var r=ie[2];var i=ie[3];var d=ie[4];var m=ie[5];var p=ie[6];debugger;r.sort((e,t)=>e.Vendor_Name.localeCompare(t.Vendor_Name));var g=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();let de=g.getItems()[0].getItems()[2].getItems()[0].getColumns();for(let Le=0;Le<de.length;Le++){de[Le].setStyleClass("custcolorclass")}let me=s[0];let pe=me.replace(/'/g,"");let ge=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--Sopvalue");let ce=i.find(e=>e.ProjectId==pe);ge.setText(`${ce.Subject_of_ProposalOROrder}`);ge.setTextAlign("End");var c=g.getItems()[0].getItems()[2].getItems()[0];var x=g.getItems()[0].getItems()[1].getItems()[0];if(!x.getItems()[1]){x.addItem(new sap.ui.core.Icon(`${"cylindricaldtaicon"+ne()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){var t=g.getItems()[0];let a=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--total_basic_pricing");let s;let l=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--newItemID1");let n;if(t.getWidth()=="30%"){c.setFixedLayout(false);t.setWidth("80%");e.getSource().setSrc("sap-icon://collapse")}else{c.setFixedLayout(true);t.setWidth("30%");e.getSource().setSrc("sap-icon://expand")}let o=0;let r=c.getColumns();for(let e=0;e<r.length;e++){if(r[e].getVisible()==true){o++}}if(o<5){c.setFixedLayout(true)}}}))}c.destroyItems();const xe=new Set;let ue=[];o.forEach(e=>{if(!xe.has(e.Item_Code)&&e.Item_Short_Description&&e.Item_Code){xe.add(e.Item_Code);ue.push(e)}});let Ie=o.sort((e,t)=>{if(e.Item_Code!==t.Item_Code){return e.Item_Code.localeCompare(t.Item_Code)}else if(e.Proposed_Vendor_Code!==t.Proposed_Vendor_Code){return e.Proposed_Vendor_Code.localeCompare(t.Proposed_Vendor_Code)}else{return e.PAN_Number.localeCompare(t.PAN_Number)}});let we=Ie.reduce((e,t)=>{let a=`${t.Item_Code}-${t.Proposed_Vendor_Code}-${t.PAN_Number}`;if(!e[a]){e[a]=[]}e[a].push(t);return e},{});console.log(we);let Ce="";let _e=0;for(let Ae in we){if(we[Ae].length>_e){_e=we[Ae].length;Ce=Ae}}let $e=we[Ce];let fe=1;for(let Oe=0;Oe<ue.length;Oe++){c.addItem(new sap.m.ColumnListItem(`${"collistitem"+(Oe+1)}`));let De=c.getItems()[Oe];let Fe=new sap.m.Text(`${"itemdesc"+(Oe+1)}`,{text:`${ue[Oe]?.Item_Short_Description??" "}`,tooltip:`${ue[Oe]?.Item_Short_Description??" "}`,wrapping:false});De.addCell(Fe);let je=i.filter(e=>e.PAN_Number==ue[Oe]?.PAN_Number);let ke=new sap.m.Text(`${"plantcode"+(Oe+1)}`,{text:`${je[0]?.Plant_Code??" "}`,tooltip:`${je[0]?.Plant_Code??" "}`,wrapping:false});De.addCell(ke);let Ee=new sap.m.Text(`${"tag_no"+(Oe+1)}`,{text:`${ue[Oe]?.tag_no??" "}`,tooltip:`${ue[Oe]?.tag_no??" "}`,wrapping:false});De.addCell(Ee);let He=new sap.m.Text(`${"types_of_vessel"+(Oe+1)}`,{text:`${ue[Oe]?.types_of_vessel??" "}`,tooltip:`${ue[Oe]?.types_of_vessel??" "}`,wrapping:false});De.addCell(He);let Me=new sap.m.Text(`${"capacity_each_in_cu_mtr"+(Oe+1)}`,{text:`${ue[Oe]?.capactity_each??" "}`,tooltip:`${ue[Oe]?.capactity_each??" "}`,wrapping:false});De.addCell(Me);let Ue=new sap.m.Text(`${"dia_in_mm"+(Oe+1)}`,{text:`${ue[Oe]?.dia??" "}`,tooltip:`${ue[Oe]?.dia??" "}`,wrapping:false});De.addCell(Ue);let Re=new sap.m.Text(`${"tl_to_tl_len"+(Oe+1)}`,{text:`${ue[Oe]?.tl_tl_len??" "}`,tooltip:`${ue[Oe]?.tl_tl_len??" "}`,wrapping:false});De.addCell(Re);let Qe=new sap.m.Text(`${"moc"+(Oe+1)}`,{text:`${ue[Oe]?.moc??" "}`,tooltip:`${ue[Oe]?.moc??" "}`,wrapping:false});De.addCell(Qe);let qe=new sap.m.Text(`${"design_pressure_bar"+(Oe+1)}`,{text:`${ue[Oe]?.design_pb??" "}`,tooltip:`${ue[Oe]?.design_pb??" "}`,wrapping:false});De.addCell(qe);let We=new sap.m.Text(`${"weights_in_kg"+(Oe+1)}`,{text:`${ue[Oe]?.weights??" "}`,tooltip:`${ue[Oe]?.weights??" "}`,wrapping:false});De.addCell(We);let Ge=new sap.m.Text(`${"uom"+(Oe+1)}`,{text:`${ue[Oe]?.UOM??" "}`,tooltip:`${ue[Oe]?.UOM??" "}`,wrapping:false});De.addCell(Ge);let Ye=0;for(let ze=0;ze<o.length;ze++){let Xe=o[ze].Quantity;let Ke=Xe.replace(/,/g,"");let Ze=parseFloat(Ke,10);if(o[ze].Item_Code==ue[Oe].Item_Code&&Xe){Ye=Ye+Ze}}let Je=new sap.m.Text(`${"qty_no"+(Oe+1)}`,{text:`${Ye??" "}`,tooltip:`${Ye??" "}`,wrapping:false});De.addCell(Je)}let be={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0};for(let et=0;et<c.getColumns().length;et++){c.getColumns()[et].setVisible(true)}for(let tt=0;tt<c.getItems().length;tt++){let at=c.getItems()[tt].getCells();for(let st=0;st<at.length;st++){if(at[st].getText().trim()==""){be[st]+=1}}}for(let lt in be){if(be[lt]==c.getItems().length){c.getColumns()[lt].setVisible(false)}}var u=g.getItems()[1].getContent()[0];u.destroyItems();let he=new Set;let ve=0;let Se=g.getItems()[0].getItems()[0].getItems()[0].getItems()[1];Se.destroyItems();let ye=0;for(let nt=0;nt<r.length;nt++){const ot=r[nt].vendor_code;if(he.has(ot)){continue}he.add(ot);u.addItem(new sap.m.VBox(`${"sectionvbox"+(nt+1)}`));let rt=u.getItems()[ve];ve++;rt.addStyleClass("BorderClass");rt.addItem(new sap.m.VBox(`${"vboxsuppnameloc"+(nt+1)}`));rt.addItem(new sap.m.HBox(`${"hbmiddlesection"+(nt+1)}`));rt.addItem(new sap.m.VBox(`${"vbox_last_section"+(nt+1)}`));rt.getItems()[0].addStyleClass("stickyright");var I=rt.getItems()[2];var w=new sap.m.ComboBox(`${"combobox"+(nt+1)}`,{change:function(e){for(let t=0;t<e.getSource().getParent().getItems()[1].getItems().length;t++){if(e.getSource().getItems()[t].getText()==e.getSource().getValue()){e.getSource().getParent().getItems()[1].getItems()[t].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[t].setVisible(false)}}}});I.addItem(w);var C=new sap.m.HBox(`${"hboxcombo"+(nt+1)}`);I.addItem(C);var _=I.getItems()[1];let it=rt.getItems()[0];it.addStyleClass("alignmentVendorClass");let dt=r[nt]?.Vendor_Name??" ";let mt;if(dt.length>20){mt=dt.substring(0,15)+"...";console.log(mt)}else{mt=r[nt]?.Vendor_Name}it.addItem(new sap.m.Title(`${"SupplierName"+(nt+1)}`,{text:`${mt??" "}`,wrapping:true,tooltip:`${r[nt].Vendor_Name?r[nt].Vendor_Name:" "}`}));it.getItems()[0].addStyleClass("vendorTitle");Location;it.addItem(new sap.m.Title(`${"SupplierLocation"+(nt+1)}`,{text:`${r[nt].Vendor_Location?r[nt].Supplier_Origin_State:" "}`}));console.log(r);it.addStyleClass("v11spaceBetweenclass");var $=rt.getItems()[1];$.addStyleClass("alignmentVendorClass");let pt=0;let gt=0;var f;do{if(r[pt].ProjectId==pe&&r[pt].Proposed_Vendor_Code==r[nt].Proposed_Vendor_Code){let xt=r[pt].PAN_Number;function ut(e){for(let t=0;t<p.length;t++){if(p[t].number===e){return true}}return false}if(ut(xt)){let It=p.filter(e=>e.number===r[pt].PAN_Number);for(let wt=0;wt<It.length;wt++){$.addItem(new sap.m.VBox(`${"vbmiddlesection"+ne()}`,{}));let Ct=r[pt]?.Awarded_Vendor;if(Ct=="YES"){debugger;console.log(r[pt]?.Proposed_Vendor_Code);f=`${r[pt]?.Vendor_Location}`;ye++}var b=$.getItems().length;var h=$.getItems()[b-1];h.addStyleClass("customVBox");h.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb"+ne()}`));var v=h.getItems()[0];v.addItem(new sap.m.Text(`${"org_qtn_ref"+ne()}`,{text:`${It[wt]?.number??"NA"}`}));v.addItem(new sap.m.Text(`${"org_date"+ne()}`,{text:`${It[wt]?.date??"NA"}`}));v.addItem(new sap.m.Text(`${"org_validity"+ne()}`,{text:`${r[pt]?.validity??"NA"}`}));v.addItem(new sap.m.Text(`${"org_cylindrical_space"+ne()}`,{text:""}));v.addStyleClass("vbmiddlesectionclass");var S=new sap.m.VBox(`${"innervbox"+ne()}`,{alignItems:"Center"});h.addItem(S);let _t=i.find(e=>e.PAN_Number===r[pt].PAN_Number);S.addItem(new sap.m.Label(`${"original_offer"+ne()}`,{text:`${It[wt]?.eventNo??" "}`,design:"Bold"}));var y=new sap.m.Table({id:`${"offer"+ne()}`,class:"tableBorder",growing:true,growingThreshold:20,width:"350px",fixedLayout:true});y.addStyleClass("tableBorder");S.addItem(y);var T=new sap.m.Column({id:`${"unit_rate"+ne()}`,header:new sap.m.Label({text:"Unit Price",design:"Bold",wrapping:false}),width:"100px"});var P=new sap.m.Column({id:`${"unit_rate_per"+ne()}`,header:new sap.m.Label({text:"Quantity",design:"Bold",wrapping:true}),width:"70px"});var N=new sap.m.Column({id:`${"total_amt_offer"+ne()}`,header:new sap.m.HBox,width:"140px"});y.addColumn(T);y.addColumn(P);y.addColumn(N);var V=y.getColumns()[2].getHeader();V.addItem(new sap.m.Label({text:"Total Amount",design:"Bold"}));var B=[];var L=0;var A="";let $t=0;let ft=new Set;const bt=o.filter(e=>e.PAN_Number===r[pt].PAN_Number&&e.Proposed_Vendor_Code===r[pt].Proposed_Vendor_Code);let ht=0;let vt="";function St(e,t){let a="";switch(t){case"INR":a+=parseFloat(e).toLocaleString("en-IN",{maximumFractionDigits:2});break;default:a+=parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:2});break}return a}const yt=d.filter(e=>e.PAN_Number===r[pt].PAN_Number&&e.Proposed_Vendor_Code===r[pt].Proposed_Vendor_Code);A=yt[0]?.Order_CurrencyORBid_currency??"NA";var O=false;for(let Wt=0;Wt<ue.length;Wt++){const Gt=ue[Wt];let Yt=o.filter(e=>e.ProjectId==pe&&e.Proposed_Vendor_Code==r[pt].Proposed_Vendor_Code&&e.Item_Code==ue[Wt].Item_Code&&e.PAN_Number==xt);let Jt=bt.filter(e=>e.Item_Code===Gt.Item_Code);if(Jt&&Yt.length){if(Yt.length==1){var D=Yt[0].Unit_Price?.replace(/,/g,"")??0;var F=Yt[0].Quantity?.replace(/,/g,"")??0;let zt=Yt[0].extendedPrice?.replace(/,/g,"")??0;ht=ht+parseFloat(zt??0);vt=vt+(Yt[0]?.Indian_Tax_PER??" ")+"\n";D=D=="NaN"?" ":D;const Xt=Number(D??0)*Number(F??0);const Kt=`${Xt} ${Yt[0].Unit_Price??" "}`;L+=Xt;const Zt=new sap.m.ColumnListItem({id:`${"item1data"+ne()}`,cells:[new sap.m.Text({text:`${St(D,A)??" "} ${A}`}),new sap.m.Text({text:`${Yt[0].Quantity??" "}`}),new sap.m.Text({text:`${St(Xt,A)+" "+A}`})],visible:true});if(r[pt].Awarded_Vendor=="YES"){Zt.addStyleClass("ItemPresentStyle")}y.addItem(Zt)}else{for(let ea=0;ea<Yt.length;ea++){var D=Yt[ea].Unit_Price?.replace(/,/g,"")??0;var F=Yt[ea].Quantity?.replace(/,/g,"")??0;let ta=Yt[ea].extendedPrice?.replace(/,/g,"")??0;ht=ht+parseFloat(ta??0);vt=vt+(Yt[0]?.Indian_Tax_PER??" ")+"\n";const aa=Number(D??0)*Number(F??0);const sa=`${aa} ${Yt[0].Unit_Price??" "}`;L+=aa;if(ea==0){let la=[];let na=new sap.m.Label({text:`Unit Rate`,design:"Bold"});na.addStyleClass("labelColorClass");let oa=new sap.m.Label({text:`Quantity`,design:"Bold"});oa.addStyleClass("labelColorClass");let ra=new sap.m.Label({text:`Total Amount`,design:"Bold"});ra.addStyleClass("labelColorClass");let ia=[];ia.push(na);ia.push(oa);ia.push(ra);let da=new sap.m.HBox({justifyContent:"SpaceBetween",alignContent:"SpaceBetween",items:ia});da.addStyleClass("hboxPopoverClass");la.push(da);var j=[];for(let pa=1;pa<Yt.length;pa++){var D=Yt[pa].Unit_Price?.replace(/,/g,"")??0;var F=Yt[pa].Quantity?.replace(/,/g,"")??0;let ga=Yt[pa].extendedPrice?.replace(/,/g,"")??0;ht=ht+parseFloat(ga??0);vt=vt+(Yt[pa]?.Indian_Tax_PER??" ")+"\n";const ca=Number(D??0)*Number(F??0);const xa=`${ca} ${Yt[pa].Unit_Price??" "}`;L+=ca;let ua=new sap.m.HBox({justifyContent:"SpaceBetween",alignContent:"SpaceBetween",items:[new sap.m.Text({text:`${St(D,A)??" "} ${A}`}),new sap.m.Text({text:`${Yt[pa].Quantity??" "}`}),new sap.m.Text({text:`${St(ca,A)+" "+A}`})]});j.push({vendorcode:mt,unit_rate:`${St(D,A)??" "} ${A}`,quantity:`${Yt[pa].Quantity??" "}`,total:`${St(ca,A)+" "+A}`});ua.addStyleClass("hboxPopoverClass");la.push(ua)}if(j.length){var k=this.base.getExtensionAPI().getModel();var E=k.bindContext("/storeVendorDetails(...)");var H=JSON.stringify(j);E.setParameter("result",H);await E.execute()}const ma=new sap.m.ColumnListItem({id:`${"item1data"+ne()}`,cells:[new sap.m.Text({text:`${St(D,A)??" "} ${A}`}),new sap.m.Text({text:`${Yt[ea].Quantity??" "}`}),new sap.m.HBox({items:[new sap.m.Text({text:`${St(aa,A)+" "+A} ⠀`}),new sap.ui.core.Icon({src:"sap-icon://overflow",activeColor:"black",color:"black",press:function(e){let t=new sap.m.Popover({showHeader:false,placement:sap.m.PlacementType.Bottom,content:la});if(e.getSource().getParent().getParent().getTable().getColumns()[2].getStyleClass()=="columnStyleClass"){t.addStyleClass("PopOverClassBox")}t.openBy(e.getSource())}})]})],visible:true});if(r[pt].Awarded_Vendor=="YES"){ma.addStyleClass("ItemPresentStyle")}ma.addStyleClass("ItemPresentStyle");y.addItem(ma);break}}}}else{const Ia=new sap.m.ColumnListItem({id:`${"item1data"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(Ia)}}const Tt=m.filter(e=>e.PAN_Number===r[pt].PAN_Number&&e.Proposed_Vendor_Code===r[pt].Proposed_Vendor_Code);let Pt={};const Nt=["Spares for 2 Years operation","Packing, Marking, Forwarding & Freight","Inspection / Testing Charges","Documentation Charges","RNOD","Custom Duty & Cess","SGST","IGST","UGST","Shipment charges from EXW to ISRO Mahendragiri","Per Diem rate for Supervision for Erection and commissioning","PriceBasis","Point of Delivery","Delivery Period","Payment Terms","Liquidated Damages","Warranty / Defect Liability Period","CPBG","Contact Person","Contact No.","Order can be given to","Techncially Approved","Approved Vendor","Freight","Inspection Value","Document Value"];for(let wa=0;wa<Tt.length;wa++){const Ca=Tt[wa];if(Nt.includes(Ca.name)){Pt[Ca.name]=Ca.value}}var M=new sap.m.ColumnListItem({id:`${"blankspace"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(M);var U=new sap.m.ColumnListItem({id:`${"spare"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${St(Pt[Nt[0]]??0)+" "+A??" "}`})]});let Vt=L+(parseFloat(Pt[Nt[0]])||0);y.addItem(U);var R=new sap.m.ColumnListItem({id:`${"grandtotal"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${St(Vt)+" "+A}`,design:"Bold"})]});let Bt=St(Pt[Nt[23]])=="NaN"?"0":St(Pt[Nt[23]]);y.addItem(R);var Q=new sap.m.ColumnListItem({id:`${"freight"+ne()}`,visible:false,cells:[new sap.m.Text({text:`${Pt[Nt[1]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Bt+" "+A}`})]});y.addItem(Q);var q=new sap.m.ColumnListItem({id:`${"inspection"+ne()}`,visible:false,cells:[new sap.m.Text({text:`${Pt[Nt[2]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Pt[Nt[24]]??" "}`})]});y.addItem(q);var W=new sap.m.ColumnListItem({id:`${"documentation"+ne()}`,visible:false,cells:[new sap.m.Text({text:`${Pt[Nt[3]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Pt[Nt[25]]??" "}`})]});let Lt=Vt+(parseInt(Pt[Nt[23]])||0)+(parseInt(Pt[Nt[24]])||0)+(parseInt(Pt[Nt[25]])||0);y.addItem(W);var G=new sap.m.ColumnListItem({id:`${"rnod"+ne()}`,visible:false,cells:[new sap.m.Label({text:`${Pt[Nt[4]]??" "}`,design:"Bold"}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(G);var Y=new sap.m.ColumnListItem({id:`${"customduty"+ne()}`,visible:false,cells:[new sap.m.Text({text:`${Pt[Nt[5]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(Y);var J=new sap.m.CustomListItem({id:`${"tax_field"+ne()}`,visible:false,content:[new sap.m.Text({text:vt,width:"294px",height:"40px"})]});y.addItem(J);let At=(parseFloat(Pt[Nt[6]])||0)*Lt/100;let Ot=(parseFloat(Pt[Nt[7]])||0)*Lt/100;let Dt=(parseFloat(Pt[Nt[8]])||0)*Lt/100;var z=new sap.m.ColumnListItem({id:`${"shipment"+ne()}`,visible:false,cells:[new sap.m.Text({text:`${Pt[Nt[9]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});if(!ht){ht=0}let Ft=Lt+At+Ot+Dt;y.addItem(z);var X=new sap.m.ColumnListItem({id:`${"totalincludingtaxes"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${St(ht??0)+" "+A}`,design:"Bold"})]});y.addItem(X);var X=new sap.m.ColumnListItem({id:`${"total_excluding_taxes"+ne()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${St(ht)+" "+A}`,design:"Bold"})]});y.addItem(X);var K=new sap.m.ColumnListItem({id:`${"perdiemrate"+ne()}`,cells:[new sap.m.Text({text:`${Pt[Nt[10]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(K);if(r[pt].Rank=="1"){y.getColumns()[0].setStyleClass("columnStyleClass");y.getColumns()[1].setStyleClass("columnStyleClass");y.getColumns()[2].setStyleClass("columnStyleClass");y.getItems()[y.getItems().length-5].addStyleClass("customColumnList")}y.getItems()[y.getItems().length-5].addStyleClass("taxCell");let jt=y.getItems()[y.getItems().length-5].getContent()[0].addStyleClass("taxTextClass");var Z=I.getItems()[0];var ee=new sap.ui.core.Item(`${"item1"+ne()}`,{text:`${It[wt].eventNo??" "}`});Z.addItem(ee);Z.setValue(`${It[wt].eventNo??""}`);_.addItem(new sap.m.VBox(`${"offer"+ne()}`,{width:"100%"}));var te=_.getItems()[gt];gt++;te.addStyleClass("spacebetweenclass");te.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll"+ne()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));te.getItems()[0].addContent(new sap.m.Text(`${"Scopedeliveryperiod"+ne()}`,{text:`${yt[0]?.Scope_and_Responsibilities??" "}`}));te.addItem(new sap.m.ScrollContainer(`${"CommercialpaymenttermsScroll"+ne()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));te.getItems()[1].addContent(new sap.m.Text(`${"Compliancepaymentterms"+ne()}`,{text:`${yt[0]?.Commercial_Terms??" "}`}));te.addItem(new sap.m.ScrollContainer(`${"OthersliquidedScroll"+ne()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));te.getItems()[2].addContent(new sap.m.Text(`${"Othersliquided"+ne()}`,{text:`${yt[0]?.Compliance_Terms??" "}`}));te.addItem(new sap.m.ScrollContainer(`${"warrantyScroll"+ne()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));te.getItems()[3].addContent(new sap.m.Text(`${"warranty"+ne()}`,{text:`${yt[0]?.Others??" "}`}));const kt=yt[0]?.Vendor_Contact_PersonDASH1??"";if(kt){var ae=/name\s*:(.*?)\s*email/;var se=kt.match(ae)}var le=se?se[1].trim():null;te.addItem(new sap.m.Text(`${"contactperson"+ne()}`,{text:`${yt[0]?.Vendor_Contact_PersonDASH1??" "}`}));const Et=/ph1\s*:\s*(.*?)\s*ph2/;const Ht=kt.match(Et);let Mt=Ht?Ht[1].trim():null;const Ut=/ph2\s*:\s*(.*?)$/;const Rt=kt.match(Ut);let Qt=Rt?Rt[1].trim():null;if(Mt==null){Mt=" "}if(Qt==null){Qt=" "}te.addItem(new sap.m.Text(`${"contactno"+ne()}`,{text:`${Mt+" "+Qt??" "}`}));te.addItem(new sap.m.Text(`${"ordercanbe"+ne()}`,{text:`${Pt["Order can be give to"]??" "}`}));te.addItem(new sap.m.Text(`${"technicallyapproved"+ne()}`,{text:`${r[pt].Technically_Approved??" "}`}));te.addItem(new sap.m.Text(`${"approvedvendor"+ne()}`,{text:`${r[pt].Awarded_Vendor??" "}`}));let qt=te.getItems()[te.getItems().length-1];qt.addStyleClass("customlaststyleclassrsection")}}}pt++}while(pt<r.length);for(let _a=0;_a<$.getItems().length-1;_a++){$.getItems()[_a].setVisible(false);$.getParent().getItems()[2].getItems()[1].getItems()[_a].setVisible(false)}let ct=$?.getItems()[$?.getItems().length-1];if(ct){ct.getItems()[1].getItems()[1].getColumns()[2].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon"+ne()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){var a=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems();if(a.length==1){t.show("No More Status")}else{for(let t=0;t<a.length-1;t++){if(a[t].getVisible()==true){a[t].setVisible(false);e.getSource().setSrc("sap-icon://expand")}else{a[t].setVisible(true);e.getSource().setSrc("sap-icon://collapse")}}}}}))}console.log(ye);if(ye){debugger;Se.addItem(new sap.m.ColumnListItem({cells:[new sap.m.Text({text:`${r[nt]?.Vendor_Name??" "}`,tooltip:`${r[nt]?.Vendor_Name??" "}`,wrapping:false}),new sap.m.Text({text:`${f??" "}`,tooltip:`${r[nt]?.Vendor_Location??" "}`,wrapping:false,textAlign:"Center"})]}));f=0}ye=0}sap.ui.core.BusyIndicator.hide();let Te=g.getItems()[0].getItems()[2].getItems()[0];let Pe=g.getItems()[1].getContent()[0].getItems();for(let $a=0;$a<Pe.length;$a++){let fa=Pe[$a].getItems()[1].getItems();for(let ba=0;ba<fa.length;ba++){let ha=fa[ba].getItems()[1].getItems()[1].getItems();for(let va=0;va<ha.length;va++){if(ha[va].getMetadata()._sClassName!="sap.m.CustomListItem"){let Sa=ha[va].getCells()[2];if(Object.keys(Sa.mAggregations).length!=0){}}}}}let Ne=g.getItems()[0].getItems()[3].getItems();for(let ya=2;ya<=8;ya++){Ne[ya].setVisible(false)}for(let Ta=13;Ta<Ne.length;Ta++){Ne[Ta].setVisible(false)}if(Ne[9].getItems()[1].getSrc()=="sap-icon://navigation-up-arrow"){Ne[9].getItems()[1].setSrc("sap-icon://navigation-right-arrow")}if(Ne[12].getItems()[1].getSrc()=="sap-icon://navigation-down-arrow"){Ne[12].getItems()[1].setSrc("sap-icon://navigation-right-arrow")}let Ve=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::HeaderFacetCustomContainer::HeaderFragment--rowexpand");let Be=g.getItems()[1].getContent()[0].getItems();for(let Pa=0;Pa<Be.length;Pa++){Be[Pa].getItems()[2].setVisible(false)}}catch(Na){t.show(Na)}}}}})});