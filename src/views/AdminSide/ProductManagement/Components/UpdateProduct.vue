<template>
  <div class="pl-5 pr-5 mt-1 product">
    <v-container>
      <v-form>
        <v-row>
          <v-col lg="12">
            <label>Code</label>
            <data class="mt-2"></data>
            <v-text-field variant="outlined" v-model="form.product_code">
            </v-text-field>
          </v-col>
          <v-col lg="12">
            <label>Name</label>
            <data class="mt-2"></data>
            <v-text-field variant="outlined" v-model="form.product_name">
            </v-text-field>
          </v-col>
          <v-col lg="12">
            <label>Price</label>
            <data class="mt-2"></data>
            <v-text-field variant="outlined" v-model="form.product_price">
            </v-text-field>
          </v-col>
          <v-col lg="12">
            <label>Quantity</label>
            <data class="mt-2"></data>
            <v-text-field variant="outlined" v-model="form.product_stock_level">
            </v-text-field>
          </v-col>
          <v-col lg="12">
            <label>Category</label>
            <v-select
              item-title="category_code"
              item-value="id"
              class="mt-2"
              variant="outlined"
              v-model="form.category_id"
              :items="categories"
            ></v-select>
          </v-col>
          <v-col>
            <v-btn color="primary" block class="add_button" @click="updateProduct()">
              Submit
              </v-btn>
              </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import productApi from "@/Api/Modules/products";
import categoryApi from "@/Api/Modules/categories";
export default {
  data() {
    return {
      form: {},
      categories: [],
    };
  },

  props: {
    selectedItem: Object,
  },
  async created() {
    await this.getCategories();
    
    this.form = this.selectedItem;
    
    console.log(this.form.category_id);
  },
  
  methods: {
    async updateProduct() {
      this.form.supply_qualtity=this.form.product_stock_level;
      await productApi.updateProduct(this.form.id, this.form).then(() => {
        this.$emit("closeModal", false);
      });
    },
    async getCategories() {
      await categoryApi
        .getCategories()
        .then((res) => {
          this.categories = res.data.data;
        })
    },
  },
};
</script>
