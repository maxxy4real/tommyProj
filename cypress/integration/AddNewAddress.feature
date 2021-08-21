@addadress
Feature: Add New Address

  Scenario: As a registered user I want to add new address
    Given I am on the home page
    And I click the sign in link
    And I enter my sign in "maxtesting6@gmail.com" email address
    And I enter my sign in "Today" password details
    When I click the sign button
    And I click my account information
    And I click address book
    And I click add new address
    And I enter first name and last name
    And I enter all the address information
    And I click save button
    And I confirm that address is added
    And I delete the address
    Then I see that I no longer have an associated address