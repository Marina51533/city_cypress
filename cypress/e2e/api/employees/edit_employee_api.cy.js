describe("API Tests - Edit Employee", () => {
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
  it("should add a new employee successfully", () => {
    const newEmployee = {
      firstName: "New",
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
    });
  });
  it("should EDIT a new employee successfully", () => {
   

  });
});
