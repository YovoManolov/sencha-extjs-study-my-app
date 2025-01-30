Ext.define("MyApp.view.CustomerForm", {
  extend: "Ext.form.Panel",
  xtype: "customerForm",

  title: "Add or Edit Customer",
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
      fieldLabel: "Address",
      name: "address",
      allowBlank: false,
    },
    {
      fieldLabel: "Gender",
      xtype: "combo",
      name: "gender",
      store: ["Male", "Female"],
      queryMode: "local",
      editable: false,
      allowBlank: false,
    },
    {
      fieldLabel: "Age",
      name: "age",
      xtype: "numberfield",
      minValue: 18, // Minimum age
      allowBlank: false,
    },
    {
      fieldLabel: "Customer Product",
      name: "customerProduct",
      allowBlank: false,
    },
    {
      fieldLabel: "Subscription Type",
      name: "customerSubcription",
      xtype: "combo",
      store: Ext.create("MyApp.store.Subscription"), // Subscription store
      displayField: "name", // Display field
      valueField: "id", // Use the ID as the value
      queryMode: "local",
      editable: false,
      allowBlank: false,
    },
    {
      fieldLabel: "Email or contact number",
      name: "emailAndContactNumber",
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
          var customerStore = Ext.getStore("customer");

          console.log("Adding customer with values:", values); // Debugging the values

          // If we are editing, update the record
          if (this.up("form").isEditMode) {
            var currentNameValue = form.findField("name").getValue();

            if (this.up("form").originalNameValue !== currentNameValue) {
              if (customerStore) {
                customerStore.add(values);
                Ext.Msg.alert("Success", "Customer added successfully!");
              } else {
                Ext.Msg.alert("Error", "Customer store is not available.");
              }
              this.up("form").resetForm();
            } else {
              // Otherwise, update the record
              form.updateRecord();
              Ext.Msg.alert("Success", "Customer updated successfully!");
              this.up("form").setTitle("Add or Edit Customer");
              this.up("form").resetForm();
              this.up("form").isEditMode = false;
            }
          } else {
            if (customerStore) {
              console.log("values to add to customer store:", values);

              customerStore.add(values); // Add new customer

              customerStore.commitChanges(); // Commit the change to store
              //customerStore.load(); // Load new data into the store

              console.log("values in customer store after commit:");
              console.log(customerStore.getData().items);

              // Ensure form is reset for the next customer
              Ext.Msg.alert("Success", "Customer added successfully!");

              var newCustomer = customerStore.getAt(
                customerStore.getCount() - 1
              ); // Get the last added customer

              this.up("form").loadRecord(newCustomer);

              customerStore.reload();

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
    this.setTitle("Edit Customer");
    this.isEditMode = true;

    // Store the original name value for comparison later
    this.originalNameValue = this.getForm().findField("name").getValue();

    // // Disable certain fields if in edit mode
    // var nameField = this.down("[name=name]");
    // if (nameField) {
    //   nameField.setEditable(false); // Disable name field in edit mode
    // }
  },

  // Method to reset the form to "Add New Customer" state
  resetForm: function () {
    console.log("INFO :resetting form");
    this.getForm().reset(); // Reset the form fields
    this.setTitle("Add New Customer");
    this.isEditMode = false;
    this.originalNameValue = null; // Reset the original name value

    // Enable the name field when adding a new customer
    var nameField = this.down("[name=name]");
    if (nameField) {
      nameField.setEditable(true); // Enable name field in add mode
    }
  },
});
