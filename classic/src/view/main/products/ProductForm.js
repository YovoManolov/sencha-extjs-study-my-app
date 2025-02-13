Ext.define("MyApp.view.ProductForm", {
  extend: "Ext.form.Panel",
  xtype: "productForm",

  title: "Add or Edit Product",
  bodyPadding: 10,
  width: 400,

  isEditMode: false,

  defaultType: "textfield",
  items: [
    {
      fieldLabel: "Name",
      name: "name",
      allowBlank: false,
    },
    {
      fieldLabel: "Price",
      name: "price",
      allowBlank: false,
    },
    {
      fieldLabel: "Currency",
      name: "currency",
      allowBlank: false,
    },
    {
      fieldLabel: "Discount applied",
      name: "discountApplied",
      allowBlank: false,
    },
  ],

  buttons: [
    {
      text: "Submit",
      formBind: true, // Only enabled once the form is valid
      handler: function () {
        var form = this.up("form").getForm();
        if (form.isValid()) {
          var values = form.getValues();
          var productStore = Ext.getStore("productstore");

          if (this.up("form").isEditMode) {
            var currentNameValue = form.findField("name").getValue();

            if (this.up("form").originalNameValue !== currentNameValue) {
              if (productStore) {
                productStore.add(values);
                Ext.Msg.alert("Success", "Product added successfully!");
              } else {
                Ext.Msg.alert("Error", "Product store is not available.");
              }
              this.up("form").resetForm();
            } else {
              form.updateRecord();
              Ext.Msg.alert("Success", "Product updated successfully!");
              this.up("form").resetForm();
              this.up("form").isEditMode = false;
            }
          } else {
            if (productStore) {
              console.log("values to add to product store:", values);

              productStore.add(values);

              productStore.commitChanges();

              console.log("values in customer store after commit:");
              console.log(productStore.getData().items);

              Ext.Msg.alert("Success", "Product added successfully!");

              var newProduct = productStore.getAt(productStore.getCount() - 1);

              this.up("form").loadRecord(newProduct);

              productStore.reload();

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
    this.setTitle("Edit Product");
    this.isEditMode = true;

    // Store the original name value for comparison later
    this.originalNameValue = this.getForm().findField("name").getValue();
  },

  resetForm: function () {
    this.getForm().reset(); // Reset the form fields
    this.setTitle("Add or Edit Product");
    this.isEditMode = false;
    this.originalNameValue = null; // Reset the original name value

    // Enable the name field when adding a new customer
    var nameField = this.down("[name=name]");
    if (nameField) {
      nameField.setEditable(true); // Enable name field in add mode
    }
  },
});
