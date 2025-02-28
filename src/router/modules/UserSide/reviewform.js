export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),
    children: [
      {
        path: "/reviewform",
        component: import("@/components/reviewform.vue"),
      },
    ],
  },
];
