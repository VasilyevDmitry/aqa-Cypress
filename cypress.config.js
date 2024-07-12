const { defineConfig } = require("cypress");


module.exports = defineConfig({
  responseTimeout:6000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://guest:welcome2qauto@qauto.forstudy.space'
  },
});
