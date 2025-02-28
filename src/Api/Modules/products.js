import { api } from "../index";

export default {
  async getProducts() {
    return await api.get("/allproducts");
  },

  async storeProduct(payload) {
    return await api.post("/storeproduct", payload);
  },

  async updateProduct(id, payload) {
    return await api.put(`/updateproduct/${id}`, payload);
  },

  async deleteProduct(id) {
    return await api.delete(`/deleteproducts/${id}`);
  },
};
