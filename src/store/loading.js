export default {
  state: {
    routeRefresh: true,
    transition: false,
    loading: false,
  },
  mutations: {
    setRefresh(state) {
      state.routeRefresh = true;
      state.loading = false;
      state.transition = false;
    },
    setLoading(state, { loading, routeRefresh }) {
      if (typeof routeRefresh === 'boolean') {
        state.routeRefresh = routeRefresh;
      }

      if (state.routeRefresh) {
        state.loading = loading;

        if (!loading) {
          state.routeRefresh = false;
        }
      } else {
        state.transition = loading;
      }
    },
  },
  actions: {
    progressStart({ commit }) {
      commit('setLoading', { loading: true });
    },

    progressFinish({ commit }) {
      commit('setLoading', { loading: false });
    },

    transitionStart({ commit }) {
      commit('setLoading', { loading: true, routeRefresh: false });
    },

    loadingStart({ commit }) {
      commit('setLoading', { loading: true, routeRefresh: true });
    },

    loadingFinish({ commit }) {
      setTimeout(() => commit('setLoading', false), 250);
    },
  },
  getters: {
    loading: (state) => state.loading,
    transition: (state) => state.transition,
  },
};
