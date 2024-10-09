class DeleteEmployeePage {
  deleteEmployeeBtn() {
    return cy.get("#deleteEmployee");
  }

  submitDeleteEmployee() {
    this.deleteEmployeeBtn().click();
  }
}

export default DeleteEmployeePage;
