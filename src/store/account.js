export default {
  state: {
    account: null,
  },
  mutations: {
    setAccountInfo(state, data) {
      state.account = {
        user: {
          isLogged: true,
          name: data.full_name,
          isClientOnly: data.is_client_only,
        },
        id: data.id,
        kind: data.kind,
        name: data.name,
        client_id: data.client_id,
        clientFlags: data.client_flags,
        isAccountOwner: data.is_account_owner,
        permissions: data.permissions,
      };
    },
  },
  actions: {
    setAccountInfo({ commit }, data) {
      commit('setAccountInfo', data);
    },
  },
  getters: {
    account: (state) => state.account,
  },
};
