sap.ui.define([
    "./App.controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
],
function (Controller, Fragment, MessageBox) {
    "use strict";

    return Controller.extend("customerappfreestyle.customerappfreestyle.controller.Customers", {
        onInit: function () {
            this._cust_model = {};
        },
        onAdd_openCustDialog: function(){
            var that = this;
            if(!this._oDialog){
                Fragment.load({
                    name: "customerappfreestyle.customerappfreestyle.fragment.addCustomerDialog",
                    controller: that
                }).then(function(oValue){
                    that._oDialog = oValue;
                    that.getView().addDependent(that._oDialog);
                    that._oDialog.open();
                })
            }else{
                that._oDialog.open();
            }
        },
        onSave: function(){
            let customer = {
                Mandt : '100',
                CustCode : sap.ui.getCore().byId("CUSTCODE").getValue(),
                CustName : sap.ui.getCore().byId("CUSTNAME").getValue(),
                CustMedium : sap.ui.getCore().byId("CUSTMEDIUM").getValue()
            }
            this.getView().getModel().create("/CustomerSet", customer, {
                success: (data) => {
                    this._closeDialog()
                    MessageBox.success('Customer Added Successfully!')
                },
                error: (error) => {
                    MessageBox.error('Error occured during adding the customer.')
                }
            });
        },
        onSelectionChange(oEvent){
            this._cust_model = oEvent.getParameter("listItem").getBindingContext().getObject()
        },
        onEdit_openCustDialog(){
            if(this._cust_model.CustCode){
                let that = this;
                if(!this._oDialog){
                    Fragment.load({
                        name: "customerappfreestyle.customerappfreestyle.fragment.editCustomerDialog",
                        controller: that
                    }).then(function(oValue){
                        that._oDialog = oValue;
                        that.getView().addDependent(that._oDialog);
                        that._populateEditDialogFields();
                        that._oDialog.open();
                    })
                }else{
                    that._populateEditDialogFields();
                    that._oDialog.open();
                }
            }
        },
        _populateEditDialogFields(){
            sap.ui.getCore().byId("CUSTCODE").setEnabled(false).setValue(this._cust_model.CustCode);
            sap.ui.getCore().byId("CUSTNAME").setValue(this._cust_model.CustName);
            sap.ui.getCore().byId("CUSTMEDIUM").setValue(this._cust_model.CustMedium);
        },
        onUpdateCust(){
            let updatedCustomer = {
                CustName : sap.ui.getCore().byId("CUSTNAME").getValue(),
                CustMedium : sap.ui.getCore().byId("CUSTMEDIUM").getValue(),
            };
            let custCode = sap.ui.getCore().byId("CUSTCODE").getValue();
            let mandt = '100';

            this.getView().getModel().update(`/CustomerSet(Mandt='${mandt}',CustCode='${custCode}')`, updatedCustomer, {
                success: (data) => {
                    this._closeDialog();
                    MessageBox.success('Customer Added Successfully!')
                    this._onRefresh();
                },
                error: (error) => {
                    MessageBox.error('Error occured during adding the customer.')
                }
            });
        },
        closeDialog(){
            this._closeDialog()
        },
        _closeDialog(){
            if(this._oDialog){
                this._oDialog.close();
            }
        },
        _onRefresh(){
            this.byId("customers").removeSelections();
            this.byId("customers").getBinding("items").refresh(true);
        }
    });
});