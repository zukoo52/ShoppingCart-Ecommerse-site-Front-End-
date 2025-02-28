<template>
    <center>
      <v-btn @click="increment">+</v-btn>
      <input class="narrow-input" type="text" v-model="quantity" width="3" readonly />
      <v-btn @click="decrement">-</v-btn>
      &nbsp;
      <v-btn class="add-to-cart-button button_styles" @click="addToCart">Add</v-btn>
    </center>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quantity: 0
      };
    },
    methods: {
      increment() {
        this.quantity++;
      },
      decrement() {
        if (this.quantity > 0) {
          this.quantity--;
        }
      },
      addToCart() {
        this.$router.push('/shoppingcart');
        // Additional logic to add the item to the cart can be added here
      }
    }
  };
  </script>
  
  <style scoped>
  .narrow-input {
    width: 3em;
    text-align: center;
  }

  </style>