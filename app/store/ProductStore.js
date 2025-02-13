Ext.define("MyApp.store.ProductStore", {
  extend: "Ext.data.Store",

  alias: "store.productstore",
  storeId: "productstore",

  model: "MyApp.model.Product",

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
    url: "http://localhost:8080/products",
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
