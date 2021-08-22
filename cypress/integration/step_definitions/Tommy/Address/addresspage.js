var faker = require('faker');
export class Address_Page{
    firstname = '#firstName';
    lastname = '#lastName';
    address1 = '#address1';
    address2 = '#address2';
    city = '#city';
    zipcode = '#zipCode';
    phoneNumber = '#phone1';
    saveBtn = '[data-testid=address-save-button]';
    addresstitle = '.address-book__title';
    deleteaddress = '[data-testid=address-delete-button]';
    emptyaddress = '.address-book__empty > p';


    enterFirstName(){
        cy.get(this.firstname).type(faker.Name.firstName())
    }

    enterLastName(){
        cy.get(this.lastname).type(faker.Name.lastName())
    }

    enterAddress1(){
        cy.get(this.address1).type(faker.Address.streetName())
    }

    enterAddress2(){
        cy.get(this.address2).type(faker.Address.secondaryAddress())
    }

    enterCity(){
        cy.get(this.city).type(faker.Address.ukCounty())
    }

    enterZipCode(){
        cy.get(this.zipcode).type('SE2 8YH')
    }

    enterPhoneNumber(){
        cy.get(this.phoneNumber).type('07895638927')
    }

    clickSaveBtn(){
        cy.get(this.saveBtn).click()
    }

    viewAddressTitle(){
        cy.get(this.addresstitle, { timeout: 5000 }).should('have.text', 'VIEW ADDRESS')
    }

    clickDeleteAddressBtn(){
        cy.get(this.deleteaddress).click()
    }

    verifyUserHaveNoSavedAddress(){
        cy.get(this.emptyaddress).should('have.text', 'You currently have no saved addresses')
    }



}

export const address = new Address_Page();