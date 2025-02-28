<template>
  <div class="product">
    <v-container>
      <div class="text-right">

        <v-btn color="primary"  class="add_button" @click="addProduct()">
          Add Product</v-btn
        >

      </div>
      <div class="mt-10"></div>
      <v-card class="pa-5" elevation="3">
        <v-data-table :items="items" :headers="headers">
          <template v-for="header in headers" :key="header.value" v-slot:[`item.${header.value}`]="props">
            <div v-if="header.value === 'product_code'">
              {{ props.item.product_code }}
            </div>

            <div v-if="header.value === 'product_name'">
              {{ props.item.product_name }}  
            </div>

            <div v-if="header.value === 'product_price'">
              {{ props.item.product_price }}  
            </div>

            <div v-if="header.value === 'product_stock_level'">
              {{ props.item.product_stock_level }}  
            </div>

            <div v-if="header.value === 'category'">
              {{ props.item.category.category_name }}  
            </div>

            <v-row>
              <v-col lg="2">
                <div v-if="header.value === 'action'" >
                  <v-btn style="text-transform: capitalize" color="success" @click="openEditForm(props.item)">Edit</v-btn>
                </div>
              </v-col>

              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn style="text-transform: capitalize" color="red"    @click="deleteProduct(props.item.id)">Delete</v-btn>
                </div>
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <v-dialog v-model="showForm" max-width="500">
      <v-card title="Add Product">
        <!-- <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="show = false"></v-btn>
        </v-card-actions> -->
      </v-card>
      <v-card>
        <v-card-body>
          <AddProduct />
        </v-card-body>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showEditForm" max-width="500px">
      <v-card title="Edit Product"> </v-card>
      <v-card>
        <v-card-body>
          <UpdateProduct :selectedItem="selectedItem" />
        </v-card-body></v-card>
    </v-dialog>
  </div>
</template>
<script>
import { shallowReactive } from "vue";
import AddProduct from "@/views/AdminSide/ProductManagement/Components/AddProduct.vue";
import UpdateProduct from "@/views/AdminSide/ProductManagement/Components/UpdateProduct.vue";
import productApi from "@/Api/Modules/products";
export default {
  components: {
    AddProduct,
    UpdateProduct,
  },
  data() {
    return {
      showForm: false,
      showEditForm: false,
      selectedItem: {},
      items: [
      ],
      headers: [
        { title: "Product Code", value: "product_code" },
        { title: "Product Name", value: "product_name" },
        { title: "Product Price", value: "product_price" },
        { title: "Product Quantity", value: "product_stock_level" },
        { title: "Product Category", value: "category" },
      
        { title: "Action", value: "action" },
      ],
    };
  },
  async created() {
    await this.getAllProducts();
  },
  methods: {
    addProduct() {
      this.showForm = true;
    },
    openEditForm(item) {
      this.selectedItem = item;
      this.showEditForm = true;
    },
    async getAllProducts() {
      this.showloader = true;
      await productApi
        .getProducts()
        .then((res) => {
          this.items = res.data.data;
          this.showloader = false;
        })
        .catch(() => {
          this.showloader = false;
        });
    },
    // delete
    async deleteProduct(id) {
      await productApi.deleteProduct(id);
    },
  },
};
</script>
