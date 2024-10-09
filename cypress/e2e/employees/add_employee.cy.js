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
const DEPENDANTS = "3"

describe("Add Employee Page tests", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginToWeb(VALID_USERNAME, VALID_PASSWORD);
  });

  it("should add employee", () => {
    dashboardPage.submitAddEmployee();
    addEmployeePage.fillEmployeeDetails(FIRST_NAME, LAST_NAME,DEPENDANTS); 
    dashboardPage.employeeTable()
    .should("be.visible")
    .and("contain", FIRST_NAME);
    //Delete employee to clean up
    dashboardPage.deleteEmployeeIcon()
    deleteEmployeePage.submitDeleteEmployee()
  });
});
