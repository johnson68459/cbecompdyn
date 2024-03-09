sap.ui.define(["sap/m/MessageToast","sap/ui/export/Spreadsheet","sap/ui/model/json/JSONModel","sap/ui/export/library"],function(e,t,g,s){"use strict";var l=s.EdmType;return{onRowExpand:function(e){debugger;if(e.getSource().getText()=="ItemList-ExpandAll"){debugger;e.getSource().setText("ItemList-CollapseAll");let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(t.getSrc()=="sap-icon://navigation-right-arrow"){t.firePress()}let g=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(g.getSrc()=="sap-icon://navigation-right-arrow"){g.firePress()}}else{e.getSource().setText("ItemList-ExpandAll");let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(t.getSrc()=="sap-icon://navigation-up-arrow"){t.firePress()}let g=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(g.getSrc()=="sap-icon://navigation-down-arrow"){g.firePress()}}},onColumnExpand:function(e){debugger;var t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--rightHboxcontainer").getItems();var g=e.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];if(e.getSource().getPressed()==true){e.getSource().setText("VendorList-CollapseAll");if(g.getSrc()=="sap-icon://expand"){g.firePress()}for(let e=0;e<t.length;e++){let g=t[e].getItems()[1].getItems().length;debugger;var s=t[e].getItems()[1].getItems()[g-1].getItems()[1].getItems()[1].getColumns()[2].getHeader().getItems()[1];if(s&&s.getSrc()=="sap-icon://expand"){s.firePress()}}}else{e.getSource().setText("VendorList-ExpandAll");if(g.getSrc()=="sap-icon://collapse"){g.firePress()}for(let e=0;e<t.length;e++){let g=t[e].getItems()[1].getItems().length;var s=t[e].getItems()[1].getItems()[g-1].getItems()[1].getItems()[1].getColumns()[2].getHeader().getItems()[1];if(s&&s.getSrc()=="sap-icon://collapse"){s.firePress()}}}},onExportExcel:async function(t){debugger;var g=[];let s=t.getSource().getModel().bindContext("/getVendorDetails(...)");await s.execute();let o=s.getBoundContext();let n=o.getObject();let r=JSON.parse(n.value);let a=0;var i=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1");let m=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--Sopvalue").getText();let c=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--itemstable1");let u=[];debugger;for(let e=0;e<c.getItems().length;e++){u.push({})}var g=[{2:"Commercial Bid Evaluation"},{1:"",11:"Supplier"},{1:"",11:"Location"},{1:"Project",2:`${"SOP: "+m}`,11:"Qtn. Ref."},{1:"",11:"Date"},{1:"",11:"Validity"},{1:""}];let d={};let p=2;for(let e=0;e<c.getColumns().length;e++){if(c.getColumns()[e].getVisible()==true){d[p]=c.getColumns()[e].getHeader().getText();p++}}g.push(d);g[1][p]=g[1][11];delete g[1][11];g[2][p]=g[2][11];delete g[2][11];g[3][p]=g[3][11];delete g[3][11];g[4][p]=g[4][11];delete g[4][11];g[5][p]=g[5][11];delete g[5][11];debugger;for(let e=0;e<c.getItems().length;e++){let t={};let s=2;for(let g=0;g<c.getColumns().length;g++){if(c.getColumns()[g].getVisible()==true){t[s]=c.getItems()[e].getCells()[g].getText();s++}}g.push(t)}var I=[{1:"",2:""},{1:"3",[p]:"Spares for 2 Years operation"},{1:" ",[p]:"Grand Total"},{1:"4",[p]:"Freight"},{1:"5",[p]:"Inspection / Testing Charges"},{1:"B.3",[p]:"Documentation Charges"},{1:"C",[p]:"RNOD"},{1:"D.1",[p]:"Custom Duty & Cess"},{1:"D.2",[p]:"Tax"},{1:"D.6",[p]:"Shipment charges from EXW to ISRO Mahendragiri"},{1:"D",[p]:"Total Basic Price including packing, marking & forwarding, Transportation including Taxes"},{[p]:"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes"},{1:"F",[p]:"Per Diem rate for Supervision for Erection and commissioning"},{1:"G.3",[p]:"Scope and Responsibilities"},{1:"G.4",[p]:"Commercial Terms"},{1:"G.5",[p]:"Compliance Terms"},{1:"G.6",[p]:"Others"},{1:"G.9",[p]:"Contact person"},{1:"G.10",[p]:"Contact No"},{1:"G.11",[p]:"Order can be given to .."},{1:"G.12",[p]:"Technical approved"},{1:"G.13",[p]:"Approved vendor"}];debugger;var b=g.concat(I);var f=[];var x=i.getItems()[1].getContent()[0].getItems();let C=[];let h=[];let T=p+2;for(let e=0;e<x.length;e++){let t=x[e].getItems()[0].getItems()[0].getTooltip();let g=x[e].getItems()[0].getItems()[1].getText();let s=x[e].getItems()[1].getItems();let l=[];C=[{[T]:""},{[T]:t},{[T]:g}];let o=[];let n=x[e].getItems()[2].getItems()[1].getItems();for(let e=0;e<s.length;e++){let t=s[e].getItems()[0].getItems()[0].getText();let g=s[e].getItems()[0].getItems()[1].getText();let l=s[e].getItems()[0].getItems()[2].getText();let i=s[e].getItems()[1].getItems()[0].getText();let m=T;let c=T+1;let d=T+2;T=T+3;let p=[{[m]:t},{[m]:g},{[m]:l},{[m]:i},{[m]:"Unit Rate",[c]:"Quantity",[d]:"Total Amount"}];var S=[];debugger;for(let t=0;t<u.length;t++){var v=s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[2];if(v.getMetadata()._sClassName=="sap.m.Text"){S.push({[m]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[0].getText(),[c]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[1].getText(),[d]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[2].getText()})}else{debugger;var P=r[a];var y=s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[2].getItems()[0].getText();for(let e=0;e<P.length;e++){y=y+`(Unit Rate : ${P[e].unit_rate}, Quantity : ${P[e].quantity}, Total Amount: ${P[e].total})\n`}S.push({[m]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[0].getText(),[c]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[1].getText(),[d]:y});a++}}p=p.concat(S);let I=s[e].getItems()[1].getItems()[1].getItems();let b=u.length;let f=[{[m]:""},{[d]:I[b+1].getCells()[2].getText()},{[d]:I[b+2].getCells()[2].getText()},{[m]:I[b+3].getCells()[0].getText(),[d]:I[b+3].getCells()[2].getText()},{[m]:I[b+4].getCells()[0].getText(),[d]:I[b+4].getCells()[2].getText()},{[m]:I[b+5].getCells()[0].getText(),[d]:I[b+5].getCells()[2].getText()},{[d]:I[b+6].getCells()[1].getText()},{[d]:I[b+7].getCells()[1].getText()},{[m]:I[b+8].getContent()[0].getText()},{[m]:I[b+9].getCells()[0].getText()},{[d]:I[b+10].getCells()[2].getText()},{[d]:I[b+11].getCells()[2].getText()},{[d]:I[b+12].getCells()[2].getText()},{[m]:n[e].getItems()[0].getContent()[0].getText()},{[m]:n[e].getItems()[1].getContent()[0].getText()},{[m]:n[e].getItems()[2].getContent()[0].getText()},{[m]:n[e].getItems()[3].getContent()[0].getText()},{[m]:n[e].getItems()[4].getText()},{[m]:n[e].getItems()[5].getText()},{[m]:n[e].getItems()[6].getText()},{[m]:n[e].getItems()[7].getText()},{[m]:n[e].getItems()[8].getText()}];p=p.concat(f);o.push(p)}const i=o.map(e=>e.length);const m=i.every((e,t,g)=>e===g[0]);let c=[];if(m){for(let e=0;e<o[0].length;e++){let t={};for(let g=0;g<o.length;g++){Object.assign(t,o[g][e])}c.push(t)}console.log(c)}else{console.log("Arrays in updatarr have different lengths. Unable to merge.")}C=C.concat(c);h.push(C)}let j=[];const A=h.map(e=>e.length);const O=A.every((e,t,g)=>e===g[0]);if(O){for(let e=0;e<h[0].length;e++){let t={};for(let g=0;g<h.length;g++){Object.assign(t,h[g][e])}j.push(t)}console.log(j)}else{console.log("Arrays in updatarr have different lengths. Unable to merge.")}console.log(j);let D=[];if(b.length===j.length){for(let e=0;e<b.length;e++){let t=Object.assign({},b[e],j[e]);D.push(t)}console.log(D)}else{console.log("Arrays have different lengths. Unable to merge.")}let w=[];for(let e=1;e<T;e++){if(T==1){w.push({label:` `,property:`${e+1}`,type:l.String,width:"100"})}else{w.push({label:` `,property:`${e+1}`,type:l.String})}}debugger;debugger;var E=new sap.ui.export.Spreadsheet({workbook:{columns:w,context:{application:"SAP UI5 Export Sample",author:"Sample"},hierarchyLevel:"level"},dataSource:D,fileName:"cbe_comp.xlsx"});E.build().then(function(){e.show("Exported successfully!")}).catch(function(t){e.show("Export failed: "+t)})}}});