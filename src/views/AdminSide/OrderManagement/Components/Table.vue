<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names

<template>
  <div class="order">
    <v-container>
      <div class="text-right">
        <v-btn color="primary" class="add_button" @click="openCreateForm()"> Add Order</v-btn>
      </div>

      <div class="mt-10"></div>
      <v-card class="pa-5" elevation="3">
        <v-data-table :items="items" :headers="headers">
          <template
            v-for="header in headers"
            :key="header.value"
            v-slot:[`item.${header.value}`]="props"
          >
            <div v-if="header.value === 'orderId'">
              {{ props.item.orderId }}
            </div>


            <div v-if="header.value === 'productId'">
              {{ props.item.productId }}
            </div>
            <div v-if="header.value === 'username'">
              {{ props.item.username }}
            </div>
            <v-row>
              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn style="text-transform: capitalize" color="success" @click="openEditForm()"
                    >Edit</v-btn
                  >
                </div>
              </v-col>

              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn style="text-transform: capitalize" color="red"
                    >Delete</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>

    <v-dialog v-model="showForm" max-width="500px">
      <v-card title="New Order">
        <v-card-body> <AddOrder /></v-card-body
      ></v-card>
    </v-dialog>

    <v-dialog v-model="showEditForm" max-width="500px">
      <v-card title="Edit Order">
        <v-card-body> <UpdateOrder /></v-card-body
      ></v-card>
    </v-dialog>


  </div>
</template>
<script>
import AddOrder from "@/views/AdminSide/OrderManagement/Components/AddOrder.vue";
import UpdateOrder from "@/views/AdminSide/OrderManagement/Components/UpdateOrder.vue";

export default {
  components:{
    AddOrder,
    UpdateOrder,
  },
  data() {
    return {
      showForm: false,
      showEditForm: false,
      items: [
        {
          orderId: "aw321",
          productId: "iph564ss",
          username: "new user",
        },
        {
          orderId: "aw322",
          productId: "tvsdd545",
          username: "testuser",
        },
        {
          orderId: "aw323",
          productId: "dds56sds",
          username: "admin user",

        },
      ],
      headers: [
        { title: "Order ID", value: "orderId" },
        { title: "Product ID", value: "productId" },
        { title: "User  Name", value: "username" },
        { title: "Action", value: "action" },
      ],
    };
  },

  methods: {
    openCreateForm() {
      this.showForm = true;
    },
    openEditForm() {
      this.showEditForm = true;
    },
  },
};
</script>
