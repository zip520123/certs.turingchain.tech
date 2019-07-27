const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'zh-TW',
  otherLanguages: ['en'],
  localeSubpaths: 'foreign',
  fallbackLng: 'zh-TW',
});