import LoginPage from "../../pageObjects/loginPage";

const loginPage = new LoginPage();

const VALID_USERNAME = Cypress.env("username");
const VALID_PASSWORD = Cypress.env("password");
const INVALID_USERNAME = "invaliduser";
const INVALID_PASSWORD = "invalidpassword";
const ERROR_MESSAGE = "more problems";

describe("Login Page tests", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("should login successfully with valid credentials", () => {
    loginPage.loginToWeb(VALID_USERNAME, VALID_PASSWORD);
    cy.url().should("include", "/Benefits");
  });

  it("should not login with invalid credentials", () => {
    loginPage.loginToWeb(INVALID_USERNAME, INVALID_PASSWORD);
    cy.url().should("not.include", "/Benefits");
    loginPage
      .getErrorWarning()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
  });

  it("should not login with a valid username but invalid password", () => {
    loginPage.loginToWeb(VALID_USERNAME, INVALID_PASSWORD);
    cy.url().should("not.include", "/Benefits");
    loginPage
      .getErrorWarning()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
  });

  it("should not login with an invalid username but valid password", () => {
    loginPage.loginToWeb(INVALID_USERNAME, VALID_PASSWORD);
    cy.url().should("not.include", "/Benefits");
    loginPage
      .getErrorWarning()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
  });
});
