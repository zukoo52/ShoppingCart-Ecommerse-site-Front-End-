<template>
  <div class="pl-5 pr-5 mt-1 category">
    <v-container>
      <v-form>
        <v-row>
          <!-- catgory  code -->
          <v-col lg="12" cols="12">
            <label>Code</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.category_code">
            </v-text-field
          ></v-col>

          <!-- category name -->
          <v-col lg="12" cols="12">
            <label>Name</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined" v-model="form.category_name">
            </v-text-field>
          </v-col>

          <v-col>
            <v-btn
              color="primary"
              block
              class="add_button"
              @click="storeCategory()"
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
import categoryApi from "@/Api/Modules/categories";
export default {
  data() {
    return {
      form: {},
      showloader: false,
    };
  },

  methods: {
    async storeCategory() {
      this.showloader = true;
      await categoryApi
        .storeCategory(this.form)
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
