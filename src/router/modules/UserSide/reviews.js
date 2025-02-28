export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),
    children: [
      {
        path: "/reviews",
        component: import("@/views/UserSide/review.vue"),
      },
    ],
  },
];
