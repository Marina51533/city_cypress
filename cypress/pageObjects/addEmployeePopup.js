class AddEmployeePage {
  firstNameInputField() {
    return cy.get("#firstName");
  }

  lastNameInputField() {
    return cy.get("#lastName");
  }

  dependantsInputField() {
    return cy.get("#dependants");
  }

  addEmployeeBtn() {
    return cy.get("#addEmployee");
  }

  submitAddingEmployee() {
    this.addEmployeeBtn().click();
  }

  fillEmployeeDetails(firstName, lastName, dependants) {
    this.lastNameInputField().type(lastName);
    this.firstNameInputField().type(firstName);
    this.dependantsInputField().type(dependants);
    this.submitAddingEmployee();
  }
}

export default AddEmployeePage;
