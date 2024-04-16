/*
##########################################
think carefully before changing this file
doc: https://aziontech.atlassian.net/wiki/spaces/ENG/pages/2206662686/New+Front-End+-+Documentation#progress
##########################################
 */

import store from '@/store';

class Progress {
  constructor() {
    this.store = store;
  }

  startLoading() {
    this.store.dispatch('loadingStart');
  }

  startTransition() {
    this.store.dispatch('transitionStart');
  }

  start() {
    this.store.dispatch('progressStart');
  }

  finish() {
    this.store.dispatch('progressFinish');
  }
}

export default {
  install: (Vue, options) => {
    const app = Vue;
    app.config.globalProperties.$progress = new Progress();
    app.provide('progress', options);
  },
};
