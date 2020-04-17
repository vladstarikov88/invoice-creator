const global = {
  namespaced: true,
  state: {
    invoiceNumber: '',
  },
  mutations: {
    setInvoiceNumber(state, payload) {
      state.invoiceNumber = payload;
    },
  },
  actions: {
    setInvoiceNumber({ commit }, payload) {
      commit('setInvoiceNumber', payload);
    },
  },
};

export default global;
