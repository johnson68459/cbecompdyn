sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onRowExpand:function(e){debugger;let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");if(t.getSrc()=="sap-icon://navigation-right-arrow"){t.firePress()}let o=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(o.getSrc()=="sap-icon://navigation-right-arrow"){o.firePress()}let i=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(i.getSrc()=="sap-icon://navigation-right-arrow"){i.firePress()}},onColumnExpand:function(t){debugger;e.show("Custom handler invoked.")}}});