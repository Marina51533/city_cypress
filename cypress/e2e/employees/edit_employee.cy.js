import LoginPage from "../../pageObjects/loginPage";
import DashboardPage from "../../pageObjects/dashBoardPage";
import AddEmployeePage from "../../pageObjects/addEmployeePopup";
import DeleteEmployeePage from "../../pageObjects/deleteEmployeePopup";
import EditEmployeePage from "../../pageObjects/editEmployeePopup";

const dashboardPage = new DashboardPage();
const loginPage = new LoginPage();
const addEmployeePage = new AddEmployeePage();
const deleteEmployeePage = new DeleteEmployeePage();
const editEmployeePage = new EditEmployeePage();

const VALID_USERNAME = Cypress.env("username");
const VALID_PASSWORD = Cypress.env("password");
const FIRST_NAME = "Mark";
const LAST_NAME = "Merot";
const DEPENDANTS = "3";
const FIRST_NAME_UPDATED = "Thomas";


describe("Edit Employee from the list", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginToWeb(VALID_USERNAME, VALID_PASSWORD);
  });

  it("should edit employee", () => {
    // Add new employee
    dashboardPage.submitAddEmployee();
    addEmployeePage.fillEmployeeDetails(FIRST_NAME, LAST_NAME, DEPENDANTS);
    dashboardPage
      .employeeTable()
      .should("be.visible")
      .and("contain", FIRST_NAME);
      // Edit employee
    dashboardPage.editEmployee()
    editEmployeePage.updateEmployeeFillFields(FIRST_NAME_UPDATED,LAST_NAME,DEPENDANTS)
    dashboardPage
      .employeeTable()
      .should("be.visible")
      .and("contain", FIRST_NAME_UPDATED);
    //Delete employee to clean up data
    dashboardPage.deleteEmployeeIcon();
    deleteEmployeePage.submitDeleteEmployee();
    dashboardPage
      .employeeTable()
      .should("be.visible")
      .and("not.contain", FIRST_NAME_UPDATED);
  });
});
