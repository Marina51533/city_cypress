import AddEmployeePage from "./addEmployeePopup";

const addEmployeePage = new AddEmployeePage();

class EditEmployeePage {
  getUpdateBtn() {
    return cy.get("#updateEmployee");
  }

  updateBtn() {
    this.getUpdateBtn().click();
  }

  updateEmployeeFillFields(firstName, lastName, dependants) {
    addEmployeePage.firstNameInputField().clear().type(firstName);
    addEmployeePage.lastNameInputField().clear().type(lastName);
    addEmployeePage.dependantsInputField().clear().type(dependants);
    this.updateBtn();
  }
}

export default EditEmployeePage;
