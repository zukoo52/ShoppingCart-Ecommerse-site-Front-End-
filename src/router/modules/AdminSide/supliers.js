export default [
    {
      path: "/",
      component: import("@/layouts/admin.vue"),
      children: [
        {
          path: "/admin/supliers",
          // component : import("..pages/index.vue")
          component: import("@/views/AdminSide/SuplierManagement/index.vue"),
          meta: {
            pageTitle: "Suplier Management",
          },
        },
      ],
    },
  ];
  