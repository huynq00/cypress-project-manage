import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ConfigPage } from "../../pages/ConfigPage";

const configPage = new ConfigPage();

When("user edit desc the BizCRM", () => {
    const nameProject = 'a';
    cy.get(configPage.getButtonEditDesc).should("be.visible").click();
    cy.wait(1000);
    cy.inputText(cy.get(configPage.getInputProjectDesc), nameProject);
    cy.get(configPage.getButtonSubmitDesc).should("be.visible").click();
    cy.wait(1000);
});
Then("the desc project is changed", () => {
    cy.get("div[class='wrap_desc'] div[class='desc']").then($el => {
        const dirtyString = $el.html();
        const cleanString = dirtyString.replace(/[\n\s&]+/g, ' ').replace(/nbsp;/g, '').trim();
        expect(cleanString).to.equal('a');
    });
});