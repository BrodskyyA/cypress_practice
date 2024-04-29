Feature: HomePage feature

    Feature Description

Scenario: Verify presence of 5 social media icons on the Homepage
    Given I am on the HomePage
    Then I should see 5 social media icons present:
      | Facebook  |
      | Telegram  |
      | YouTube   |
      | Instagram |
      | LinkedIn  |


Scenario: Verify Sign Up form opens after clicking Sign Up button 
    Given I am on the HomePage
    When I click on the Sign Up button
    Then I should see the Sign Up form 

Scenario: Verify Sign In form opens after clicking Sign In button 
    Given I am on the HomePage
    When I click on the Sign In button
    Then I should see the Sign In form 