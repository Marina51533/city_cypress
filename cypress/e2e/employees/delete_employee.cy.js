import LoginPage from "../../pageObjects/loginPage";
import DashboardPage from "../../pageObjects/dashBoardPage";
import AddEmployeePage from "../../pageObjects/addEmployeePopup";
import DeleteEmployeePage from "../../pageObjects/deleteEmployeePopup";

const dashboardPage = new DashboardPage();
const loginPage = new LoginPage();
const addEmployeePage = new AddEmployeePage();
const deleteEmployeePage = new DeleteEmployeePage();

const VALID_USERNAME = Cypress.env("username");
const VALID_PASSWORD = Cypress.env("password");
const FIRST_NAME = "Mark";
const LAST_NAME = "Merot";
const DEPENDANTS = "3";

describe("Delete Employee from employee list", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginToWeb(VALID_USERNAME, VALID_PASSWORD);
  });

  it("should delete employee", () => {
    dashboardPage.submitAddEmployee();
    addEmployeePage.fillEmployeeDetails(FIRST_NAME, LAST_NAME, DEPENDANTS);
    dashboardPage
      .employeeTable()
      .should("be.visible")
      .and("contain", FIRST_NAME);
    //Delete employee
    dashboardPage.deleteEmployeeIcon();
    deleteEmployeePage.submitDeleteEmployee();
    dashboardPage
      .employeeTable()
      .should("be.visible")
      .and("not.contain", FIRST_NAME);
  });
});
