export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    children: [
      {
        path: "/QuantitySelector",
        // component : import("..pages/index.vue")
        component: import("@/components/QuantitySelector.vue"),
      },
    ],
  },
];
