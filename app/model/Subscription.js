Ext.define("MyApp.model.Subscription", {
  extend: "MyApp.model.Base",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "price", type: "int" },
    { name: "currency", type: "string" },
    { name: "subscriptionType", type: "string" },
    { name: "validity", type: "string" },
  ],
});
