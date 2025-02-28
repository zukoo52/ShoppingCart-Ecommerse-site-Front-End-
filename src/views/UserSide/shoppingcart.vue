<template>
  <div>
    <v-container>
      <div class="shopping-cart">
        <h1>Shopping Cart</h1>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th class="quantity-header">Qty</th>
                <th>Subtotal</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td class="product-info">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="product-image"
                  />
                  <span>{{ item.product_name }}</span>
                </td>
                <td>{{ formatPrice(item.product_price) }}</td>
                <td>
                  <input
                    type="number"
                    v-model.number="item.product_stock_level"
                    min="1"
                    class="quantity-input"
                  />
                </td>
                <td>
                  {{
                    formatPrice(item.product_price * item.product_stock_level)
                  }}
                </td>
                <td>
                  <button class="delete-btn" @click="removeItem(item.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="promotion">
          <input type="text" v-model="couponCode" placeholder="Coupon code" />
          <button @click="applyCoupon">APPLY COUPON</button>
        </div>
        <div class="cart-totals">
          <div class="cart-total-item">
            <span class="cart-label">Subtotal</span>
            <span class="cart-value">{{ formatPrice(cartSubtotal) }}</span>
          </div>
          <div class="cart-total-item">
            <span class="cart-label">Total</span>
            <span class="cart-value">{{ formatPrice(cartTotal) }}</span>
          </div>
        </div>
        <button class="checkout-btn" @click="proceedToCheckout">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </v-container>
  </div>
</template>

<script>
import productApi from "@/Api/Modules/products";
export default {
  data() {
    return {
      cartItems: [],
      couponCode: "",
    };
  },
  computed: {
    cartSubtotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    cartTotal() {
      // Implement discount logic if a coupon is applied
      return this.cartSubtotal; // Modify this to apply discount
    },
  },
  async created() {
    await this.getAllProducts();
  },
  methods: {
    formatPrice(value) {
      return `${value.toFixed(2)}`;
    },
    applyCoupon() {
      // Implement coupon logic here
      alert(`Coupon "${this.couponCode}" applied!`);
    },
    proceedToCheckout() {
      alert("Proceeding to checkout!");
    },
    removeItem(itemId) {
      // Remove the item from the cart
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
    async getAllProducts() {
      this.showloader = true;
      await productApi
        .getProducts()
        .then((res) => {
          this.cartItems = res.data.data;
          this.showloader = false;
        })
        .catch(() => {
          this.showloader = false;
        });
    },
    async removeItem(id) {
      await productApi.deleteProduct(id);
    },
  },
};
</script>

<style>
.shopping-cart {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.quantity-header {
  width: 60px;
  text-align: center;
}

.quantity-input {
  width: 50px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.table-responsive {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 0.9em;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  white-space: nowrap;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.promotion {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.promotion input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.promotion button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.promotion button:hover {
  background-color: #0056b3;
}

.cart-totals {
  text-align: right;
  margin-bottom: 20px;
}

.cart-total-item {
  margin-bottom: 10px;
}

.cart-label {
  font-weight: bold;
  margin-right: 10px;
}

.cart-value {
  font-weight: normal;
}

.checkout-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.checkout-btn:hover {
  background-color: #218838;
}

.delete-btn {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  table,
  th,
  td {
    font-size: 12px;
  }

  .quantity-input {
    width: 40px;
  }

  .product-image {
    width: 30px;
    height: 30px;
  }

  .cart-totals {
    text-align: left;
  }
}

@media (max-width: 576px) {
  .shopping-cart {
    padding: 15px;
  }

  h1 {
    font-size: 1.3em;
  }

  table {
    display: block;
    overflow-x: auto;
    font-size: 0.8em;
  }

  th,
  td {
    padding: 5px;
  }

  .promotion input {
    margin-bottom: 10px;
  }

  .cart-totals {
    text-align: left;
  }

  .promotion,
  .cart-totals {
    flex-direction: column;
    align-items: flex-start;
  }

  .promotion button {
    margin-top: 10px;
    width: auto;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.1em;
  }

  th,
  td {
    font-size: 10px;
  }

  .promotion button {
    font-size: 12px;
    padding: 8px 0;
  }

  .checkout-btn {
    padding: 10px;
    font-size: 14px;
  }

  .product-image {
    width: 25px;
    height: 25px;
  }

  .delete-btn {
    padding: 3px 6px;
    font-size: 10px;
  }
}
</style>

