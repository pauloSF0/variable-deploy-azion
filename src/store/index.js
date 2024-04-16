

import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    isLoading: false,
    buttonLoading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setLoadingButton(state, payload) {
      state.buttonLoading = payload
    }
  }
});
