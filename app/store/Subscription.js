Ext.define("MyApp.store.Subscription", {
  extend: "Ext.data.Store",

  alias: "store.subscription",

  model: "MyApp.model.Subscription",

  data: {
    items: [
      {
        name: "SubscrName1",
        price: "2",
        currency: "CHF",
        subscription: "prepaid",
        validity: "Unlimited",
      },
      {
        name: "SubscrName2",
        price: "3",
        currency: "CHF",
        subscription: "prepaid",
        validity: "Unlimited",
      },
      {
        name: "SubscrName3",
        price: "5",
        currency: "CHF",
        subscription: "postpaid",
        validity: "30 Days",
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
