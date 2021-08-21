var faker = require('faker');
export class Signup_Page{
    register = '[data-testid=register]';
    accountpassword = '#create-account-password';
    termsconditions = '.agree-terms > [data-testid=checkbox-label]';
    createaccount = '[data-testid=Button-primary-new] > :nth-child(2) > span';
    accountemail = '#create-account-email';
    newsletter = '.create-account-newsletter > [data-testid=checkbox-label]';
    emailerror = '#create-account-email-helper-text';
    passworderror = '#create-account-password-helper-text';

    clickRegisterLink(){
        cy.get(this.register).click()
    }

    enterAccountPassword(mypassword){
        cy.get(this.accountpassword).type(mypassword)
    }

    clickTermsAndConditions(){
        cy.get(this.termsconditions).click()
    }

    clickCreateAccount(){
        cy.get(this.createaccount).click()
    }

    enterAccountEmail(myemail){
        cy.get(this.accountemail).type(myemail)
    }

    clickNewsletter(){
        cy.get(this.newsletter).click()
    }

    verifyEmailAddressError(emailError){
        cy.get(this.emailerror).should('have.text', emailError)
    }

    verifyPasswordError(passwordError){
        cy.get(this.passworderror).should('have.text', passwordError)
    }

    enterName(){
        cy.get('[data-test=userNameField]').type(faker.name.firstName())
    }

    enterMyEmail(myemail){
        cy.get('[data-test=emailField]').type(myemail)
    }

    enterEmail(){
        cy.get('#create-account-email').type(faker.Internet.email())
    }


}

export const signup = new Signup_Page();