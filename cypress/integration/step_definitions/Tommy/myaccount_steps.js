import {myaccount} from "./myaccountpage";


When(/^I click my account information$/, function () {
    myaccount.clickAccountInformation()
});

When(/^I click address book$/, function () {
    myaccount.clickAddressBook()
});

When(/^I click add new address$/, function () {
    myaccount.clickAddNewAddress()
});