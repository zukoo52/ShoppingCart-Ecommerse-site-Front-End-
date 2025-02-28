export default [
    {
      path: "/",
      component: import("@/layouts/admin.vue"),
      children: [
        {
          path: "/admin/users",
          // component : import("..pages/index.vue")
          component: import("@/views/AdminSide/UserManagement/index.vue"),
          meta: {
            pageTitle: "User Management",
          },
        },
      ],
    },
  ];
  