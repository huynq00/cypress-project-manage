// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "../e2e/pages/LoginPage";
import { MainPage } from "../e2e/pages/MainPage";
import data from "../fixtures/bizProject.json";

const loginPage = new LoginPage();
const mainPage = new MainPage();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

Cypress.Commands.add("inputText", function (elmUI, text) {
    elmUI
        .click()
        .clear()
        .type(text)
        .invoke("val")
        .then((val) => {
            expect(val).to.equal(text);
        });
});

Cypress.Commands.add("Login", function () {
    loginPage.getUrl;

    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).click().clear().type(data.credentials.username).invoke("val")
            .then((val) => {
                expect(val).to.equal(data.credentials.username);
            });
        getBody().find(loginPage.getSubmitBtn).should('be.visible').click();
        cy.wait(2000);
    });

    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().xpath(loginPage.getExistUser).should('be.visible');
    });

    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).click().clear().type(data.credentials.password).invoke("val")
            .then((val) => {
                expect(val).to.equal(data.credentials.password);
            });
        getBody().find(loginPage.getSubmitBtn).should('be.visible').click()
        cy.wait(3000)
    });

    cy.url().should('equal', mainPage.getUrl);
});