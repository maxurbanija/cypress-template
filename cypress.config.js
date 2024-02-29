const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zgnv6i",
  video: true,
  screenshotOnRunFailure: true,
  pageLoadTimeout: 120000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

