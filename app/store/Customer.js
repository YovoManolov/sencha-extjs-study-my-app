Ext.define("MyApp.store.Customer", {
  extend: "Ext.data.Store",

  alias: "store.customer",

  model: "MyApp.model.Customer",

  storeId: "customer",

  data: {
    items: [
      {
        name: "Michael Scott",
        address: "1725 Slough Ave, Scranton, PA",
        gender: "Male",
        age: 45,
        customerProduct: "PhoneProduct1",
        customerSubcription: "SubscrName1",
        emailAndContactNumber: "emailAndContactNumber1",
      },
      {
        name: "Pam Beesly",
        address: "1550 Winding Rd, Scranton, PA",
        gender: "Female",
        age: 30,
        customerProduct: "PhoneProduct2",
        customerSubcription: "SubscrName1",
        emailAndContactNumber: "emailAndContactNumber2",
      },
      {
        name: "Jim Halpert",
        address: "1800 Greenway St, Scranton, PA",
        gender: "Male",
        age: 35,
        customerProduct: "PhoneProduct3",
        customerSubcription: "SubscrName3",
        emailAndContactNumber: "emailAndContactNumber2",
      },
      {
        name: "Dwight Schrute",
        address: "1512 Schrute Farms Rd, Scranton, PA",
        gender: "Male",
        age: 40,
        customerProduct: "PhoneProduct4",
        customerSubcription: "SubscrName4",
        emailAndContactNumber: "emailAndContactNumber2",
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
