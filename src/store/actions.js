import Api from "../service/api";

export default {
  async loadData({ commit }, stock) {
    const response = await Api().get(`/stock/${stock}`, stock);
    commit("updateData", response.data);
  },
  async loadTipranks({ commit }, stock) {
    const response = await Api().get(`/stock/tipranks/${stock}`, stock);
    commit("updateTipranks", response.data);
  },
  resetData({ commit }, stock) {
    commit("updateData", stock);
  },
  changeStock({ commit }, stock) {
    commit("changeStock", stock);
  }
};
