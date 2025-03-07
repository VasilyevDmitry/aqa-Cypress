
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  baseUrl:'https://guest:welcome2qauto@qauto.forstudy.space/', 
  env: {
    email: 'dmitryv1800@gmail.com',
    password: 'Dmitryv1800'
  }
  },
});
