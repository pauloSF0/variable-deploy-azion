import Axios from '@/plugins/Axios';

class SSOService extends Axios {
  constructor() {
    super(
      'SSO', // api
      '',
      {
        // configuration
        withCredentials: true,
        crossDomain: true,
        headers: {
          Accept: 'application/json; version=1',
        },
      },
      false, // auto notification
    );
  }

  getAccountInfo() {
    return super.get('/account/info');
  }

  getAccountLoggedInInfo() {
    return super.get('/user/me');
  }
}

export default new SSOService();
