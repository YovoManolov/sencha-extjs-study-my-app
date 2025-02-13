Ext.define("MyApp.model.Customer", {
  extend: "MyApp.model.Base",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "address", type: "string" },
    { name: "gender", type: "string" },
    { name: "age", type: "int" },
    { name: "emailContactNumber", type: "string" },
    { name: "product", type: "auto", defaultValue: null },
    { name: "customerSubscriptions", type: "auto", defaultValue: null },
  ],
});
