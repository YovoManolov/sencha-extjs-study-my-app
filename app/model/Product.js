Ext.define("MyApp.model.Product", {
  extend: "MyApp.model.Base",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "price", type: "int" },
    { name: "currency", type: "string" },
    { name: "discountApplied", type: "boolean" },
  ],
});
