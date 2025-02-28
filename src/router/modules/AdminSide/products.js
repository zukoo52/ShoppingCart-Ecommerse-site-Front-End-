export default [
  {
    path: "/",
    component: import("@/layouts/admin.vue"),
    children: [
      {
        path: "/admin/products",
        // component : import("..pages/index.vue")
        component: import("@/views/AdminSide/ProductManagement/index.vue"),
        meta: {
          pageTitle: "Product Management",
        },
      },
    ],
  },
];
