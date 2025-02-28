<template>
  <!-- mobile header -->
  <div class="mobileview">
    <div>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        style="color: #0a72af"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" temporary style="height: 100%">
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-account"
            title="Home"
            value="Home"
            @click="$router.push('/')"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-cart-check"
            title="Products"
            value="Products"
            @click="$router.push('/products')"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-comment-quote"
            title="Reviews"
            value="Reviews"
            @click="$router.push('/reviews')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="Login"
            value="Login"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-cart-check"
            @click="$router.push('/shoppingcart')"
          >
            <v-img width="35px" src="@/assets/images/1325.png"></v-img
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
  <!-- web header -->
  <div class="webview">
    <v-app-bar :elevation="0" color="#9C9C9C">
      <v-row>
        <v-col lg="5" md="2" sm="2" class="ml-10">
          <v-img
            width="50px"
            src="@/assets/images/360_F_90672947_9o36fMzvYpFoS2cvgxACFUR0wleV5Yq5.jpg"
          ></v-img>
        </v-col>

        <v-col lg="6" md="8" sm="9" class="header_paddings">
          <v-row>
            <div>
              <v-list-item @click="$router.push('/')" class="ml-10">
                Home</v-list-item
              >
            </div>
            <div>
              <v-list-item @click="$router.push('/products')" class="ml-10">
                Products</v-list-item
              >
            </div>

            <div>
              <v-list-item @click="$router.push('/reviews')" class="ml-10">
                Reviews</v-list-item
              >
            </div>

            <div>
              <v-list-item @click="$router.push('/test')" class="ml-10">
                Login</v-list-item
              >
            </div>

            <div>
              <v-list-item @click="$router.push('/shoppingcart')" class="ml-8">
                <v-img width="35px" src="@/assets/images/1325.png"></v-img
              ></v-list-item>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header_paddings {
  padding-left: 10%;
  padding-top: 21px;
  @media screen and (min-width: 768px) and (max-width: 1366px) {
    padding-left: 4%;
    padding-top: 21px;
  }
}
</style>
