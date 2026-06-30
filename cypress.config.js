const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practice.expandtesting.com", // This tells Cypress where to look for "/"
    setupNodeEvents(on, config) {
      // environment setup
    },
  },
});
