export default {
  state: {
    navigation: {},
  },
  mutations: {
    setNavigation(state, data) {
      state.navigation = typeof data === 'function' ? data() : data;
    },
  },
  getters: {
    navigation: (state) => state.navigation,
  },
  actions: {
    setNavigation({ commit }, data) {
      commit('setNavigation', data);
    },
  },
};
