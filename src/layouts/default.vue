<template>
  <v-app>
    <div><HeaderComponent /></div>

    <v-main class="content-background">
      <router-view />
      <div class="pt-10"></div>
      <div class="pt-10"></div>

      <div class="pt-10"></div>

      <div class="pt-10"></div>

      <div class="pt-10"></div>

      <div class="pt-10"></div>
    </v-main>

    <div class="footer_alligns">
      <FooterComponent />
    </div>
  </v-app>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style lang="scss" scoped>
.content-background {
  background: -webkit-linear-gradient(top, #bdc3c7, #2c3e50);
}
</style>
