const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.chick-fil-a.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
