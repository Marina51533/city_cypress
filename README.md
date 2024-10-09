
# STE Assessment 

## Overview

This repository contains the automation scripts and test cases designed to identify bugs in the **Benefits Dashboard** application, utilizing **Cypress** for testing both the UI and API endpoints.

## Project Setup

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **Git**: Clone the project repository using Git.

### Clone the Repository

```bash
git clone https://github.com/Marina51533/city_cypress.git
cd city_cypress
```


### Install Dependencies

Install the necessary Cypress and other dependencies:

```

npm install cypress --save-dev
npm install cypress-dotenv --save-dev

```


### Environment Variables

For handling environment variables such as API tokens, use the `.env` file. Create a `.env` file in the root of your project:

```
CYPRESS_USERNAME=yourUsername
CYPRESS_PASSWORD=yourPassword
CYPRESS_TOKEN=yourAuthToken

```


## Test Structure

The test cases in this project are organized to cover both **UI** and **API** aspects of the **Benefits Dashboard** application:

### UI Tests

* The UI tests focus on verifying the functionality and appearance of the **Benefits Dashboard** pages.
* Tests are written to interact with UI elements such as forms, tables, buttons, and validate error messages.
* Example UI tests include:
  * Login flow validation.
  * Adding an employee.
  * Editing employee details.
  * Verifying error messages for invalid input.

### API Tests

* API tests validate the behavior of various endpoints of the **Benefits Dashboard** API.
* Tests include actions like adding, deleting, and retrieving employees.
* Example API tests include:
  * Retrieving the list of employees.
  * Adding a new employee and verifying its details.
  * Deleting an employee and ensuring it no longer exists.


## Running Tests

### Run All Tests

To run all tests (both UI and API):

```
npx cypress run

```

### Run Specific Test Files

To run a specific test file, such as the API test for adding an employee:

```
npx cypress run --spec "cypress/e2e/employees/add_employee.cy.js"

```


### Open Cypress Test Runner

To open the Cypress Test Runner in interactive mode:

```
npm run cy:open
```


## Allure Reports

**1. Generate [Allure Report](https://allurereport.org/docs/install/)** :

After the test run is complete, generate the Allure report using the following command:

```shell
npm run test:report
```

**2. View Allure Report** :

To open the report in a browser and view the detailed test results, use the following command:

```shell
  npm run test:report:open
```

This will start a local server and automatically open the Allure report in your default web browser.

## Tools & Technologies

* **Cypress** : Used for writing and executing tests for both UI and API.
* **JavaScript** : The scripting language used for the tests.
* **Cypress-Dotenv** : For managing environment variables securely.
* **Node.js** : Runtime environment for executing JavaScript outside the browser.
