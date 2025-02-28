<template>
  <div class="home">
    <center>
      <div class="headingOne">Welcome to E-Shopping Cart</div>
    </center>
    <div class="pt-10"></div>
    <div class="pt-10"></div>
    <div class="pt-10"></div>


    <v-container fluid>
      <span class="product_heading">Recomended Products</span>
      <div class="mt-5"></div>
      <v-sheet class="mx-auto product_card" elevation="15">
        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img
                src="@/assets/images/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg"
              ></v-img>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img src="@/assets/images/images.jpeg"></v-img>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img src="@/assets/images/images (1).jpeg"></v-img>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img
                src="@/assets/images/41iYQA6zRLL._AC_UF1000,1000_QL80_.jpg"
              ></v-img>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img
                src="@/assets/images/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg"
              ></v-img>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img src="@/assets/images/images.jpeg"></v-img>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img src="@/assets/images/images (1).jpeg"></v-img>
            </v-card>
          </v-slide-group-item>

          <v-slide-group-item v-slot="{ toggle, selectedClass }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="white"
              height="100"
              width="300"
              @click="toggle"
            >
              <v-img
                src="@/assets/images/41iYQA6zRLL._AC_UF1000,1000_QL80_.jpg"
              ></v-img>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: null,
    };
  },
};
</script>
