Ext.define("MyApp.store.SubscriptionStore", {
  extend: "Ext.data.Store",

  alias: "store.subscriptionstore",
  storeId: "subscriptionstore",

  model: "MyApp.model.Subscription",

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
    url: "http://localhost:8080/subscriptions",
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
