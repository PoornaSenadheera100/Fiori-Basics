sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("customerappfreestyle.customerappfreestyle.controller.App", {
        onInit: function() {
        },
        getRouter(){
          return this.getOwnerComponent().getRouter();
        }
      });
    }
  );
  