module.exports = {
  env: 'dev',
  verifyAuthentication: false,
  publicPath: '/',
  platformURL: 'http://localhost:8081',
  UI: {
    login: 'http://localhost:9999',
  },
  API: [
    {
      name: 'SSO',
      route: 'http://localhost:9999/api',
    },
    {
      name: 'NAVIGATION',
      route: 'http://localhost:7777',
    },
    {
      name: 'variables',
      route: 'https://stage-variables.azion.com/api',
    },
  ],
};
