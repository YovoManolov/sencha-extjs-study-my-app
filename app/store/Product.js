Ext.define("MyApp.store.Product", {
  extend: "Ext.data.Store",

  alias: "store.product",

  model: "MyApp.model.Product",

  storeId: "product",

  data: {
    items: [
      {
        name: "PhoneProduct1",
        price: 1000,
        currency: "CHF",
        discountApplied: "Yes",
      },
      {
        name: "PhoneProduct2",
        price: 1100,
        currency: "CHF",
        discountApplied: "Yes",
      },
      {
        name: "PhoneProduct3",
        price: 1200,
        currency: "CHF",
        discountApplied: "No",
      },
      {
        name: "PhoneProduct4",
        price: 1300,
        currency: "CHF",
        discountApplied: "No",
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
