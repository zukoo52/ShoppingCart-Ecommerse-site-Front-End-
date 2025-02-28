<template>
  <div class="category">
    <v-container>
      <div class="text-right">
        <v-btn color="primary" class="add_button" @click="openCreateForm()">
          Add Category</v-btn
        >
      </div>

      <div class="mt-10"></div>
      <v-card class="pa-5" elevation="3">
        <!-- show loader -->
        <v-skeleton-loader
          class="mx-auto border"
          type="image, article"
          :loading="showloader"
        >
          <!-- table -->
          <v-data-table :items="items" :headers="headers">
            <template
              v-for="header in headers"
              :key="header.value"
              v-slot:[`item.${header.value}`]="props"
            >
              <div v-if="header.value === 'category_code'">
                {{ props.item.category_code }}
              </div>

              <div v-if="header.value === 'category_name'">
                {{ props.item.category_name }}
              </div>
              <v-row>
                <v-col lg="2">
                  <div v-if="header.value === 'action'">
                    <v-btn
                      style="text-transform: capitalize"
                      color="success"
                      @click="openEditForm(props.item)"
                      >Edit</v-btn
                    >
                  </div>
                </v-col>

                <v-col lg="2">
                  <div v-if="header.value === 'action'">
                    <v-btn
                      style="text-transform: capitalize"
                      color="red"
                      @click="deleteCategory(props.item.id)"
                      >Delete</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-skeleton-loader>
      </v-card>
    </v-container>

    <!-- dialogs -->

    <!-- add category  dialog -->
    <v-dialog v-model="showForm" max-width="500px">
      <v-card title="Add Category">
        <v-card-body> <AddCategory @closeModal="closeAddForm" /></v-card-body
      ></v-card>
    </v-dialog>

    <!-- edit category  dialog -->
    <v-dialog v-model="showEditForm" max-width="500px">
      <v-card title="Edit Category">
        <v-card-body>
          <UpdateCategory
            :selecteItem="selectedItem"
            @closeModal="closeEditForm" /></v-card-body
      ></v-card>
    </v-dialog>
  </div>
</template>
<script>
import AddCategory from "@/views/AdminSide/CategoryManagement/Components/AddCategory.vue";
import UpdateCategory from "@/views/AdminSide/CategoryManagement/Components/UpdateCategory.vue";
import categoryApi from "@/Api/Modules/categories";

export default {
  components: {
    AddCategory,
    UpdateCategory,
  },
  data() {
    return {
      
      showloader: false,
      showForm: false,
      showEditForm: false,
      selectedItem: {},
      items: [],
      headers: [
        { title: "Category Code", value: "category_code" },
        { title: "Category Name", value: "category_name" },
        { title: "Action", value: "action" },
      ],
    };
  },
  async created() {
    await this.getAllCategories();
  },
  methods: {
    openCreateForm() {
      this.showForm = true;
    },
    openEditForm(item) {
      this.selectedItem = item;
      this.showEditForm = true;
    },

    closeAddForm(data) {
      this.showForm = false;
    },
    closeEditForm(data) {
      this.showEditForm = false;
    },

    // get all categories
    async getAllCategories() {
      this.showloader = true;
      await categoryApi
        .getCategories()
        .then((res) => {
          this.items = res.data.data;
          this.showloader = false;
        })
        .catch(() => {
          this.showloader = false;
        });
    },

    // delete

    async deleteCategory(id) {
      await categoryApi.deleteCategory(id);
    },
  },
};
</script>
