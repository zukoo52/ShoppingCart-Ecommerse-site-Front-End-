export default [
    {
      path: "/",
      component: import("@/layouts/admin.vue"),
      children: [
        {
          path: "/admin/reviews",
          // component : import("..pages/index.vue")
          component: import("@/views/AdminSide/ReviewManagement/index.vue"),
          meta: {
            pageTitle: "Review Management",
          },
        },
      ],
    },
  ];
  