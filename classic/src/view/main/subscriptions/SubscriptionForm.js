Ext.define("MyApp.view.SubscriptionForm", {
  extend: "Ext.form.Panel",
  xtype: "subscriptionForm",

  title: "Add or Edit Subscription",
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
      fieldLabel: "Subscription",
      name: "subscription",
      allowBlank: false,
    },
    {
      fieldLabel: "Validity",
      name: "validity",
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
          var subscriptionStore = Ext.getStore("subscription");

          if (this.up("form").isEditMode) {
            var currentNameValue = form.findField("name").getValue();

            if (this.up("form").originalNameValue !== currentNameValue) {
              if (subscriptionStore) {
                subscriptionStore.add(values);
                Ext.Msg.alert("Success", "Subscription added successfully!");
              } else {
                Ext.Msg.alert("Error", "Subscription store is not available.");
              }
              this.up("form").resetForm();
            } else {
              form.updateRecord();
              Ext.Msg.alert("Success", "Subscription updated successfully!");
              this.up("form").resetForm();
              this.up("form").isEditMode = false;
            }
          } else {
            if (subscriptionStore) {
              console.log("values to add to subscription store:", values);

              subscriptionStore.add(values);

              subscriptionStore.commitChanges();

              console.log("values in customer store after commit:");
              console.log(subscriptionStore.getData().items);

              Ext.Msg.alert("Success", "Customer added successfully!");

              var newSubscription = subscriptionStore.getAt(
                subscriptionStore.getCount() - 1
              );

              this.up("form").loadRecord(newSubscription);

              subscriptionStore.reload();

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
    this.setTitle("Edit Subscription");
    this.isEditMode = true;

    // Store the original name value for comparison later
    this.originalNameValue = this.getForm().findField("name").getValue();
  },

  resetForm: function () {
    this.getForm().reset(); // Reset the form fields
    this.setTitle("Add or Edit Subscription");
    this.isEditMode = false;
    this.originalNameValue = null; // Reset the original name value

    // Enable the name field when adding a new customer
    var nameField = this.down("[name=name]");
    if (nameField) {
      nameField.setEditable(true); // Enable name field in add mode
    }
  },
});
