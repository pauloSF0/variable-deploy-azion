/*
##########################################
doc: https://aziontech.atlassian.net/wiki/spaces/ENG/pages/2206662686/New+Front-End+-+Documentation#services
##########################################
*/
import Axios from '@/plugins/Axios';

class VariablesService extends Axios {
  constructor() {
    super(
      'variables', // api name -> __ENV__ && /environments/index.js
      '', // prefix
      {
        // scoped configuration -> add your service config
        withCredentials: true,
        crossDomain: true,
      },
      false, // enable automatic alerts for requests made by this service (az-alerts/notifier)
      false, // enable automatic progress feedback for ongoing requests
    );
  }
}

export default new VariablesService();
