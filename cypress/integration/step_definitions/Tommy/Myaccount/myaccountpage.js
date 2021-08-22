export class Myaccount_Page{
    accountInformation = '.account-link.header__action > .account__icon.header__link.header__link--name';
    myaddressbook = '[data-testid="/myaccount/addressbook?storeId=30027&langId=44&catalogId=10151"]';
    addnewaddress = '[data-testid=address-add-button]';


    clickAccountInformation(){
        cy.get(this.accountInformation).click()
    }

    clickAddressBook(){
        cy.get(this.myaddressbook).click()
    }

    clickAddNewAddress(){
        cy.get(this.addnewaddress).click()
    }


}

export const myaccount = new Myaccount_Page();