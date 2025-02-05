Ext.define("MyApp.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "MyApp.view.main.MainController",
    "MyApp.view.main.MainModel",
    "MyApp.view.main.ListCustomer",
    "MyApp.view.main.ListSubscription",
    "MyApp.view.main.ListProduct",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Customers",
      iconCls: "fa-user",
      items: [
        {
          xtype: "mainCustomerlist",
          flex: 2,
        },
        {
          xtype: "customerForm",
          reference: "customerForm",

          flex: 1,
          margin: "20 0 0 0",
        },
      ],
    },
    {
      title: "Subscriptions",
      iconCls: "fa-book",
      items: [
        {
          xtype: "mainSubscriptionlist",
          flex: 2,
        },
        {
          xtype: "subscriptionForm",
          reference: "subscriptionForm",
          flex: 1,
          margin: "20 0 0 0",
        },
      ],
    },
    ,
    {
      title: "Products",
      iconCls: "fa-tablet",
      items: [
        {
          xtype: "mainProductlist",
          flex: 2,
        },
        {
          xtype: "productForm",
          reference: "productForm",
          flex: 1,
          margin: "20 0 0 0",
        },
      ],
    },
  ],
});
