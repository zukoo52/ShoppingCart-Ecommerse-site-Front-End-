import { api } from "../index";

export default {
  async getReviews() {
    return await api.get("/allReview");
  },

  async storeReview(payload) {
    return await api.post("/storeReview", payload);
  },

  async updateReview(id, payload) {
    return await api.put(`/UpdateReview/${id}`, payload);
  },

  async deleteReview(id) {
    return await api.delete(`/deleteReview/${id}`);
  },
};
