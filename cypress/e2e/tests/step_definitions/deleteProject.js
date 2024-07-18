import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ConfigPage } from "../../pages/ConfigPage";

const configPage = new ConfigPage();

When("user delete the project the BizCRM", () => {
    cy.get(configPage.getButtonRemoveProject).click();
    cy.wait(1000);
    cy.get(configPage.getButtonSubmitRemoveProject).click();
    cy.wait(1000);
});
Then("the project is deleted", () => {
    cy.get('.message').contains('Dự án không tồn tại!');
});