import {signup} from "./signuppage";
import {common} from "../Common/commonpage";
var faker = require('faker');


Given(/^I enter email "([^"]*)" in the email field$/, (myemail) => {
    signup.enterAccountEmail(myemail)
});

Given(/^I enter password "([^"]*)" in the password field$/, (mypassword) => {
    signup.enterAccountPassword(mypassword)
});

Given(/^I enter my email$/, () => {
    signup.enterEmail()
});

Then(/^I see password error "([^"]*)" displayed$/, function (passwordError) {
    signup.verifyPasswordError(passwordError)
});

When(/^I click create account button$/, function () {
    signup.clickCreateAccount()
});

Given(/^I confirm that I have read and accepted terms and conditions$/, function () {
    signup.clickTermsAndConditions()
});

When(/^I click create account$/, function () {
    signup.clickRegisterLink()
});

When(/^I sign up for news letter$/, function () {
    signup.clickNewsletter()
});

Then(/^I see email error message "([^"]*)" displayed$/, function (emailError) {
    signup.verifyEmailAddressError(emailError)
});