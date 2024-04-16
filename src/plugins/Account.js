import store from '@/store';

class Account {
  constructor() {
    this.isLoaded = false;
    this.store = store;
    this.info = this.store.getters.account;
  }

  get id() {
    return Number(this.store.getters.account.id);
  }

  setAccountInfo(accountData) {
    this.isLoaded = true;
    this.store.dispatch('setAccountInfo', accountData);
  }

  hasFlag(clientFlag) {
    return this.store.getters.account?.clientFlags?.includes(clientFlag);
  }

  hasPermission(slug) {
    const { isAccountOwner } = this.store.getters.account;

    if (isAccountOwner) {
      return true;
    }

    const accountPermissions = this.store.getters.account.permissions;
    const permission = accountPermissions?.find((permissionInfo) => permissionInfo.slug === slug);

    return !!permission;
  }
}

export default {
  install: (Vue, options) => {
    const app = Vue;
    app.config.globalProperties.$account = new Account();
    app.provide('account', options);
  },
};
