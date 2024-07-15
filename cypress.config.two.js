const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  baseUrl:'https://guest:welcome2qauto@qauto2.forstudy.space/', 
  env: {
    email: 'dmelesh28@gmail.com',
    password: 'Ddmelesh1800'
  }
  },
});
