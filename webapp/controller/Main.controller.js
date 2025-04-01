sap.ui.define([
    "./App.controller",
    "sap/m/MessageToast",
    "sap/m/Button"

],
function (Controller, MessageToast, Button) {
    "use strict";

    return Controller.extend("customerappfreestyle.customerappfreestyle.controller.Main", {
        onInit: function () {
            var hbox1 = this.getView().byId("hbox1");
            var btn = new Button({
                text: "Dynamic Button",
                press: ()=>{
                    MessageToast.show("You have pressed the Dynamic Button.");
                }
            });
            hbox1.addItem(btn);
        },
        pressBtn(name){
            MessageToast.show("You have pressed " + name + ".");
        },
        navigate(){
            var oRouter = this.getRouter();
            oRouter.navTo("SecondView");
        },
        navToSampleModel(){
            var oRouter = this.getRouter();
            oRouter.navTo("SampleModel");
        },
        openDialogFrag(){
            var that = this;
            if(!this._oDialog){
                this.loadFragment({type: "XML", name: "customerappfreestyle.customerappfreestyle.fragment.dialog"}).then(function(oDialog) {
                    that._oDialog = oDialog;
                    that._oDialog.open()
                });
            }
            this._oDialog.open()
           
        },
        navToSmartTable(){
            var oRouter = this.getRouter();
            oRouter.navTo("SmartTable");
        },
        closeDialog(){
            this._oDialog.close();
        },
        navToCustManage(){
            var oRouter = this.getRouter();
            oRouter.navTo("Customers");
        }
    });
});
