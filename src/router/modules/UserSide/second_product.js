export default [
    {
      path: "/",
      component: import("@/layouts/default.vue"),
     
      children: [
        {
          path: "/second_product",
          // component : import("..pages/index.vue")
          component: import("@/views/UserSide/second_product.vue"),
          
        },
      ],
      
    },
  ];