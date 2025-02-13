/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.ListProduct", {
  extend: "Ext.grid.Panel",
  xtype: "mainProductlist",

  requires: ["MyApp.store.ProductStore"],

  title: "Product",

  store: {
    type: "productstore",
  },

  columns: [
    { text: "Name", dataIndex: "name", flex: 2 },
    { text: "Price", dataIndex: "price", flex: 1 },
    { text: "Currency", dataIndex: "currency", flex: 1 },
    { text: "DiscountApplied", dataIndex: "discountApplied", flex: 1 },
    {
      xtype: "actioncolumn",
      text: "Edit",
      width: 60,
      items: [
        {
          iconCls: "x-fa fa-edit",
          tooltip: "Edit Product",
          handler: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex);

            var mainView = grid.up("app-main");
            var subcriptionForm = mainView.lookupReference("productForm");

            if (subcriptionForm) {
              console.log("Form found, loading record...");
              subcriptionForm.loadRecord(rec);
            } else {
              console.error("Product form not found!");
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
