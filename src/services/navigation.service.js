import Axios from '@/plugins/Axios';

class NavigationService extends Axios {
  constructor() {
    super(
      'NAVIGATION', // api name -> __ENV__ && /environments/index.js
      '/', // prefix
      {
        // scoped configuration -> add your service config
        withCredentials: true,
        crossDomain: true,
      },
      false, // enable automatic alerts for requests made by this service (az-alerts/notifier)
      false, // enable automatic progress feedback for ongoing requests
    );
  }

  // eslint-disable-next-line class-methods-use-this
  getMenu() {
    return super.get('/rtm-menu/v2');
  }
}

export default new NavigationService();
