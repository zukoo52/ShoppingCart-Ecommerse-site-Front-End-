export default [
    {
      path: "/",
      component: import("@/layouts/default.vue"),
  
      children: [
        {
          path: "/ProductCard",
          // component : import("..pages/index.vue")
          component: import("@/components/ProductCard.vue"),
        },
      ],
    },
  ];
  