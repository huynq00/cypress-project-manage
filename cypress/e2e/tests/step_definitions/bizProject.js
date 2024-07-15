import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../../fixtures/bizProject.json";
import { LoginPage } from "../../pages/LoginPage";
import { MainPage } from "../../pages/MainPage";
import { ConfigPage } from "../../pages/ConfigPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();
const configPage = new ConfigPage();

Given("user go to the login page and redirect to main page", () => {
  cy.visit(loginPage.getUrl);
  cy.wait(3000);

  cy.enter(loginPage.getIframe).then((getBody) => {
    getBody().find(loginPage.getInputField).type(data.credentials.username);
    getBody().find(loginPage.getSubmitBtn).click();
    cy.wait(2000);
  });

  cy.enter(loginPage.getIframe).then((getBody) => {
    getBody().xpath(loginPage.getExistUser).should("be.visible");
  });

  cy.enter(loginPage.getIframe).then((getBody) => {
    getBody().find(loginPage.getInputField).type(data.credentials.password);
    getBody().find(loginPage.getSubmitBtn).click();
    cy.wait(3000);
  });

  cy.url().should("equal", mainPage.getUrl);
});

When("user create new project", () => {
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getCreateNewProject).click();
  cy.wait(3000);
  cy.get(mainPage.getSelectBizCRM).click();
  cy.get(mainPage.getSelectBizMail).click();
  cy.get(mainPage.getSelectBizflyChat).click();
  cy.get(mainPage.getButtonStartProject).click();
});

//================================================================

When("user turn off the solution", () => {
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getBizFlyMarketingOption).click();
  cy.wait(3000);

  cy.get(mainPage.getToggleBizCRM).click();
  cy.wait(1000);
});

//================================================================

When("user turn on the solution", () => {
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getBizFlyMarketingOption).click();
  cy.wait(3000);

  cy.get(mainPage.getToggleBizCRM).click();
  cy.wait(1000);
});

//================================================================

When("user edit name the project", () => {
  const nameProject = "a";
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getBizFlyMarketingOption).click();
  cy.wait(3000);

  cy.get(configPage.getButtonConfig).click();
  cy.wait(1000);
  cy.get(configPage.getButtonEditName).click();
  cy.wait(1000);
  cy.get(configPage.getInputNameProject).clear().type(nameProject);
  cy.get(configPage.getButtonSubmitNameProject).click();
  cy.wait(1000);
});

//================================================================

When("user edit desc the project", () => {
  const nameProject = "a";
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getBizFlyMarketingOption).click();
  cy.wait(3000);

  cy.get(configPage.getButtonConfig).click();
  cy.wait(1000);
  cy.get(configPage.getButtonEditDesc).click();
  cy.wait(1000);
  cy.get(configPage.getInputProjectDesc).clear().type(nameProject);
  cy.get(configPage.getButtonSubmitDesc).click();
  cy.wait(1000);
});

//================================================================

When("user delete the project", () => {
  cy.get(mainPage.getChoosingProjectDropdown).click({ force: true });
  cy.get(mainPage.getBizFlyMarketingOption).click();
  cy.wait(3000);

  cy.get(configPage.getButtonConfig).click();
  cy.wait(1000);
  cy.get(configPage.getButtonRemoveProject).click();
  cy.wait(1000);
  cy.get(configPage.getButtonSubmitRemoveProject).click();
  cy.wait(1000);
});
