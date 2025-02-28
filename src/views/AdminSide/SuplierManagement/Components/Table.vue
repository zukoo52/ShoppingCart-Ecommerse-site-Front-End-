<template>
  <div class="supplier">
    <v-container>
      <div class="text-right">
        <v-btn color="primary" class="add_button" @click="  addSupplierForm()"> Add Supplier</v-btn>
      </div>

      <div class="mt-10"></div>
      <v-card class="pa-5" elevation="3">
        <v-data-table :items="items" :headers="headers">
          <template
            v-for="header in headers"
            :key="header.value"
            v-slot:[`item.${header.value}`]="props">

            <div v-if="header.value === 'supplierId'">
              {{ props.item.supplierId }}
            </div>

            <div v-if="header.value === 'productId'">
              {{ props.item.productId }}
            </div>

            <div v-if="header.value === 'productName'">
              {{ props.item.productName }}
            </div>

              <div v-if="header.value === 'ware'">
              {{ props.item.ware }}


            </div>
            <v-row>
              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn  style="text-transform: capitalize" color="success" @click="openSuplierEditForm()"
                    >Edit</v-btn
                  >
                </div>
              </v-col>

              <v-col lg="2">
                <div v-if="header.value === 'action'">
                  <v-btn style="text-transform: capitalize" color="warning"
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
      <v-card title="New Supplier">
        <v-card-body> <AddSupplier /></v-card-body></v-card>
    </v-dialog>

     <v-dialog v-model="showEditForm" max-width="500px">
      <v-card title="Edit Supplier"> </v-card>
      <v-card>
      <v-card-body>
          <UpdateSupplier />
        </v-card-body></v-card>
    </v-dialog>

  </div>
</template>
<script>
import AddSuplier from "@/views/AdminSide/SuplierManagement/Components/AddSuplier.vue";
import UpdateSuplier from "@/views/AdminSide/SuplierManagement/Components/UpdateSuplier.vue";
export default {
  components: {
    AddSuplier,
    UpdateSuplier,
    },
  data() {
    return {
      showForm: false,
      showEditForm: false,
      items: [
        {
          supplierId:"S01",
          productId:"BP",
          productName:"Baby Product",
          ware:"L'Oreal Shampoo",
        },

          {
          supplierId:"S02",
          productId:"MP",
          productName:"Male Product",
          ware:"Philips Electric beard razor",
        },

          {
          supplierId:"S03",
          productId:"FeP",
          productName:"Female Product",
          ware:"Cartier Watch",
        },
      ],
      headers: [
        { title: "Supplier ID", value: "supplierId" },
        { title: "Product ID", value: "productId" },
          { title: "Product Name", value: "productName" },
           { title: "Product", value: "ware" },
        { title: "Action", value: "action" },
      ],
    };
  },

   methods: {
    addSupplierForm() {
      this.showForm = true;
    },
    openSuplierEditForm() {
      this.showEditForm = true;
    },
  },
};
</script>
