import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../../pages/MainPage";
import { ConfigPage } from "../../pages/ConfigPage";

const mainPage = new MainPage();

Given('user login page and redirect to main page', () => {
  cy.Login();
})

When("user create new project", () => {
  cy.get(mainPage.getChoosingProjectDropdown).should('be.visible').click({ force: true });
  cy.get(mainPage.getCreateNewProject).should('be.visible').click();
  cy.wait(3000);
});

Then("page redirect to select solution page", () => {
  cy.url().should('include', 'https://my.bizdev.vn/giai-phap');
});

When("user dont select solution", () => {
  cy.get(mainPage.getButtonStartProject).should('be.visible').click();
  cy.get('.modal-body').should('be.visible');
  cy.get("button[class='btn btn-primary btn_create_project confirm']").should('be.visible').click({ force: true });
});

When('user select solution with BizMail, BizCRM, BizflyChat', () => {
  cy.get(mainPage.getSelectBizCRM).should('be.visible').click();
  cy.get(mainPage.getSelectBizMail).should('be.visible').click();
  cy.get(mainPage.getSelectBizflyChat).should('be.visible').click();
  cy.get(mainPage.getButtonStartProject).should('be.visible').click({ force: true });
});

Then('new project is created with no solution', () => {
  const arrayData = [];
  cy.writeFile('cypress/fixtures/arrayData.json', arrayData);
  cy.url().should('include', 'https://my.bizdev.vn/du-an/tong-quan');
  cy.get('p:nth-child(1)').contains('Dự án hiện tại chưa sử dụng giải pháp nào,');
  cy.get(".name_project").invoke('text').then((text) => {
    arrayData.push(text);
  })
  cy.writeFile('cypress/fixtures/arrayData.json', arrayData);
});

Then('new project is created with BizMail, BizCRM, BizflyChat', () => {
  const arrayData = [];
  cy.readFile('cypress/fixtures/arrayData.json').then((data) => {
    arrayData.push(...data);
  })
  cy.url().should('include', 'https://my.bizdev.vn/du-an/tong-quan');
  cy.get('#project_solution').each(($li) => {
    cy.wrap($li).contains('BizCRM');
    cy.wrap($li).contains('BizMail');
    cy.wrap($li).contains('BizflyChat');
  });
  cy.get(".name_project").invoke('text').then((text) => {
    arrayData.push(text);
  })
  cy.writeFile('cypress/fixtures/arrayData.json', arrayData);
});