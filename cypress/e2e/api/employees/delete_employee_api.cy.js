describe("API Tests - Delete Employee", () => {
  const apiURL = Cypress.env("apiURL");
  const token = Cypress.env("token");

  it("should retrieve the list of employees", () => {
    cy.request({
      method: "GET",
      url: `${apiURL}/employees`,
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it.skip("should add and delete a new employee successfully", () => {
    const newEmployee = {
      firstName: "New233",
      lastName: "Employee",
      dependants: 2,
    };

    // POST request to add the new employee
    cy.request({
      method: "POST",
      url: `${apiURL}/employees`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: newEmployee,
    }).then((response) => {
      // Assert that the request was successful
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body.firstName).to.eq(newEmployee.firstName);
      expect(response.body.lastName).to.eq(newEmployee.lastName);
      expect(response.body.dependants).to.eq(newEmployee.dependants);

      employeeId = response.body.id;
      console.log(`Added employee with ID: ${employeeId}`);
    });
    //employeeId is defined before attempting to delete
    expect(employeeId).to.exist;

    // DELETE request to remove the employee
    cy.request({
      method: "DELETE",
      url: `${apiURL}/employees/${employeeId}`,
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => {
      // request was successful
      expect(response.status).to.eq(200);
      console.log(`Deleted employee with ID: ${employeeId}`);
    });
    // Deleted employee is no longer present
    cy.request({
      method: "GET",
      url: `${apiURL}/employees`,
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const employees = response.body;
      const deletedEmployee = employees.find((emp) => emp.id === employeeId);
      // Verify that the employee is no longer in the list
      expect(deletedEmployee).to.be.undefined;
    });
  });
});
