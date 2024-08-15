const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dsanchezvalle.github.io/hotelbookingsprint/", 
    env:{
      allpricesValues:{
        bajo: "$",
        medio: "$$",
        alto: "$$$"
      },

      endpoint:{
        baseBookit: "hotelbooking"
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
