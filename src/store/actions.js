import Api from "../service/api";

export default {
  async loadData({ commit }, stock) {
    const response = await Api().get(`/stock/${stock}`, stock);
    commit("updateData", response.data);
  },
  resetData({ commit }, stock) {
    commit("updateData", stock);
  },
  changeStock({ commit }, stock) {
    commit("changeStock", stock);
  }
};
