module.exports = {
  env: 'prod',
  verifyAuthentication: true,
  publicPath: '/',
  platformURL: 'https://manager.azion.com',
  UI: {
    login: 'https://sso.azion.com',
  },
  API: [
    {
      name: 'SSO',
      route: 'https://sso.azion.com/api',
    },
    {
      name: 'NAVIGATION',
      route: 'https://rtm.azion.com',
    },
    {
      name: 'variables',
      route: 'https://manager.azion.com/variables/API/v1/',
    },
  ],
};
