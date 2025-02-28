<template>
  <div class="pl-5 pr-5 mt-1 category">
    <v-container>
      <v-form>
        <v-row>
          <!-- User Name -->
          <v-col lg="12" cols="12">
            <label>User Name</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.name"> </v-text-field
          ></v-col>

          <!-- User Email -->
          <v-col lg="12" cols="12">
            <label>Email</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.email">
            </v-text-field>
          </v-col>
          <!-- User Password -->
          <v-col lg="12" cols="12">
            <label>Password</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.password">
            </v-text-field>
          </v-col>
      <!-- User Password Confirmation -->
          <v-col lg="12" cols="12">
            <label>Password Confirmation</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.password_confirmation">
            </v-text-field>
          </v-col>
          <!-- User Address -->
          <v-col lg="12" cols="12">
            <label>Address</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.address">
            </v-text-field>
          </v-col>

          <!-- User Contact -->
          <v-col lg="12" cols="12">
            <label>Contact</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.contact">
            </v-text-field>
          </v-col>

          <v-col>
            <v-btn
              color="primary"
              block
              class="add_button"
              @click="storeUser()"
              :loading="showloader"
            >
              Submit</v-btn
            ></v-col
          >
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import UserApi from "@/Api/Modules/users";
export default {
  data() {
    return {
      form: {},
      showloader: false,
    };
  },

  methods: {
    async storeUser() {
      this.showloader = true;
      await UserApi
        .storeUser(this.form)
        .then(() => {
          this.showloader = false;
          this.$emit("closeModal", false);
        })
        .catch(() => {
          this.showloader = false;
        });
    },
  },
};
</script>

  