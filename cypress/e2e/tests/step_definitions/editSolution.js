import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../../pages/MainPage";

const mainPage = new MainPage();

When("user go to the project overview page", () => {
    cy.readFile("cypress/fixtures/arrayData.json").then((data) => {
        cy.get(mainPage.getChoosingProjectDropdown).should('be.visible').click({ force: true });
        cy.get(`li[data-name='${data[1].trim()}']`).should('be.visible').click();
        cy.wait(3000);
    })
});

Then("page redirect the project overview", () => {
    cy.url().should('include', 'https://my.bizdev.vn/du-an/tong-quan');
});

When("user turn off the BizCRM solution", () => {
    cy.get('div[data-code="crm"]').find('.form-check-label').should('have.text', 'Đang sử dụng');
    cy.get('div[data-code="crm"]').find('.form-check-input').should('be.visible').click();
    cy.wait(1000);
});

Then("the BizCRM solution is turned off", () => {
    cy.get('div[data-code="crm"]').find('.form-check-label').should('have.text', 'Tạm dừng');
});

When("user turn on the BizCRM solution", () => {
    cy.get('div[data-code="crm"]').find('.form-check-label').should('have.text', 'Tạm dừng');
    cy.get('div[data-code="crm"]').find('.form-check-input').should('be.visible').click();
    cy.wait(1000);
});

Then("the BizCRM solution is turned on", () => {
    cy.get('div[data-code="crm"]').find('.form-check-label').should('have.text', 'Đang sử dụng');
});