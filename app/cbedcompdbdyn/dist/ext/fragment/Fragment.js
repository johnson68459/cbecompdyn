sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress_includingtax:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent();if(e.getSource().getParent().getParent().getItems()[7].getVisible()==true){e.getSource().getParent().getParent().getItems()[2].setVisible(false);e.getSource().getParent().getParent().getItems()[3].setVisible(false);e.getSource().getParent().getParent().getItems()[4].setVisible(false);e.getSource().getParent().getParent().getItems()[5].setVisible(false);e.getSource().getParent().getParent().getItems()[6].setVisible(false);e.getSource().getParent().getParent().getItems()[7].setVisible(false);e.getSource().getParent().getParent().getItems()[8].setVisible(false);e.getSource().setSrc("sap-icon://navigation-right-arrow")}else{e.getSource().getParent().getParent().getItems()[2].setVisible(true);e.getSource().getParent().getParent().getItems()[3].setVisible(true);e.getSource().getParent().getParent().getItems()[4].setVisible(true);e.getSource().getParent().getParent().getItems()[5].setVisible(true);e.getSource().getParent().getParent().getItems()[6].setVisible(true);e.getSource().getParent().getParent().getItems()[7].setVisible(true);e.getSource().getParent().getParent().getItems()[8].setVisible(true);e.getSource().setSrc("sap-icon://navigation-up-arrow")}var g=t.getItems()[1].getContent()[0].getItems();for(let e=0;e<g.length;e++){for(let t=0;t<g[e].getItems()[1].getItems().length;t++){var s=g[e].getItems()[1].getItems()[t].mAggregations.items[1].mAggregations.items[1];let r=s.getItems().length;for(let e=r-4;e>=r-10;e--){if(s.getItems()[e].getVisible()==true){s.getItems()[e].setVisible(false)}else{s.getItems()[e].setVisible(true)}}}}},onPress_priccebasis:function(e){debugger;var t=e.getSource().getParent().getParent().getItems();var g=e.getSource().getParent().getParent().getParent().getParent();let s=g.getItems()[1].getContent()[0].getItems();for(let e=0;e<s.length;e++){if(s[e].getItems()[2].getVisible()==true){s[e].getItems()[2].setVisible(false)}else{s[e].getItems()[2].setVisible(true)}}if(e.getSource().getSrc()=="sap-icon://navigation-down-arrow"){e.getSource().setSrc("sap-icon://navigation-right-arrow")}else{e.getSource().setSrc("sap-icon://navigation-down-arrow")}for(let e=13;e<t.length;e++){if(t[e].getVisible()==true){t[e].setVisible(false)}else{t[e].setVisible(true)}}},onPress_forwaring:function(e){}}});