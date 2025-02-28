import { api } from "../index";

export default {
  async getCategories() {
    return await api.get("/allcategories");
  },

  async storeCategory(payload) {
    return await api.post("/storecategory", payload);
  },

  async updateCategory(id, payload) {
    return await api.put(`/updatecategory/${id}`, payload);
  },

  async deleteCategory(id) {
    return await api.delete(`/deletecategories/${id}`).then(() => {
      window.location.href = "/admin/categories";
    });
  },
};
