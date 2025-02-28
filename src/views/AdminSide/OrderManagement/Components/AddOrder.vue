<template>
  <div class="pl-5 pr-5 mt-1 category">
    <v-container>
      <v-form>
        <v-row>
          <!-- Product Id   -->
          <v-col lg="12">
            <label>Product</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined"> </v-text-field
          ></v-col>

          <!-- User name -->
          <v-col lg="12">
            <label>User</label>
            <div class="mt-2"></div>
            <v-text-field variant="outlined"> </v-text-field>
          </v-col>

          <v-col>
            <v-btn color="primary" block class="add_button">
              Submit</v-btn
            ></v-col
          >
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
