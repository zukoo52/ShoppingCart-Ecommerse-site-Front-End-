import { api } from "../index";

export default {
  async getOrders() {
    return await api.get("/allorders");
  },

  async storeOrder(payload) {
    return await api.post("/storeorder", payload);
  },

  async updateProduct(id, payload) {
    return await api.put(`/updateorder/${id}`, payload);
  },

  async deleteOrder(id) {
    return await api.delete(`/deleteorder/${id}`);
  },
};
