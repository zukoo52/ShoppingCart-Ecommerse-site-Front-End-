export default [
  {
    path: "/",
    component: import("@/layouts/admin.vue"),
    children: [
      {
        path: "/admin/categories",
        // component : import("..pages/index.vue")
        component: import("@/views/AdminSide/CategoryManagement/index.vue"),
        meta: {
          pageTitle: "Category Management",
        },
      },
      {
        path: "/admin",
        // component : import("..pages/index.vue")
        component: import("@/views/AdminSide/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
        },
      },
    ],
  },
  
];
