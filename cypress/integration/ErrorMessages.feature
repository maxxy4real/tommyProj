@errorMessage
Feature: Error Messages

  Scenario: User sees error message when an invalid password format is used
    Given I am on the home page
    And I click the sign in link
    When I click create account
    And I enter email "dox@gmail.com" in the email field
    And I enter password "Qxtg" in the password field
    And I confirm that I have read and accepted terms and conditions
    And I sign up for news letter
    When I click create account button
    Then I see password error "Your password needs to be between 5 and 20 characters long" displayed


  Scenario: User sees error message when an invalid email address is provided
    Given I am on the home page
    And I click the sign in link
    When I click create account
    And I enter email "kangmail.com" in the email field
    And I enter password "Hxyuak" in the password field
    And I confirm that I have read and accepted terms and conditions
    And I sign up for news letter
    When I click create account button
    Then I see email error message "Sorry, that doesn't look like an email address" displayed