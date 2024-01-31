sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(t){e.show("Custom handler invoked.")},onChangefun:function(e){debugger;e.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);e.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);e.getSource().getParent().getItems()[1].getItems()[2].setVisible(false);if(e.getSource().mProperties.value=="Original Offer"){e.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)}else if(e.getSource().mProperties.value=="Reverse Auction Offer"){e.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)}},onChangefun1:function(e){debugger;e.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);e.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);if(e.getSource().mProperties.value=="Original and Final Offer"){e.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)}else if(e.getSource().mProperties.value=="Final negotiated Offer"){e.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)}},onChangefun2:function(e){debugger;e.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);e.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);if(e.getSource().mProperties.value=="Original Offer"){e.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)}else if(e.getSource().mProperties.value=="Final Offer"){e.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)}},onChangefun3:function(e){debugger;e.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);e.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);if(e.getSource().mProperties.value=="Original Offer"){e.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)}else if(e.getSource().mProperties.value=="Online Reverse Auction Offer"){e.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)}},collapseFunB:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent().getFormElements()[5];var g=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent();var s=g.getItems()[1].getContent()[0].getItems()[0];var r=g.getItems()[1].getContent()[0].getItems()[1];var a=g.getItems()[1].getContent()[0].getItems()[2];var i=g.getItems()[1].getContent()[0].getItems()[3];var n=g.getItems()[1].getContent()[0].getItems()[4];var m=s.getItems()[1].getItems()[0].getItems()[5].getItems()[6];var o=s.getItems()[1].getItems()[1].getItems()[5].getItems()[6];var l=s.getItems()[1].getItems()[2].getItems()[5].getItems()[6];var I=r.getItems()[1].getItems()[0].getItems()[5].getItems()[6];var P=r.getItems()[1].getItems()[1].getItems()[5].getItems()[6];var u=a.getItems()[1].getItems()[0].getItems()[5].getItems()[6];var f=a.getItems()[1].getItems()[1].getItems()[5].getItems()[6];var c=i.getItems()[1].getItems()[0].getItems()[5].getItems()[6];var b=i.getItems()[1].getItems()[1].getItems()[5].getItems()[6];var V=n.getItems()[1].getItems()[0].getItems()[5].getItems()[6];var v=n.getItems()[1].getItems()[1].getItems()[5].getItems()[6];if(t.getVisible()==true){t.setVisible(false);m.setVisible(false);o.setVisible(false);l.setVisible(false);I.setVisible(false);P.setVisible(false);u.setVisible(false);f.setVisible(false);c.setVisible(false);b.setVisible(false);V.setVisible(false);v.setVisible(false);e.getSource().mProperties.src="sap-icon://navigation-right-arrow"}else{t.setVisible(true);m.setVisible(true);o.setVisible(true);l.setVisible(true);I.setVisible(true);P.setVisible(true);u.setVisible(true);f.setVisible(true);c.setVisible(true);b.setVisible(true);V.setVisible(true);v.setVisible(true);e.getSource().mProperties.src="sap-icon://navigation-up-arrow"}},collapseFunD:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[8];var g=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];var s=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];var r=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];var a=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];var i=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];var n=g.getParent().getItems()[2].mAggregations.items[1];var m=s.getParent().getItems()[2].mAggregations.items[1];var o=r.getParent().getItems()[2].mAggregations.items[1];var l=a.getParent().getItems()[2].mAggregations.items[1];var I=i.getParent().getItems()[2].mAggregations.items[1];if(t.getVisible()==true){t.setVisible(false);e.getSource().mProperties.src="sap-icon://navigation-right-arrow";let n;let m=g.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});m=s.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});m=r.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});m=a.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})});m=i.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(false)}})})}else{t.setVisible(true);e.getSource().mProperties.src="sap-icon://navigation-up-arrow";let n;let m=g.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(true)}})});m=s.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(true)}})});m=r.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(true)}})});m=a.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(true)}})});m=i.getItems();m.forEach(e=>{n=e.getItems()[5].getItems();n.forEach((e,t)=>{if(t>=9&&t<=13){e.setVisible(true)}})})}},collapseFunG:function(e){var t=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];var g=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];var s=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];var r=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];var a=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];var i=t.getParent().getItems()[2];var n=g.getParent().getItems()[2];var m=s.getParent().getItems()[2];var o=r.getParent().getItems()[2];var l=a.getParent().getItems()[2];debugger;var I=e.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[14];if(I.getVisible()==true){I.setVisible(false);i.setVisible(false);n.setVisible(false);m.setVisible(false);o.setVisible(false);l.setVisible(false);e.getSource().mProperties.src="sap-icon://navigation-right-arrow"}else{I.setVisible(true);i.setVisible(true);n.setVisible(true);m.setVisible(true);o.setVisible(true);l.setVisible(true);e.getSource().mProperties.src="sap-icon://navigation-down-arrow"}}}});