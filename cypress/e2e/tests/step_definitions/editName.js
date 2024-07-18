import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../../pages/MainPage";
import { ConfigPage } from "../../pages/ConfigPage";

const mainPage = new MainPage();
const configPage = new ConfigPage();

When("user go to the project config page", () => {
  cy.readFile("cypress/fixtures/arrayData.json").then((data) => {
    cy.get(mainPage.getChoosingProjectDropdown).should('be.visible').click({ force: true });
    cy.get(`li[data-name='${data[1].trim()}']`).should('be.visible').click();
    cy.wait(3000);
    cy.get(configPage.getButtonConfig).should("be.visible").click();
    cy.wait(1000);
  })
});

Then("page redirect the project config page", () => {
  cy.url().should('include', 'https://my.bizdev.vn/du-an/cau-hinh');
});

When("user edit name the BizCRM solution", () => {
  const nameProject = 'a';
  let arrayData = [];
  cy.readFile('cypress/fixtures/arrayData.json').then((data) => {
    data.forEach(($item) => {
      cy.log($item);
      arrayData.push($item);
    });
  }).then(() => {
    cy.log('Array data:', arrayData);
  });
  cy.log(arrayData);
  cy.get(configPage.getButtonEditName).should("be.visible").click();
  cy.wait(1000);
  cy.inputText(cy.get(configPage.getInputNameProject), nameProject);
  let arrayNew = [];
  cy.wrap(arrayData).each((item, index) => {
    if (index === 1) {
      arrayNew[index] = nameProject;
    } else {
      arrayNew[index] = item;
    }
  });
  cy.log(arrayNew);
  cy.writeFile('cypress/fixtures/arrayData.json', []);
  cy.writeFile('cypress/fixtures/arrayData.json', arrayNew);
  cy.get(configPage.getButtonSubmitNameProject).should("be.visible").click();
  cy.wait(1000);
});
Then("the name project is changed", () => {
  cy.get('.w_name.project_name').then($el => {
    const dirtyString = $el.html();
    const cleanString = dirtyString.replace(/[\n\s&]+/g, ' ').replace(/nbsp;/g, '').trim();
    expect(cleanString).to.equal('a');
  });
});