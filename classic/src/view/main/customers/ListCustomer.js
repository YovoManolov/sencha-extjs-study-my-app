/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.ListCustomer", {
  extend: "Ext.grid.Panel",
  xtype: "mainCustomerlist",

  requires: ["MyApp.store.Customer"],

  title: "Customer",

  store: {
    type: "customer",
  },

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Address", dataIndex: "address", flex: 1 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
    { text: "Age", dataIndex: "age", flex: 1 },
    { text: "customerProduct", dataIndex: "customerProduct", flex: 1 },
    { text: "customerSubscription", dataIndex: "customerSubcription", flex: 1 },
    {
      text: "emailAndContactNumber",
      dataIndex: "emailAndContactNumber",
      flex: 1,
    },
    {
      xtype: "actioncolumn",
      text: "Edit",
      width: 60,
      items: [
        {
          iconCls: "x-fa fa-edit",
          tooltip: "Edit Customer",
          handler: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex); // Get selected record
            console.log("Editing customer:", rec.data);

            // Find the CustomerForm using reference
            var mainView = grid.up("app-main"); // Adjust this if needed
            var customerForm = mainView.lookupReference("customerForm");

            if (customerForm) {
              console.log("Form found, loading record...");
              customerForm.loadRecord(rec);
            } else {
              console.error("CustomerForm not found!");
            }
          },
        },
      ],
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
