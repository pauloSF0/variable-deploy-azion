export default {
    env: 'dev',
    verifyAuthentication: true,
    clientFlags: [],
    publicPath: 'http://localhost:8097',
    platformURL: 'http://localhost:8080',
    UI: {
      login: 'http://localhost:9999',
    },
    API: [
      {
        name: 'variables',
        route: 'https://stage-variables.azion.com/api',
      },
      {
        name: 'SSO',
        route: 'http://localhost:9999/api',
      },
      {
        name: 'NAVIGATION',
        route: 'http://localhost:7777',
      },
    ],
  };