export default {
  //this is used to pass the request to open advanced search table
  updateData(state, payload) {
    state.bigjsondata = payload;
  },
  updateTipranks(state, payload) {
    state.tipranks = payload
  },
  updateLoading(state, payload) {
    state.isLoading = payload;
  },
  changeStock(state, payload) {
    state.currentStock = payload;
  },
};
