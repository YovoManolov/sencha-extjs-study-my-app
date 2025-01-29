Ext.define("MyApp.view.CustomerForm", {
  extend: "Ext.form.Panel",
  xtype: "customerForm",

  title: "Add or Edit Customer",
  bodyPadding: 10,
  width: 400,

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

          // If we are editing, update the record
          if (form.getRecord()) {
            form.updateRecord(); // Update the record with form data
            Ext.Msg.alert("Success", "Customer updated successfully!");
          } else {
            // Otherwise, add the new customer
            customerStore.add(values);
            Ext.Msg.alert("Success", "Customer added successfully!");
          }

          // Clear the form after submission
          form.reset();
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
    this.getForm().loadRecord(record); // Load the existing customer data into the form
    this.setTitle("Edit Customer"); // Change the title to "Edit" mode
  },

  // Method to reset the form to "Add New Customer" state
  resetForm: function () {
    this.getForm().reset(); // Reset the form fields
    this.setTitle("Add New Customer"); // Set the title back to "Add"
  },
});
