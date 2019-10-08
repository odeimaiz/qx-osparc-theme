!function(){var e={dependsOn:{"qx.Class":{usage:"dynamic",require:!0},"widgetbrowser.pages.AbstractPage":{construct:!0,require:!0},"qx.ui.decoration.Decorator":{construct:!0},"qx.ui.window.Desktop":{construct:!0},"qx.ui.window.Window":{},"qx.ui.layout.VBox":{},"qx.ui.basic.Atom":{},"qx.ui.tabview.TabView":{},"qx.ui.tabview.Page":{},"qx.ui.container.Composite":{},"qx.ui.layout.HBox":{},"qx.ui.groupbox.GroupBox":{},"qx.ui.form.CheckBox":{},"qx.lang.String":{},"qx.ui.form.Button":{}}};qx.Bootstrap.executePendingDefers(e),qx.Class.define("widgetbrowser.pages.Window",{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.constructor.call(this);var e=(new qx.ui.decoration.Decorator).set({width:10,color:"#ddd"});this.__desktop=(new qx.ui.window.Desktop).set({decorator:e}),this.add(this.__desktop,{edge:0,top:0}),this.initWidgets()},members:{__desktop:null,initWidgets:function(){var e,a,t,o=this._widgets;e=this.__createWindow1(),o.push(e),e.open(),this.__desktop.add(e,{left:0,top:0}),a=this.__createWindow2(),o.push(a),a.open(),this.__desktop.add(a,{left:300,top:100}),t=this.__createWindow3(),o.push(t),t.open(),this.__desktop.add(t,{left:80,top:230})},__createWindow1:function(){var e=new qx.ui.window.Window("First Window","icon/16/apps/office-calendar.png");e.setLayout(new qx.ui.layout.VBox(10)),e.setShowStatusbar(!0),e.setStatus("Demo loaded"),e.addListener("move",function(e){this.debug("Moved to: "+e.getData().left+"x"+e.getData().top)},this),e.addListener("resize",function(e){this.debug("Resized to: "+e.getData().width+"x"+e.getData().height)},this);var a=new qx.ui.basic.Atom("Welcome to your first own Window.<br/>Have fun!","icon/32/apps/office-address-book.png");a.setRich(!0),e.add(a);var t=new qx.ui.tabview.TabView;e.add(t,{flex:1});var o=new qx.ui.tabview.Page("Page 1");t.add(o);var i=new qx.ui.tabview.Page("Page 2");t.add(i);var n=new qx.ui.tabview.Page("Page 3");return t.add(n),e},__createWindow2:function(){var e=new qx.ui.window.Window("Window with window-small-cap appearance");e.setLayout(new qx.ui.layout.VBox(10)),e.setStatus("Application is ready"),e.setAppearance("window-small-cap");var a=new qx.ui.basic.Atom("The second window","icon/22/apps/utilities-calculator.png");e.add(a);var t=new qx.ui.container.Composite;t.setLayout(new qx.ui.layout.HBox(10)),e.add(t,{flex:1});var o=new qx.ui.groupbox.GroupBox("Basics");o.setLayout(new qx.ui.layout.VBox(4)),t.add(o,{flex:1});var i=new qx.ui.form.CheckBox("Show Close");i.setValue(!0),i.addListener("changeValue",function(a){e.setShowClose(a.getData())}),o.add(i);var n=new qx.ui.form.CheckBox("Show Maximize");n.setValue(!0),n.addListener("changeValue",function(a){e.setShowMaximize(a.getData())}),o.add(n);var d=new qx.ui.form.CheckBox("Show Minimize");d.setValue(!0),d.addListener("changeValue",function(a){e.setShowMinimize(a.getData())}),o.add(d);var s=new qx.ui.form.CheckBox("Allow Close");s.setValue(!0),s.addListener("changeValue",function(a){e.setAllowClose(a.getData())}),o.add(s);var u=new qx.ui.form.CheckBox("Allow Maximize");u.setValue(!0),u.addListener("changeValue",function(a){e.setAllowMaximize(a.getData())}),o.add(u);var r=new qx.ui.form.CheckBox("Allow Minimize");r.setValue(!0),r.addListener("changeValue",function(a){e.setAllowMinimize(a.getData())}),o.add(r);var w=new qx.ui.form.CheckBox("Show Statusbar");w.setValue(!1),w.addListener("changeValue",function(a){e.setShowStatusbar(a.getData())}),o.add(w);var l=new qx.ui.groupbox.GroupBox("Resizable");l.setLayout(new qx.ui.layout.VBox(4)),t.add(l,{flex:1});var c=new qx.ui.form.CheckBox("Use resize frame");c.setValue(!0),c.addListener("changeValue",function(a){e.setUseResizeFrame(a.getData())}),l.add(c);for(var x=["top","right","bottom","left"],g=0;g<x.length;g++){var p=x[g],h=new qx.ui.form.CheckBox("Resizable "+p).set({value:!0});h.bind("value",e,"resizable"+qx.lang.String.firstUp(p)),l.add(h)}var f=new qx.ui.groupbox.GroupBox("Moveable");f.setLayout(new qx.ui.layout.VBox(4)),t.add(f,{flex:1});var q=new qx.ui.form.CheckBox("Movable");q.setValue(!0),q.addListener("changeValue",function(a){e.setMovable(a.getData())}),f.add(q);var v=new qx.ui.form.CheckBox("Use move frame");return v.addListener("changeValue",function(a){e.setUseMoveFrame(a.getData())}),f.add(v),e},__createWindow3:function(){var e=new qx.ui.window.Window("Third Window","icon/16/apps/internet-telephony.png");e.setLayout(new qx.ui.layout.VBox),e.setMinWidth(200),e.setMaxWidth(450),e.setMaxHeight(400),e.setAllowMaximize(!1);var a=this.__getModalWindow1();this._widgets.push(a);var t=new qx.ui.form.Button("Open Modal Dialog 1","icon/16/apps/office-calendar.png");return t.addListener("execute",a.open,a),e.add(t),e},__getModalWindow1:function(){var e=new qx.ui.window.Window("First Modal Dialog");e.setLayout(new qx.ui.layout.VBox(10)),e.setModal(!0),e.moveTo(150,150),this.__desktop.add(e);var a=this.__getModalWindow2();this._widgets.push(a);var t=new qx.ui.form.Button("Open Modal Dialog 2","icon/16/apps/office-calendar.png");t.addListener("execute",a.open,a),e.add(t);var o=new qx.ui.form.CheckBox("Modal");return o.setValue(!0),e.add(o),o.addListener("changeValue",function(a){e.setModal(a.getData())}),e},__getModalWindow2:function(){var e=new qx.ui.window.Window("Second Modal Dialog");e.setLayout(new qx.ui.layout.VBox(10)),e.setModal(!0),e.setShowClose(!1),e.moveTo(300,300),this.__desktop.add(e);var a=new qx.ui.basic.Atom("Do you want to fly to Berlin?","icon/32/status/dialog-error.png");e.add(a);var t=new qx.ui.container.Composite;t.setLayout(new qx.ui.layout.HBox(10,"right")),e.add(t);var o=new qx.ui.form.Button("Yes","icon/16/actions/dialog-ok.png");o.addListener("execute",function(a){e.close()}),t.add(o);var i=new qx.ui.form.Button("No","icon/16/actions/dialog-cancel.png");return i.addListener("execute",function(e){alert("Sorry, please tap 'Yes'!")}),t.add(i),e}}}),widgetbrowser.pages.Window.$$dbClassInfo=e}();
//# sourceMappingURL=part-6.js.map