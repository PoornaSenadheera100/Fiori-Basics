sap.ui.define([
    "./App.controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
],
function (Controller, JSONModel, BindingMode) {
    "use strict";

    return Controller.extend("customerappfreestyle.customerappfreestyle.controller.SampleModel", {
        onInit: function () {
            var oModel = new JSONModel({
                employee: {
                    firstname: "Poorna",
                    lastname: "Senadheera"
                }
            })
            this.getView().setModel(oModel)

            var friendsModel = [
                {
                    firstname: "Ruzna",
                    lastname: "Rizvi",
                    fValue: 2
                },
                {
                    firstname: "Prabhavi",
                    lastname: "Jayanetti",
                    fValue: 2
                },
                {
                    firstname: "Nilupul",
                    lastname: "Rambukwella",
                    fValue: 2
                },
                {
                    firstname: "Thresha",
                    lastname: "Herath",
                    fValue: 1
                },
                {
                    firstname: "Kalsha",
                    lastname: "Siriwardhane",
                    fValue: 1
                },
                {
                    firstname: "Praveen",
                    lastname: "De Silva",
                    fValue: 0
                },
                {
                    firstname: "Reham",
                    lastname: "Sahl",
                    fValue: 0
                }
            ]
            var friendsJSONModel = new JSONModel(friendsModel)   
            // friendsModel.setDefaultBindingMode(BindingMode.TwoWay)
            this.getView().setModel(friendsJSONModel, "friendsModel")
        },
        
    });
});