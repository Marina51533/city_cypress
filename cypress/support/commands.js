
Cypress.Commands.add("getCy", (selector) => {
  return cy.get(`[data-cy=${selector}]`);
});
