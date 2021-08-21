export class Common_Page{
    closepopup = '[data-testid=close-button]';
    signinLink = '[data-testid=sign-in-button]';

    closePopUp(){
        cy.get(this.closepopup).click()
    }

    clickSigninLink(){
        cy.get(this.signinLink, { timeout: 5000 }).should('be.visible').click()
    }



}

export const common = new Common_Page();