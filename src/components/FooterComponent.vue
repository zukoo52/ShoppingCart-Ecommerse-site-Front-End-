<template>
  <v-footer class="footer_background pa-6">
    <v-row class="main_margin">
      <!-- footer left section -->
      <v-col lg="4" md="4" cols="12">
        <div class="d-flex justify-content">
          <div>
            <!-- <v-img
              src="~/assets/images/logo.png"
              width="100.7px"
              height="60px"
            ></v-img> -->
          </div>

          <div class="ml-6">
            <!-- <v-img
              src="~/assets/images/Logo_Transparent.png"
              width="79px"
              height="64px"
            ></v-img> -->
          </div>
        </div>
        <br />
        <h3 class="left_heading">E-Shopping Cart</h3>

        <p class="pt-3 left_para"></p>
        <div class="mobile_header pt-6"></div>
      </v-col>

      <!-- footer right section -->
      <v-col lg="8" md="8" cols="12">
        <div class="right_col_margin">
          <!-- footer right section contact icons -->
          <v-row class="right_col_margin_ inner1 d-flex justify-content">
            <v-col cols="12" lg="3" md="3">
              <div class="d-flex justify-content">
                <div>
                  <v-icon color="white" icon="mdi-map-marker-outline"></v-icon>
                </div>

                <div class="ml-2">
                  <span class="right_icon_header">Address</span>
                </div>
              </div>

              <div class="pt-4 address_padding">
                <span class="right_icon_text"> </span>
              </div>
            </v-col>

            <v-col cols="6" lg="3" md="3">
              <div class="d-flex justify-content">
                <div>
                  <v-icon color="white" icon="mdi-phone "></v-icon>
                </div>

                <div class="ml-2">
                  <span class="right_icon_header">Phone</span>
                </div>
              </div>

              <div class="pt-4">
                <span class="right_icon_text"></span>
              </div>
            </v-col>

            <v-col cols="6" lg="3" md="3">
              <div class="d-flex justify-content">
                <div>
                  <v-icon color="white" icon="mdi-whatsapp"></v-icon>
                </div>

                <div class="ml-2">
                  <span class="right_icon_header">Whatsapp</span>
                </div>
              </div>

              <div class="pt-4">
                <a
                  href="https://wa.me/+94772444191"
                  style="text-decoration: none"
                  target="_blank"
                  class="right_icon_text"
                >
                </a>
              </div>
            </v-col>

            <v-col cols="12" lg="3" md="3">
              <div class="d-flex justify-content-center">
                <div>
                  <v-icon color="white" icon="mdi-email-outline"></v-icon>
                </div>

                <div class="ml-2">
                  <span class="right_icon_header">Email</span>
                </div>
              </div>

              <div class="pt-4"></div>
            </v-col>
          </v-row>
          <br /><br />
          <hr class="hr_margin hr_width" />
          <br /><br />

          <!-- social media icons -->
          <div class="ml-4 d-flex justify-content">
            <v-btn class="" variant="text">
              <v-img
                src="@/assets/images/iconoir_facebook.png"
                width="15px"
              ></v-img>
            </v-btn>
            <v-btn class="" variant="text">
              <v-img src="@/assets/images/Vector.png" width="20px"></v-img>
            </v-btn>
            <v-btn class="" variant="text">
              <v-img src="@/assets/images/Group.png" width="20px"></v-img>
            </v-btn>
            <v-btn class="" variant="text">
              <v-img
                src="@/assets/images/eva_twitter-outline.png"
                width="25px"
              ></v-img>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
  <!-- current year below section -->
  <div class="footer_section_below pt-4">
    <span class="copy_write_text"
      >Copyright © {{ new Date().getFullYear() }} - All rights reserved
    </span>
  </div>
</template>

<script>
export default {
  components: {},

  data() {},
  methods: {},
};
</script>
