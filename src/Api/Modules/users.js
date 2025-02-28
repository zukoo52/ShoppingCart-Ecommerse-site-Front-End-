import { api } from "../index";

export default {
  async getUsers() {
    return await api.get("/allUser");
  },

  async storeUser(payload) {
    return await api.post("/storeUser", payload);
  },

  async updateUser(id, payload) {
    return await api.put(`/updateUser/${id}`, payload);
  },

  async deleteUser(id) {
    return await api.delete(`/deleteUser/${id}`);
  },
};
