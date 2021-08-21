@register
Feature: Register

  Scenario: As a new user I want to create an account successfully
    Given I am on the home page
    And I click the sign in link
    When I click create account
    And I enter my email
    And I enter password "Today01" in the password field
    And I confirm that I have read and accepted terms and conditions
    When I click create account button