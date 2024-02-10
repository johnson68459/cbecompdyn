sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("cbecomp.ext.controller.ObjPage",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){debugger;let t=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();t.getItems()[0].addStyleClass("BorderClass");let s=t.getItems()[0].getItems()[0].getFormContainers()[0].getFormElements()[5].getFields()[0].getItems()[0];if(s.getItems().length==1){s.addItem(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){debugger;if(e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getWidth()!=="70%"){e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().setWidth("70%");e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[1].getItems()[0].setFixedLayout(false)}else{e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().setWidth("30%");e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[1].getItems()[0].setFixedLayout(true)}}}))}let r=t.getItems()[1].getContent()[0].getItems()[0].getItems()[1];let a=t.getItems()[1].getContent()[0].getItems()[1].getItems()[1];let n=t.getItems()[1].getContent()[0].getItems()[2].getItems()[1];let g=t.getItems()[1].getContent()[0].getItems()[3].getItems()[1];let o=t.getItems()[1].getContent()[0].getItems()[4].getItems()[1];t.getItems()[1].getContent()[0].getItems()[0].getItems()[2].setVisible(false);t.getItems()[1].getContent()[0].getItems()[1].getItems()[2].setVisible(false);t.getItems()[1].getContent()[0].getItems()[2].getItems()[2].setVisible(false);t.getItems()[1].getContent()[0].getItems()[3].getItems()[2].setVisible(false);t.getItems()[1].getContent()[0].getItems()[4].getItems()[2].setVisible(false);let i=r.getItems()[2].getItems()[5].getColumns()[2];let l=a.getItems()[1].getItems()[5].getColumns()[2];l.getParent().getParent().setWidth("200%");l.getParent().setWidth("inherit");let P=n.getItems()[1].getItems()[5].getColumns()[2];P.getParent().getParent().setWidth("200%");P.getParent().setWidth("inherit");let m=g.getItems()[1].getItems()[5].getColumns()[2];m.getParent().getParent().setWidth("200%");m.getParent().setWidth("inherit");let I=o.getItems()[1].getItems()[5].getColumns()[2];I.getParent().getParent().setWidth("200%");I.getParent().setWidth("inherit");r.getItems()[2].getItems()[5].getColumns()[0].setVisible(false);r.getItems()[2].getItems()[5].getColumns()[1].setVisible(false);r.getItems()[0].setVisible(false);r.getItems()[1].setVisible(false);a.getItems()[0].setVisible(false);a.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);a.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);n.getItems()[0].setVisible(false);n.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);n.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);g.getItems()[0].setVisible(false);g.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);g.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);o.getItems()[0].setVisible(false);o.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);o.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);$.ajax({url:"",success:function(e){debugger;i.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"18px"}));let t=i.getHeader();t.addContent(new sap.m.Label({text:"Total Amount (INR)"}));t.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(i.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){i.oParent.oParent.oParent.getItems()[0].setVisible(true);i.oParent.oParent.oParent.getItems()[1].setVisible(true);i.oParent.getColumns()[0].setVisible(true);i.oParent.getColumns()[1].setVisible(true);i.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);t.setHeight("12px");t.getParent().getParent().addStyleClass("lastTableBorder");t.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(true)}else{i.oParent.oParent.oParent.getItems()[0].setVisible(false);i.oParent.oParent.oParent.getItems()[1].setVisible(false);i.oParent.getColumns()[0].setVisible(false);i.oParent.getColumns()[1].setVisible(false);i.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);t.setHeight("18px");t.getParent().getParent().removeStyleClass("lastTableBorder");t.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(false)}}}));l.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"18px"}));let s=l.getHeader();s.addContent(new sap.m.Label({text:"Total Amount (INR)"}));s.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(l.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){l.oParent.oParent.oParent.getItems()[0].setVisible(true);l.oParent.getColumns()[0].setVisible(true);l.oParent.getColumns()[1].setVisible(true);l.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);s.setHeight("12px");s.getParent().getParent().addStyleClass("lastTableBorder");s.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(true)}else{l.oParent.oParent.oParent.getItems()[0].setVisible(false);l.oParent.getColumns()[0].setVisible(false);l.oParent.getColumns()[1].setVisible(false);l.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);s.setHeight("18px");s.getParent().getParent().removeStyleClass("lastTableBorder");s.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(false)}}}));P.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"18px"}));let r=P.getHeader();r.addContent(new sap.m.Label({text:"Total Amount (INR)"}));r.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(P.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){P.oParent.oParent.oParent.getItems()[0].setVisible(true);P.oParent.getColumns()[0].setVisible(true);P.oParent.getColumns()[1].setVisible(true);P.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);r.setHeight("12px");r.getParent().getParent().addStyleClass("lastTableBorder");r.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(true)}else{P.oParent.oParent.oParent.getItems()[0].setVisible(false);P.oParent.getColumns()[0].setVisible(false);P.oParent.getColumns()[1].setVisible(false);P.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);r.setHeight("18px");r.getParent().getParent().removeStyleClass("lastTableBorder");r.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(false)}}}));m.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"18px"}));let a=m.getHeader();a.addContent(new sap.m.Label({text:"Total Amount (INR)"}));a.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(m.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){m.oParent.oParent.oParent.getItems()[0].setVisible(true);m.oParent.getColumns()[0].setVisible(true);m.oParent.getColumns()[1].setVisible(true);m.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);a.setHeight("12px");a.getParent().getParent().addStyleClass("lastTableBorder");a.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(true)}else{m.oParent.oParent.oParent.getItems()[0].setVisible(false);m.oParent.getColumns()[0].setVisible(false);m.oParent.getColumns()[1].setVisible(false);m.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);a.setHeight("18px");a.getParent().getParent().removeStyleClass("lastTableBorder");a.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(false)}}}));I.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"18px"}));let n=I.getHeader();n.addContent(new sap.m.Label({text:"Total Amount (INR)"}));n.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(I.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){I.oParent.oParent.oParent.getItems()[0].setVisible(true);I.oParent.getColumns()[0].setVisible(true);I.oParent.getColumns()[1].setVisible(true);I.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);n.setHeight("12px");n.getParent().getParent().addStyleClass("lastTableBorder");n.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(true)}else{I.oParent.oParent.oParent.getItems()[0].setVisible(false);I.oParent.getColumns()[0].setVisible(false);I.oParent.getColumns()[1].setVisible(false);I.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);n.setHeight("18px");n.getParent().getParent().removeStyleClass("lastTableBorder");n.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[0].getItems()[2].getFormContainers()[0].getFormElements()[14].setVisible(false)}}}))}});var d=t.mAggregations.items[0].mAggregations.items[2].mAggregations.formContainers[0].mAggregations.formElements[8];var b=t.mAggregations.items[0].mAggregations.items[2].mAggregations.formContainers[0].mAggregations.formElements[14];d.setVisible(false);b.setVisible(false);let u;let f=r.getItems();f.forEach(e=>{u=e.getItems()[5].getItems();u.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});f=a.getItems();f.forEach(e=>{u=e.getItems()[5].getItems();u.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});f=n.getItems();f.forEach(e=>{u=e.getItems()[5].getItems();u.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});f=g.getItems();f.forEach(e=>{u=e.getItems()[5].getItems();u.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});f=o.getItems();f.forEach(e=>{u=e.getItems()[5].getItems();u.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})})}}}})});