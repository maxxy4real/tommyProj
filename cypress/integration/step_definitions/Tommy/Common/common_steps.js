import {common} from "./commonpage";


Given(/^I am on the home page$/,  () => {
    cy.visit('/')
    cy.viewport(1440, 900)
    cy.get('[data-testid=close-button]').click()
});

Given(/^I click the sign in link$/, function () {
    common.clickSigninLink()
});