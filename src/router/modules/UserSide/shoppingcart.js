export default [
    {
      path: "/",
      component: import("@/layouts/default.vue"),
      children: [
        {
          path: "/shoppingcart",
          // component : import("..pages/index.vue")
          component: import("@/views/UserSide/shoppingcart.vue"),
        },
      ],
    },
  ];
  