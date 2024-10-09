const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
    token: process.env.CYPRESS_TOKEN,
    apiURL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api",
  },
  e2e: {
    baseUrl:
      "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account",
  },
});
