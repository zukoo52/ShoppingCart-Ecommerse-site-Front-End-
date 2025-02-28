export default [
  {
    path: "/",
    component: import("@/layouts/admin.vue"),
    children: [
      {
        path: "/admin/orders",
        // component : import("..pages/index.vue")
        component: import("@/views/AdminSide/OrderManagement/index.vue"),
        meta: {
          pageTitle: "Order Management",
        },
      },
    ],
  },
];
