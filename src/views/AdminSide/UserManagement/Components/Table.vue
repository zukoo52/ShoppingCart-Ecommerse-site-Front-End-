<template>
  <div class="category">
    <v-container>
      <div class="text-right">
        <v-btn color="primary" class="add_button" @click="openCreateForm()">
          Add User</v-btn
        >
      </div>

      <div class="mt-10"></div>
      <v-card class="pa-5" elevation="3">
        <v-data-table :items="items" :headers="headers">
          <template
            v-for="header in headers"
            :key="header.value"
            v-slot:[`item.${header.value}`]="props"
          >
            <div v-if="header.value === 'id'">
              {{ props.item.id }}
            </div>

            <div v-if="header.value === 'name'">
              {{ props.item.name }}
            </div>

            <div v-if="header.value === 'email'">
              {{ props.item.email }}
            </div>

            <div v-if="header.value === 'address'">
              {{ props.item.address }}
            </div>

            <div v-if="header.value === 'contact'">
              {{ props.item.contact }}
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
              &nbsp;&nbsp;&nbsp;
              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn
                    style="text-transform: capitalize"
                    color="red"
                    @click="deleteUser(props.item.id)"
                    >Delete</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>

    <!-- dialogs -->

    <!-- add User  dialog -->
    <v-dialog v-model="showForm" max-width="500px">
      <v-card title="Add User">
        <v-card-body> <AddUser @closeModal="closeAddForm" /></v-card-body
      ></v-card>
    </v-dialog>

    <!-- edit User  dialog -->
    <v-dialog v-model="showEditForm" max-width="500px">
      <v-card title="Edit User">
        <v-card-body>
          <UpdateUser
            :selecteItem="selectedItem"
            @closeModal="closeEditForm" /></v-card-body
      ></v-card>
    </v-dialog>
  </div>
</template>
<script>
import AddUser from "@/views/AdminSide/UserManagement/Components/AddSUser.vue";
import UpdateUser from "@/views/AdminSide/UserManagement/Components/UpdateUser.vue";
import UserApi from "@/Api/Modules/users";

export default {
  components: {
    AddUser,
    UpdateUser,
  },
  data() {
    return {
      showloader: false,
      showForm: false,
      showEditForm: false,
      selectedItem: {},
      items: [],
      headers: [
        { title: "User Seq No", value: "id" },
        { title: "User Name", value: "name" },
        { title: "Address", value: "address" },
        { title: "Email", value: "email" },
        { title: "Contact", value: "contact" },
        { title: "Action", value: "action" },
      ],
    };
  },
  async created() {
    await this.getAllUsers();
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
    async getAllUsers() {
      this.showloader = true;
      await UserApi.getUsers()
        .then((res) => {
          this.items = res.data.data;
          this.showloader = false;
        })
        .catch(() => {
          this.showloader = false;
        });
    },

    // delete

    props: {
    selecteItem: Object,
  },

    async deleteUser(id) {
      await UserApi.deleteUser(id);
    },
  },
};
</script>
