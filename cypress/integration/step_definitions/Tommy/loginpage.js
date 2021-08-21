export class Login_Page{
    signInEmail = '#signin-email';
    signInPassword = '#signin-password';
    signInBtn = '[data-testid=Button-primary-new]';
    accountInformation = '.account-link.header__action > .account__icon.header__link.header__link--name';


    enterSignInEmail(myemail){
        cy.get(this.signInEmail).type(myemail)
    }

    enterSignInPassword(mypassword){
        cy.get(this.signInPassword).type(mypassword)
    }

    clickSignInBtn(){
        cy.get(this.signInBtn).click()
    }

    clickAccountInformation(){
        cy.get(this.accountInformation).click()
    }


}

export const login = new Login_Page();