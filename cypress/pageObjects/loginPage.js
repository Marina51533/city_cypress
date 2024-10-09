class LoginPage {
  visit() {
    cy.visit("/Login");
  }

  fillUsername(username) {
    cy.get("#Username").type(username);
  }

  fillPassword(password) {
    cy.get("#Password").type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  getErrorWarning() {
    return cy.get(".text-danger.validation-summary-errors");
  }

  loginToWeb(name, password) {
    this.fillUsername(name);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
