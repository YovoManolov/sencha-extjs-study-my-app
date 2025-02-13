Ext.define("MyApp.store.PromotionStore", {
  extend: "Ext.data.Store",

  alias: "store.promotionstore",
  storeId: "promotionstore",

  model: "MyApp.model.Promotion",

  autoLoad: true,
  listeners: {
    load: function (store, records) {
      console.log("Data loaded: ", records);
    },
    loadexception: function (store, operation, eOpts) {
      console.log("Error loading data: ", operation.getError());
    },
  },

  proxy: {
    type: "ajax",
    url: "http://localhost:8080/promotions",
    reader: {
      type: "json",
      rootProperty: "data",
    },
    headers: {
      Authorization: "Basic " + btoa("user:user"),
    },
    timeout: 1000,
  },
});
