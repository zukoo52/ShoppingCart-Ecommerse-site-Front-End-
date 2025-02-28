import homeRoute from "./modules/UserSide/home";
import Category from "./modules/AdminSide/categories";
import Orders from "./modules/AdminSide/orders";
import Products from "./modules/AdminSide/products";
import Reviews from "./modules/AdminSide/reviews";
import Supliers from "./modules/AdminSide/supliers";
import Users from "./modules/AdminSide/users";


import ShoppingCart from "./modules/UserSide/shoppingcart";

import Product_list from "./modules/UserSide/Products";
import Second_product from "./modules/UserSide/second_product";
import reviews from "./modules/UserSide/reviews";
import reviewform from "./modules/UserSide/reviewform";
import QuantitySelector from "./modules/UserSide/QuantitySelector"
import ProductCard from "./modules/UserSide/ProductCard";


import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),




  routes: [
    ...homeRoute,
    ...Category,
    ...Orders,
    ...Supliers,
    ...Reviews,
    ...Products,
    ...Users,
    ...ShoppingCart,
    ...Product_list,
    ...Second_product,
    ...reviews,
    ...reviewform,
    ...QuantitySelector,
    ...ProductCard

  ],

});

export default router;
