/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.ListPromotion", {
  extend: "Ext.grid.Panel",
  xtype: "mainPromotionlist",

  requires: ["MyApp.store.PromotionStore"],

  title: "Promotion",

  store: {
    type: "promotionstore",
  },

  columns: [
    { text: "Promocode", dataIndex: "promocode" },
    { text: "Discount", dataIndex: "discount", flex: 1 },
    { text: "Discount Type", dataIndex: "discountType", flex: 1 },
    { text: "Number Of Vouchers", dataIndex: "numberOfVouchers", flex: 1 },
    {
      xtype: "actioncolumn",
      text: "Edit",
      width: 60,
      items: [
        {
          iconCls: "x-fa fa-edit",
          tooltip: "Edit Promotion",
          handler: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex); // Get selected record
            console.log("Editing promocode:", rec.data);

            // Find the CustomerForm using reference
            var mainView = grid.up("app-main"); // Adjust this if needed
            var customerForm = mainView.lookupReference("promotionForm");

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
