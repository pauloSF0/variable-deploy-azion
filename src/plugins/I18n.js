/*
##########################################
think carefully before changing this file
doc: https://aziontech.atlassian.net/wiki/spaces/ENG/pages/2206662686/New+Front-End+-+Documentation#i18n
##########################################
 */

import { createI18n } from 'vue-i18n';

function loadlanguageMessages() {
  const languages = require.context('../languages', true, /[A-Za-z0-9-_,\s]+\.js$/i);
  const messages = {};
  languages.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const language = matched[1];
      messages[language] = languages(key).default;
    }
  });
  return messages;
}

export default createI18n({
  legacy: false,
  locale: 'en-US',
  fallbacklocale: 'en-US',
  messages: loadlanguageMessages(),
  globalInjection: true,
});
