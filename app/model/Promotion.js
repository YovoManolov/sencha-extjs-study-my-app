Ext.define("MyApp.model.Promotion", {
  extend: "MyApp.model.Base",

  fields: [
    { name: "id", type: "int" },
    { name: "promocode", type: "string" },
    { name: "discount", type: "string" },
    { name: "discountType", type: "string" },
    { name: "numberOfVounchers", type: "int" },
  ],
});
