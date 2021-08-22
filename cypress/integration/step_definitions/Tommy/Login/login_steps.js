import {login} from "./loginpage";

Given(/^I enter my sign in "([^"]*)" email address$/, function (myemail) {
    login.enterSignInEmail(myemail)
});

Given(/^I enter my sign in "([^"]*)" password details$/, function (mypassword) {
    login.enterSignInPassword(mypassword)
});

When(/^I click the sign button$/, () => {
    login.clickSignInBtn()
});