/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.ListSubscription", {
  extend: "Ext.grid.Panel",
  xtype: "mainSubscriptionlist",

  requires: ["MyApp.store.Subscription"],

  title: "Subscription",

  store: {
    type: "subscription",
  },

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Address", dataIndex: "price", flex: 1 },
    { text: "Currency", dataIndex: "currency", flex: 1 },
    { text: "Subscription", dataIndex: "subscription", flex: 1 },
    { text: "Validity", dataIndex: "validity", flex: 1 },
    {
      xtype: "actioncolumn",
      text: "Edit",
      width: 60,
      items: [
        {
          iconCls: "x-fa fa-edit",
          tooltip: "Edit Subscription",
          handler: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex); // Get selected record

            var mainView = grid.up("app-main"); // Adjust this if needed
            var subcriptionForm = mainView.lookupReference("subscriptionForm");

            if (subcriptionForm) {
              console.log("Form found, loading record...");
              subcriptionForm.loadRecord(rec);
            } else {
              console.error("Subcription form not found!");
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
