Ext.define("MyApp.view.PromotionForm", {
  extend: "Ext.form.Panel",
  xtype: "promotionForm",

  title: "Add or Edit Promotion",
  bodyPadding: 10,
  width: 400,

  isEditMode: false,

  defaultType: "textfield",
  items: [
    {
      fieldLabel: "Promocode",
      name: "promocode",
      allowBlank: false,
    },
    {
      fieldLabel: "Discount",
      name: "discount",
      allowBlank: false,
    },
    {
      fieldLabel: "Discount",
      name: "discountType",
      allowBlank: false,
    },
    {
      fieldLabel: "Number of voucher",
      xtype: "combo",
      name: "numberOfVoucher",
      queryMode: "local",
      editable: false,
      allowBlank: false,
    },
  ],

  buttons: [
    {
      text: "Submit",
      formBind: true,
      handler: function () {
        var form = this.up("form").getForm();
        if (form.isValid()) {
          var values = form.getValues();
          var promotionStore = Ext.getStore("promotionstore");

          console.log("Adding customer with values:", values);

          if (this.up("form").isEditMode) {
            var currentNameValue = form.findField("name").getValue();

            if (this.up("form").originalNameValue !== currentNameValue) {
              if (promotionStore) {
                promotionStore.add(values);
                Ext.Msg.alert("Success", "Promotion added successfully!");
              } else {
                Ext.Msg.alert("Error", "Promotion store is not available.");
              }
              this.up("form").resetForm();
            } else {
              form.updateRecord();
              Ext.Msg.alert("Success", "Promotion updated successfully!");
              this.up("form").resetForm();
              this.up("form").isEditMode = false;
            }
          } else {
            if (promotionStore) {
              console.log("values to add to customer store:", values);

              promotionStore.add(values);

              promotionStore.commitChanges(); // Commit the change to store
              //promotionStore.load(); // Load new data into the store

              console.log("values in customer store after commit:");
              console.log(promotionStore.getData().items);

              // Ensure form is reset for the next customer
              Ext.Msg.alert("Success", "Promotion added successfully!");

              var newPromotion = promotionStore.getAt(
                promotionStore.getCount() - 1
              );

              this.up("form").loadRecord(newPromotion);

              promotionStore.reload();

              this.up("form").resetForm();
            }
          }
        }
      },
    },
    {
      text: "Cancel",
      handler: function () {
        this.up("form").getForm().reset(); // Reset the form
      },
    },
  ],

  // Method to load a customer record into the form
  loadRecord: function (record) {
    console.log("from inside loadRecord function");
    this.getForm().loadRecord(record); // Load the existing customer data into the form
    this.setTitle("Edit Promotion");
    this.isEditMode = true;

    // Store the original name value for comparison later
    this.originalNameValue = this.getForm().findField("name").getValue();
  },

  resetForm: function () {
    this.getForm().reset(); // Reset the form fields
    this.setTitle("Add or Edit Promotion");
    this.isEditMode = false;
    this.originalNameValue = null; // Reset the original name value

    // Enable the name field when adding a new customer
    var nameField = this.down("[name=name]");
    if (nameField) {
      nameField.setEditable(true); // Enable name field in add mode
    }
  },
});
