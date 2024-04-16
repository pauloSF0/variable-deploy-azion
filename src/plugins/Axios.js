import axios from 'axios';
import ENV from '@/environments';
import store from '@/store';

const REQUEST_DURATION_DELAY = 250;

const getUrl = (url) => (url ? `/${url.toString().replace(/^\/|\/$/g, '')}` : null);

const findRoute = (name) => ENV.API.find((api) => api.name === name)?.route;

// eslint-disable-next-line arrow-body-style
const getData = (promise) => {
  return promise.then((response) => response?.data).catch((error) => Promise.reject(error));
};

export default class Axios {
  static ongoingRequests = [];

  autoLoading = false;

  listRequest(req) {
    Axios.ongoingRequests.push(JSON.stringify(req));

    if (this.autoLoading) {
      store.dispatch('progressStart');
    }
  }

  unlistRequest(req) {
    const index = Axios.ongoingRequests.indexOf(JSON.stringify(req));

    Axios.ongoingRequests.splice(index, 1);

    if (this.autoLoading) {
      setTimeout(() => {
        if (!Axios.ongoingRequests.length) {
          store.dispatch('progressFinish');
        }
      }, REQUEST_DURATION_DELAY);
    }
  }

  constructor(apiName, resourcePrefix, config, autoNotification, autoLoading) {
    this.route = findRoute(apiName) + (resourcePrefix || '');

    this.autoLoading = autoLoading;

    this.client = axios.create({
      timeout: 90000,
      baseURL: this.route,
      headers: { 'Content-Type': 'application/json' },
      ...config,
    });

    this.client.interceptors.request.use(
      (request) => {
        this.listRequest(this.route);

        return request;
      },
      (error) => this.alertError(error, autoNotification),
    );

    this.client.interceptors.response.use(
      (response) => {
        this.unlistRequest(this.route);

        if (autoNotification && response.data.message) {
          store.dispatch('newAlert', {
            type: 'success',
            message: response.data.message,
          });
        }

        return response;
      },
      (error) => this.alertError(error, autoNotification),
    );
  }

  alertError(error, autoNotification) {
    this.unlistRequest(this.route);

    const { detail, message, errors } = error.response.data;

    const errorMsg = detail || message || errors.toString();

    if (autoNotification && errorMsg) {
      store.dispatch('newAlert', {
        type: 'error',
        message: errorMsg,
      });
    }
    return Promise.reject(error);
  }

  get(url, config) {
    console.log('entrei, url: ', url);
    return getData(this.client.get(getUrl(url), config));
  }

  post(url, data, config) {
    return this.client.post(getUrl(url), data, config);
  }

  put(url, data, config) {
    return this.client.put(getUrl(url), data, config);
  }

  patch(url, data, config) {
    return this.client.patch(getUrl(url), data, config);
  }

  delete(url, config) {
    return this.client.delete(getUrl(url), config);
  }

  // eslint-disable-next-line
  withQuery(path, data) {
    const keys = Object.keys(data);
    const args = keys
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
    return `/${path}?${args}`;
  }
}
