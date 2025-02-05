Ext.define("MyApp.store.Promocode", {
  extend: "Ext.data.Store",

  alias: "store.promocode",

  model: "MyApp.model.Promocode",

  storeId: "promocode",

  data: {
    items: [
      {
        name: "Promocode1",
        discount: 23,
        discountType: "%",
        numberOfVoucher: 10,
      },

      {
        name: "Promocode1",
        discount: 23,
        discountType: "%",
        numberOfVoucher: 10,
      },

      {
        name: "FlatPromocode3",
        discount: 23,
        discountType: "CHF",
        numberOfVoucher: 10,
      },
      {
        name: "FlatPromocode4",
        discount: 23,
        discountType: "CHF",
        numberOfVoucher: 10,
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
