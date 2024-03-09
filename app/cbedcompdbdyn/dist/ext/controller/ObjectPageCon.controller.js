sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/m/MessageToast","sap/ui/export/Spreadsheet","sap/ui/model/json/JSONModel","sap/ui/export/library"],function(e,t,a){"use strict";var s=a.EdmType;let l=true;return e.extend("cbedcompdbdyn.ext.controller.ObjectPageCon",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel();let t=this.base.getView().mAggregations.content[0].mAggregations.headerTitle;t.destroyActions()},routing:{onAfterBinding:async function(e){try{function le(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}var a=e.sPath;var s=a.match(/'([^']+)'/);sap.ui.core.BusyIndicator.show();var l="";let ne="cbeObjectPageData";let oe=this.base.getView().getModel().bindContext(`/${ne}(...)`);oe.setParameter("projectId",s[1]);await oe.execute();let re=oe.getBoundContext().getValue();re=JSON.parse(re.value);console.log(re);var n=re[0][0];var o=re[1];var r=re[2];var d=re[3];var i=re[4];var m=re[5];var p=re[6];debugger;var g=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();let de=g.getItems()[0].getItems()[2].getItems()[0].getColumns();for(let Ne=0;Ne<de.length;Ne++){de[Ne].setStyleClass("custcolorclass")}debugger;let ie=s[0];let me=ie.replace(/'/g,"");let pe=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--Sopvalue");let ge=d.find(e=>e.ProjectId==me);pe.setText(`${ge.Subject_of_ProposalOROrder}`);pe.setTextAlign("End");debugger;var c=g.getItems()[0].getItems()[2].getItems()[0];var x=g.getItems()[0].getItems()[1].getItems()[0];if(!x.getItems()[1]){x.addItem(new sap.ui.core.Icon(`${"cylindricaldtaicon"+le()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){var t=g.getItems()[0];let a=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--total_basic_pricing");let s;let l=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--newItemID1");let n;if(t.getWidth()=="30%"){c.setFixedLayout(false);t.setWidth("80%");e.getSource().setSrc("sap-icon://collapse")}else{c.setFixedLayout(true);t.setWidth("30%");e.getSource().setSrc("sap-icon://expand")}let o=0;let r=c.getColumns();for(let e=0;e<r.length;e++){if(r[e].getVisible()==true){o++}}if(o<5){c.setFixedLayout(true)}}}))}c.destroyItems();const ce=new Set;let xe=[];o.forEach(e=>{if(!ce.has(e.Item_Code)){ce.add(e.Item_Code);xe.push(e)}});let ue=o.sort((e,t)=>{if(e.Item_Code!==t.Item_Code){return e.Item_Code.localeCompare(t.Item_Code)}else if(e.Proposed_Vendor_Code!==t.Proposed_Vendor_Code){return e.Proposed_Vendor_Code.localeCompare(t.Proposed_Vendor_Code)}else{return e.PAN_Number.localeCompare(t.PAN_Number)}});let Ie=ue.reduce((e,t)=>{let a=`${t.Item_Code}-${t.Proposed_Vendor_Code}-${t.PAN_Number}`;if(!e[a]){e[a]=[]}e[a].push(t);return e},{});console.log(Ie);debugger;let we="";let Ce=0;for(let Ae in Ie){if(Ie[Ae].length>Ce){Ce=Ie[Ae].length;we=Ae}}let _e=Ie[we];let $e=1;for(let Be=0;Be<xe.length;Be++){c.addItem(new sap.m.ColumnListItem(`${"collistitem"+(Be+1)}`));let Le=c.getItems()[Be];let Oe=new sap.m.Text(`${"itemdesc"+(Be+1)}`,{text:`${xe[Be]?.Item_Short_Description??" "}`,tooltip:`${xe[Be]?.Item_Short_Description??" "}`,wrapping:false});Le.addCell(Oe);debugger;let De=d.filter(e=>e.PAN_Number==xe[Be]?.PAN_Number);let Fe=new sap.m.Text(`${"plantcode"+(Be+1)}`,{text:`${De[0]?.Plant_Code??" "}`,tooltip:`${De[0]?.Plant_Code??" "}`,wrapping:false});Le.addCell(Fe);let je=new sap.m.Text(`${"tag_no"+(Be+1)}`,{text:`${xe[Be]?.tag_no??" "}`,tooltip:`${xe[Be]?.tag_no??" "}`,wrapping:false});Le.addCell(je);let ke=new sap.m.Text(`${"types_of_vessel"+(Be+1)}`,{text:`${xe[Be]?.types_of_vessel??" "}`,tooltip:`${xe[Be]?.types_of_vessel??" "}`,wrapping:false});Le.addCell(ke);let Ee=new sap.m.Text(`${"capacity_each_in_cu_mtr"+(Be+1)}`,{text:`${xe[Be]?.capactity_each??" "}`,tooltip:`${xe[Be]?.capactity_each??" "}`,wrapping:false});Le.addCell(Ee);let He=new sap.m.Text(`${"dia_in_mm"+(Be+1)}`,{text:`${xe[Be]?.dia??" "}`,tooltip:`${xe[Be]?.dia??" "}`,wrapping:false});Le.addCell(He);let Me=new sap.m.Text(`${"tl_to_tl_len"+(Be+1)}`,{text:`${xe[Be]?.tl_tl_len??" "}`,tooltip:`${xe[Be]?.tl_tl_len??" "}`,wrapping:false});Le.addCell(Me);let Ue=new sap.m.Text(`${"moc"+(Be+1)}`,{text:`${xe[Be]?.moc??" "}`,tooltip:`${xe[Be]?.moc??" "}`,wrapping:false});Le.addCell(Ue);let Re=new sap.m.Text(`${"design_pressure_bar"+(Be+1)}`,{text:`${xe[Be]?.design_pb??" "}`,tooltip:`${xe[Be]?.design_pb??" "}`,wrapping:false});Le.addCell(Re);let Qe=new sap.m.Text(`${"weights_in_kg"+(Be+1)}`,{text:`${xe[Be]?.weights??" "}`,tooltip:`${xe[Be]?.weights??" "}`,wrapping:false});Le.addCell(Qe);let qe=new sap.m.Text(`${"uom"+(Be+1)}`,{text:`${xe[Be]?.UOM??" "}`,tooltip:`${xe[Be]?.UOM??" "}`,wrapping:false});Le.addCell(qe);let We=0;for(let Ye=0;Ye<o.length;Ye++){let Je=o[Ye].Quantity;let ze=Je.replace(/,/g,"");let Xe=parseFloat(ze,10);if(o[Ye].Item_Code==xe[Be].Item_Code&&Je){We=We+Xe}}let Ge=new sap.m.Text(`${"qty_no"+(Be+1)}`,{text:`${We??" "}`,tooltip:`${We??" "}`,wrapping:false});Le.addCell(Ge)}let fe={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0};for(let Ke=0;Ke<c.getColumns().length;Ke++){c.getColumns()[Ke].setVisible(true)}for(let Ze=0;Ze<c.getItems().length;Ze++){let et=c.getItems()[Ze].getCells();for(let tt=0;tt<et.length;tt++){if(et[tt].getText().trim()==""){fe[tt]+=1}}}for(let at in fe){if(fe[at]==c.getItems().length){c.getColumns()[at].setVisible(false)}}var u=g.getItems()[1].getContent()[0];u.destroyItems();let be=new Set;let he=0;let ve=g.getItems()[0].getItems()[0].getItems()[0].getItems()[1];ve.destroyItems();for(let st=0;st<r.length;st++){const lt=r[st].vendor_code;if(be.has(lt)){continue}be.add(lt);u.addItem(new sap.m.VBox(`${"sectionvbox"+(st+1)}`));let nt=u.getItems()[he];he++;nt.addStyleClass("BorderClass");nt.addItem(new sap.m.VBox(`${"vboxsuppnameloc"+(st+1)}`));nt.addItem(new sap.m.HBox(`${"hbmiddlesection"+(st+1)}`));nt.addItem(new sap.m.VBox(`${"vbox_last_section"+(st+1)}`));nt.getItems()[0].addStyleClass("stickyright");var I=nt.getItems()[2];var w=new sap.m.ComboBox(`${"combobox"+(st+1)}`,{change:function(e){for(let t=0;t<e.getSource().getParent().getItems()[1].getItems().length;t++){if(e.getSource().getItems()[t].getText()==e.getSource().getValue()){e.getSource().getParent().getItems()[1].getItems()[t].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[t].setVisible(false)}}}});I.addItem(w);var C=new sap.m.HBox(`${"hboxcombo"+(st+1)}`);I.addItem(C);var _=I.getItems()[1];let ot=nt.getItems()[0];ot.addStyleClass("alignmentVendorClass");let rt=r[st]?.Vendor_Name??" ";let dt;if(rt.length>20){dt=rt.substring(0,15)+"...";console.log(dt)}else{dt=r[st]?.Vendor_Name}ot.addItem(new sap.m.Title(`${"SupplierName"+(st+1)}`,{text:`${dt??" "}`,wrapping:true,tooltip:`${r[st].Vendor_Name?r[st].Vendor_Name:" "}`}));ot.getItems()[0].addStyleClass("vendorTitle");ot.addItem(new sap.m.Title(`${"SupplierLocation"+(st+1)}`,{text:`${r[st].Vendor_Location?r[st].Vendor_Location:" "}`}));let it=r[st]?.Awarded_Vendor;if(it=="YES"){ve.addItem(new sap.m.ColumnListItem({cells:[new sap.m.Text({text:`${r[st]?.Vendor_Name??" "}`,tooltip:`${r[st]?.Vendor_Name??" "}`,wrapping:false}),new sap.m.Text({text:`${r[st]?.Awarded_Vendor??" "}`,tooltip:`${r[st]?.Awarded_Vendor??" "}`,wrapping:false,textAlign:"Center"})]}).addStyleClass("ItemPresentStyle"))}else{ve.addItem(new sap.m.ColumnListItem({cells:[new sap.m.Text({text:`${r[st]?.Vendor_Name??" "}`,tooltip:`${r[st]?.Vendor_Name??" "}`,wrapping:false}),new sap.m.Text({text:`${r[st]?.Awarded_Vendor??" "}`,tooltip:`${r[st]?.Awarded_Vendor??" "}`,wrapping:false,textAlign:"Center"})]}))}console.log(r);ot.getItems()[1].addStyleClass("titleStyleClass");ot.addStyleClass("v11spaceBetweenclass");var $=nt.getItems()[1];$.addStyleClass("alignmentVendorClass");let mt=0;let pt=0;do{if(r[mt].ProjectId==me&&r[mt].Proposed_Vendor_Code==r[st].Proposed_Vendor_Code){let ct=r[mt].PAN_Number;function xt(e){for(let t=0;t<p.length;t++){if(p[t].number===e){return true}}return false}if(xt(ct)){let ut=p.filter(e=>e.number===r[mt].PAN_Number);for(let It=0;It<ut.length;It++){$.addItem(new sap.m.VBox(`${"vbmiddlesection"+le()}`,{}));var f=$.getItems().length;var b=$.getItems()[f-1];b.addStyleClass("customVBox");b.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb"+le()}`));var h=b.getItems()[0];h.addItem(new sap.m.Text(`${"org_qtn_ref"+le()}`,{text:`${ut[It]?.number??"NA"}`}));h.addItem(new sap.m.Text(`${"org_date"+le()}`,{text:`${ut[It]?.date??"NA"}`}));debugger;h.addItem(new sap.m.Text(`${"org_validity"+le()}`,{text:`${r[mt]?.validity??"NA"}`}));h.addItem(new sap.m.Text(`${"org_cylindrical_space"+le()}`,{text:""}));h.addStyleClass("vbmiddlesectionclass");var v=new sap.m.VBox(`${"innervbox"+le()}`,{alignItems:"Center"});b.addItem(v);let wt=d.find(e=>e.PAN_Number===r[mt].PAN_Number);v.addItem(new sap.m.Label(`${"original_offer"+le()}`,{text:`${ut[It]?.eventNo??" "}`,design:"Bold"}));var S=new sap.m.Table({id:`${"offer"+le()}`,class:"tableBorder",growing:true,growingThreshold:20,width:"350px",fixedLayout:true});S.addStyleClass("tableBorder");v.addItem(S);var y=new sap.m.Column({id:`${"unit_rate"+le()}`,header:new sap.m.Label({text:"Unit Price",design:"Bold",wrapping:false}),width:"100px"});var T=new sap.m.Column({id:`${"unit_rate_per"+le()}`,header:new sap.m.Label({text:"Quantity",design:"Bold",wrapping:true}),width:"70px"});var P=new sap.m.Column({id:`${"total_amt_offer"+le()}`,header:new sap.m.HBox,width:"140px"});S.addColumn(y);S.addColumn(T);S.addColumn(P);var V=S.getColumns()[2].getHeader();V.addItem(new sap.m.Label({text:"Total Amount",design:"Bold"}));var N=[];var A=0;var B="";let Ct=0;let _t=new Set;const $t=o.filter(e=>e.PAN_Number===r[mt].PAN_Number&&e.Proposed_Vendor_Code===r[mt].Proposed_Vendor_Code);let ft=0;let bt="";function ht(e,t){let a="";switch(t){case"INR":a+=parseFloat(e).toLocaleString("en-IN",{maximumFractionDigits:2});break;default:a+=parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:2});break}return a}const vt=i.filter(e=>e.PAN_Number===r[mt].PAN_Number&&e.Proposed_Vendor_Code===r[mt].Proposed_Vendor_Code);B=vt[0]?.Order_CurrencyORBid_currency??"NA";var L=false;for(let Qt=0;Qt<xe.length;Qt++){const qt=xe[Qt];let Wt=o.filter(e=>e.ProjectId==me&&e.Proposed_Vendor_Code==r[mt].Proposed_Vendor_Code&&e.Item_Code==xe[Qt].Item_Code&&e.PAN_Number==ct);let Gt=$t.filter(e=>e.Item_Code===qt.Item_Code);if(Gt&&Wt.length){if(Wt.length==1){var O=Wt[0].Unit_Price?.replace(/,/g,"")??0;var D=Wt[0].Quantity?.replace(/,/g,"")??0;let Yt=Wt[0].extendedPrice?.replace(/,/g,"")??0;ft=ft+parseFloat(Yt??0);bt=bt+(Wt[0]?.Indian_Tax_PER??" ")+"\n";O=O=="NaN"?" ":O;const Jt=Number(O??0)*Number(D??0);const zt=`${Jt} ${Wt[0].Unit_Price??" "}`;A+=Jt;const Xt=new sap.m.ColumnListItem({id:`${"item1data"+le()}`,cells:[new sap.m.Text({text:`${ht(O,B)??" "} ${B}`}),new sap.m.Text({text:`${Wt[0].Quantity??" "}`}),new sap.m.Text({text:`${ht(Jt,B)+" "+B}`})],visible:true});if(r[mt].Awarded_Vendor=="YES"){Xt.addStyleClass("ItemPresentStyle")}S.addItem(Xt)}else{for(let Kt=0;Kt<Wt.length;Kt++){var O=Wt[Kt].Unit_Price?.replace(/,/g,"")??0;var D=Wt[Kt].Quantity?.replace(/,/g,"")??0;let Zt=Wt[Kt].extendedPrice?.replace(/,/g,"")??0;ft=ft+parseFloat(Zt??0);bt=bt+(Wt[0]?.Indian_Tax_PER??" ")+"\n";const ea=Number(O??0)*Number(D??0);const ta=`${ea} ${Wt[0].Unit_Price??" "}`;A+=ea;if(Kt==0){let aa=[];let sa=new sap.m.Label({text:`Unit Rate`,design:"Bold"});sa.addStyleClass("labelColorClass");let la=new sap.m.Label({text:`Quantity`,design:"Bold"});la.addStyleClass("labelColorClass");let na=new sap.m.Label({text:`Total Amount`,design:"Bold"});na.addStyleClass("labelColorClass");let oa=[];oa.push(sa);oa.push(la);oa.push(na);let ra=new sap.m.HBox({justifyContent:"SpaceBetween",alignContent:"SpaceBetween",items:oa});ra.addStyleClass("hboxPopoverClass");aa.push(ra);var F=[];for(let ia=1;ia<Wt.length;ia++){var O=Wt[ia].Unit_Price?.replace(/,/g,"")??0;var D=Wt[ia].Quantity?.replace(/,/g,"")??0;let ma=Wt[ia].extendedPrice?.replace(/,/g,"")??0;ft=ft+parseFloat(ma??0);bt=bt+(Wt[ia]?.Indian_Tax_PER??" ")+"\n";const pa=Number(O??0)*Number(D??0);const ga=`${pa} ${Wt[ia].Unit_Price??" "}`;A+=pa;let ca=new sap.m.HBox({justifyContent:"SpaceBetween",alignContent:"SpaceBetween",items:[new sap.m.Text({text:`${ht(O,B)??" "} ${B}`}),new sap.m.Text({text:`${Wt[ia].Quantity??" "}`}),new sap.m.Text({text:`${ht(pa,B)+" "+B}`})]});F.push({vendorcode:dt,unit_rate:`${ht(O,B)??" "} ${B}`,quantity:`${Wt[ia].Quantity??" "}`,total:`${ht(pa,B)+" "+B}`});ca.addStyleClass("hboxPopoverClass");aa.push(ca)}if(F.length){var j=this.base.getExtensionAPI().getModel();var k=j.bindContext("/storeVendorDetails(...)");var E=JSON.stringify(F);k.setParameter("result",E);await k.execute()}const da=new sap.m.ColumnListItem({id:`${"item1data"+le()}`,cells:[new sap.m.Text({text:`${ht(O,B)??" "} ${B}`}),new sap.m.Text({text:`${Wt[Kt].Quantity??" "}`}),new sap.m.HBox({items:[new sap.m.Text({text:`${ht(ea,B)+" "+B} ⠀`}),new sap.ui.core.Icon({src:"sap-icon://overflow",activeColor:"black",color:"black",press:function(e){debugger;let t=new sap.m.Popover({showHeader:false,placement:sap.m.PlacementType.Bottom,content:aa});if(e.getSource().getParent().getParent().getTable().getColumns()[2].getStyleClass()=="columnStyleClass"){t.addStyleClass("PopOverClassBox")}t.openBy(e.getSource())}})]})],visible:true});if(r[mt].Awarded_Vendor=="YES"){da.addStyleClass("ItemPresentStyle")}da.addStyleClass("ItemPresentStyle");S.addItem(da);break}}}}else{const xa=new sap.m.ColumnListItem({id:`${"item1data"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});S.addItem(xa)}}const St=m.filter(e=>e.PAN_Number===r[mt].PAN_Number&&e.Proposed_Vendor_Code===r[mt].Proposed_Vendor_Code);let yt={};const Tt=["Spares for 2 Years operation","Packing, Marking, Forwarding & Freight","Inspection / Testing Charges","Documentation Charges","RNOD","Custom Duty & Cess","SGST","IGST","UGST","Shipment charges from EXW to ISRO Mahendragiri","Per Diem rate for Supervision for Erection and commissioning","PriceBasis","Point of Delivery","Delivery Period","Payment Terms","Liquidated Damages","Warranty / Defect Liability Period","CPBG","Contact Person","Contact No.","Order can be given to","Techncially Approved","Approved Vendor","Freight","Inspection Value","Document Value"];for(let ua=0;ua<St.length;ua++){const Ia=St[ua];if(Tt.includes(Ia.name)){yt[Ia.name]=Ia.value}}var H=new sap.m.ColumnListItem({id:`${"blankspace"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});S.addItem(H);var M=new sap.m.ColumnListItem({id:`${"spare"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${ht(yt[Tt[0]]??0)+" "+B??" "}`})]});let Pt=A+(parseFloat(yt[Tt[0]])||0);S.addItem(M);var U=new sap.m.ColumnListItem({id:`${"grandtotal"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${ht(Pt)+" "+B}`,design:"Bold"})]});let Vt=ht(yt[Tt[23]])=="NaN"?"0":ht(yt[Tt[23]]);S.addItem(U);var R=new sap.m.ColumnListItem({id:`${"freight"+le()}`,visible:false,cells:[new sap.m.Text({text:`${yt[Tt[1]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Vt+" "+B}`})]});S.addItem(R);var Q=new sap.m.ColumnListItem({id:`${"inspection"+le()}`,visible:false,cells:[new sap.m.Text({text:`${yt[Tt[2]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${yt[Tt[24]]??" "}`})]});S.addItem(Q);var q=new sap.m.ColumnListItem({id:`${"documentation"+le()}`,visible:false,cells:[new sap.m.Text({text:`${yt[Tt[3]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${yt[Tt[25]]??" "}`})]});let Nt=Pt+(parseInt(yt[Tt[23]])||0)+(parseInt(yt[Tt[24]])||0)+(parseInt(yt[Tt[25]])||0);S.addItem(q);var W=new sap.m.ColumnListItem({id:`${"rnod"+le()}`,visible:false,cells:[new sap.m.Label({text:`${yt[Tt[4]]??" "}`,design:"Bold"}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});S.addItem(W);var G=new sap.m.ColumnListItem({id:`${"customduty"+le()}`,visible:false,cells:[new sap.m.Text({text:`${yt[Tt[5]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});S.addItem(G);var Y=new sap.m.CustomListItem({id:`${"tax_field"+le()}`,visible:false,content:[new sap.m.Text({text:bt,width:"294px",height:"40px"})]});S.addItem(Y);let At=(parseFloat(yt[Tt[6]])||0)*Nt/100;let Bt=(parseFloat(yt[Tt[7]])||0)*Nt/100;let Lt=(parseFloat(yt[Tt[8]])||0)*Nt/100;var J=new sap.m.ColumnListItem({id:`${"shipment"+le()}`,visible:false,cells:[new sap.m.Text({text:`${yt[Tt[9]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});if(!ft){ft=0}let Ot=Nt+At+Bt+Lt;S.addItem(J);var z=new sap.m.ColumnListItem({id:`${"totalincludingtaxes"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${ht(ft??0)+" "+B}`,design:"Bold"})]});S.addItem(z);var z=new sap.m.ColumnListItem({id:`${"total_excluding_taxes"+le()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${ht(ft)+" "+B}`,design:"Bold"})]});S.addItem(z);var X=new sap.m.ColumnListItem({id:`${"perdiemrate"+le()}`,cells:[new sap.m.Text({text:`${yt[Tt[10]]??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});S.addItem(X);if(r[mt].Rank=="1"){S.getColumns()[0].setStyleClass("columnStyleClass");S.getColumns()[1].setStyleClass("columnStyleClass");S.getColumns()[2].setStyleClass("columnStyleClass");S.getItems()[S.getItems().length-5].addStyleClass("customColumnList")}S.getItems()[S.getItems().length-5].addStyleClass("taxCell");let Dt=S.getItems()[S.getItems().length-5].getContent()[0].addStyleClass("taxTextClass");var K=I.getItems()[0];var Z=new sap.ui.core.Item(`${"item1"+le()}`,{text:`${ut[It].eventNo??" "}`});K.addItem(Z);K.setValue(`${ut[It].eventNo??""}`);_.addItem(new sap.m.VBox(`${"offer"+le()}`,{width:"100%"}));var ee=_.getItems()[pt];pt++;ee.addStyleClass("spacebetweenclass");ee.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll"+le()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));ee.getItems()[0].addContent(new sap.m.Text(`${"Scopedeliveryperiod"+le()}`,{text:`${vt[0]?.Scope_and_Responsibilities??" "}`}));ee.addItem(new sap.m.ScrollContainer(`${"CommercialpaymenttermsScroll"+le()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));ee.getItems()[1].addContent(new sap.m.Text(`${"Compliancepaymentterms"+le()}`,{text:`${vt[0]?.Commercial_Terms??" "}`}));ee.addItem(new sap.m.ScrollContainer(`${"OthersliquidedScroll"+le()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));ee.getItems()[2].addContent(new sap.m.Text(`${"Othersliquided"+le()}`,{text:`${vt[0]?.Compliance_Terms??" "}`}));ee.addItem(new sap.m.ScrollContainer(`${"warrantyScroll"+le()}`,{vertical:true,height:"100px"}).addStyleClass("hboxScrollScope"));ee.getItems()[3].addContent(new sap.m.Text(`${"warranty"+le()}`,{text:`${vt[0]?.Others??" "}`}));const Ft=vt[0]?.Vendor_Contact_PersonDASH1??"";if(Ft){var te=/name\s*:(.*?)\s*email/;var ae=Ft.match(te)}var se=ae?ae[1].trim():null;ee.addItem(new sap.m.Text(`${"contactperson"+le()}`,{text:`${vt[0]?.Vendor_Contact_PersonDASH1??" "}`}));const jt=/ph1\s*:\s*(.*?)\s*ph2/;const kt=Ft.match(jt);let Et=kt?kt[1].trim():null;const Ht=/ph2\s*:\s*(.*?)$/;const Mt=Ft.match(Ht);let Ut=Mt?Mt[1].trim():null;if(Et==null){Et=" "}if(Ut==null){Ut=" "}ee.addItem(new sap.m.Text(`${"contactno"+le()}`,{text:`${Et+" "+Ut??" "}`}));ee.addItem(new sap.m.Text(`${"ordercanbe"+le()}`,{text:`${yt["Order can be give to"]??" "}`}));ee.addItem(new sap.m.Text(`${"technicallyapproved"+le()}`,{text:`${r[mt].Technically_Approved??" "}`}));ee.addItem(new sap.m.Text(`${"approvedvendor"+le()}`,{text:`${r[mt].Awarded_Vendor??" "}`}));let Rt=ee.getItems()[ee.getItems().length-1];Rt.addStyleClass("customlaststyleclassrsection")}}}mt++}while(mt<r.length);for(let wa=0;wa<$.getItems().length-1;wa++){$.getItems()[wa].setVisible(false);$.getParent().getItems()[2].getItems()[1].getItems()[wa].setVisible(false)}let gt=$?.getItems()[$?.getItems().length-1];if(gt){gt.getItems()[1].getItems()[1].getColumns()[2].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon"+le()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){var a=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems();if(a.length==1){t.show("No More Status")}else{for(let t=0;t<a.length-1;t++){if(a[t].getVisible()==true){a[t].setVisible(false);e.getSource().setSrc("sap-icon://expand")}else{a[t].setVisible(true);e.getSource().setSrc("sap-icon://collapse")}}}}}))}}sap.ui.core.BusyIndicator.hide();let Se=g.getItems()[0].getItems()[2].getItems()[0];let ye=g.getItems()[1].getContent()[0].getItems();for(let Ca=0;Ca<ye.length;Ca++){let _a=ye[Ca].getItems()[1].getItems();for(let $a=0;$a<_a.length;$a++){let fa=_a[$a].getItems()[1].getItems()[1].getItems();for(let ba=0;ba<fa.length;ba++){if(fa[ba].getMetadata()._sClassName!="sap.m.CustomListItem"){let ha=fa[ba].getCells()[2];if(Object.keys(ha.mAggregations).length!=0){debugger}}}}}let Te=g.getItems()[0].getItems()[3].getItems();for(let va=2;va<=8;va++){Te[va].setVisible(false)}for(let Sa=13;Sa<Te.length;Sa++){Te[Sa].setVisible(false)}if(Te[9].getItems()[1].getSrc()=="sap-icon://navigation-up-arrow"){Te[9].getItems()[1].setSrc("sap-icon://navigation-right-arrow")}if(Te[12].getItems()[1].getSrc()=="sap-icon://navigation-down-arrow"){Te[12].getItems()[1].setSrc("sap-icon://navigation-right-arrow")}let Pe=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::HeaderFacetCustomContainer::HeaderFragment--rowexpand");let Ve=g.getItems()[1].getContent()[0].getItems();for(let ya=0;ya<Ve.length;ya++){Ve[ya].getItems()[2].setVisible(false)}}catch(Ta){t.show(Ta)}}}}})});