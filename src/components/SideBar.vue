<template>
  <div class="sidebar">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      permanent
    >
      <div class="background">
        <div class="d-flex justify-content-start">
          <div class="pt-5">
            <v-img
              width="100px"
              src="@/assets/images/360_F_90672947_9o36fMzvYpFoS2cvgxACFUR0wleV5Yq5.jpg"
            ></v-img>
          </div>
          <div class="pt-10">
            <span class="font-wight-bold heading">Cart Admin</span>
          </div>
        </div>

        <div class="ml-5 pt-5">
          <v-list nav>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-home-account"
              title="Dashboard"
              value="Dashboard"
              @click="$router.push('/admin')"
            >
            </v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-shape"
              title="Categories"
              value="Categories"
              @click="$router.push('/admin/categories')"
            ></v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-cart-check"
              title="Products"
              value="Products"
              @click="$router.push('/admin/products')"
            ></v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-currency-usd"
              title="Orders"
              value="Orders"
              @click="$router.push('/admin/orders')"
            ></v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-account"
              title="Users"
              value="Users"
              @click="$router.push('/admin/users')"
            ></v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-comment-quote"
              title="Reviews"
              value="Reviews"
              @click="$router.push('/admin/reviews')"
            ></v-list-item>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-account-supervisor"
              title="Supliers"
              value="Supliers"
              @click="$router.push('/admin/supliers')"
            ></v-list-item>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.ative_color {
  background-color: rgb(40, 156, 210);
  color: white;
}
</style>
