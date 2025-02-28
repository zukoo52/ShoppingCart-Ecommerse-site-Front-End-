<template>
  <div class="pl-5 pr-5 mt-1 category">
    <v-container>
      <v-form>
        <v-row>
   

          <!-- User name -->
          <v-col lg="12" cols="12">
            <label>Name</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.name">
            </v-text-field>
          </v-col>

          <!-- User email -->
          <v-col lg="12" cols="12">
            <label>Email</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.email">
            </v-text-field>
          </v-col>

          <!-- User Address -->
          <v-col lg="12" cols="12">
            <label>Address</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.address">
            </v-text-field>
          </v-col>

          <!-- User Address -->
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
              :loading="showloader"
              @click="updateUser()"
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
  props: {
    selecteItem: Object,
  },
  created() {
    this.form = this.selecteItem;
  },
  methods: {
    async updateUser() {
      this.showloader = true;
      await UserApi
        .updateUser(this.form.id, this.form)
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
