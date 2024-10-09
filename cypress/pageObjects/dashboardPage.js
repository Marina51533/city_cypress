class DashboardPage {
  getAddEmployeeBtn() {
    return cy.get("#add");
  }

  employeeTable() {
    return cy.get("#employeesTable");
  }

  editEmployeeIcon() {
    return cy.get(".fas.fa-edit");
  }

  submitAddEmployee() {
    this.getAddEmployeeBtn().click();
  }

  deleteEmployeeIcon() {
    cy.get(".fas.fa-times").first().click();
  }

  editEmployee() {
    this.editEmployeeIcon().should("be.visible").first().click();
  }
}

export default DashboardPage;
