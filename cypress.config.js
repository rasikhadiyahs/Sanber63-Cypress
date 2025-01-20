const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env:{
      userstg: "user stg",
      userprod: "user prod"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650, //untuk mengatur saat cypress di run
    viewportWidth: 950,
    defaultCommandTimeout: 4500, //kalau tidak disetting jg gpp akan default dari sistem (materi configuration)
    screenshotOnRunFailure: false
  },
});
