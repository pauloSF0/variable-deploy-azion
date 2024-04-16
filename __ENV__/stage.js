module.exports = {
  env: 'stage',
  verifyAuthentication: true,
  publicPath: '/ui/stage/template-ui/',
  platformURL: 'https://stage-manager.azion.com',
  UI: {
    login: 'https://stage-sso.azion.com',
  },
  API: [
    {
      name: 'SSO',
      route: 'https://stage-sso.azion.com/api',
    },
    {
      name: 'NAVIGATION',
      route: 'https://stage-rtm.azion.com',
    },
    {
      name: 'variables',
      route: 'https://manager.azion.com/variables/API/v1/',
    },
  ],
};
