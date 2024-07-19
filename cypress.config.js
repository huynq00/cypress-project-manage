const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}

// npx cypress run --record --key 6e53459a-459a-45b7-b6ea-c884359abcf4
// 6e53459a-459a-45b7-b6ea-c884359abcf4

module.exports = defineConfig({
  projectId: "8dnqbs",
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    chromeWebSecurity: false,
    experimentalStudio: true,
    specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
});
