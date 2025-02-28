export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),
    children: [
      {
        path: "/products",
        component: import("@/views/UserSide/Products.vue"),
      },
    ],
  },
];
