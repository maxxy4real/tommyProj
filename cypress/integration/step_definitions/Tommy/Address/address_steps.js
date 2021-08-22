import {address} from "./addresspage";


When(/^I enter first name and last name$/, function () {
    address.enterFirstName()
    address.enterLastName()
});

When(/^I enter all the address information$/, function () {
    address.enterAddress1()
    address.enterAddress2()
    address.enterCity()
    address.enterZipCode()
    address.enterPhoneNumber()
});

When(/^I click save button$/, function () {
    address.clickSaveBtn()
});

When(/^I confirm that address is added$/, function () {
    address.viewAddressTitle()
});

When(/^I delete the address$/, function () {
    address.clickDeleteAddressBtn()
});

Then(/^I see that I no longer have an associated address$/, function () {
    address.verifyUserHaveNoSavedAddress()
});