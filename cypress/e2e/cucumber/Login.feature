Feature: Login Functionality

Scenario: Login with valid credentials
    Given I am on the HomePage
    When Login form is opened
    And I enter "torchovanastia@gmail.com" email 
    And I enter "8iB9kekPXAzvNoS" password 
    And I click on the Login button
    Then I should be on the GaragePage

Scenario: Login with empty fields
    Given I am on the HomePage
    When Login form is opened
    And I verify the  Email and Password fields are empty
    Then Login button should be disabled

Scenario: Login with non-existing email and password
    Given I am on the HomePage
    When Login form is opened
    And I enter "torchovanastia@gmail.com" email 
    And I enter "badpassword" password 
    And I click on the Login button
    Then I should see an error message
