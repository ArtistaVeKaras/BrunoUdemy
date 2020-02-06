Feature: Login to account at webuniversity.com using login portal

Background:
  Given I acces webdriveruniversity portal
  When I click on the login portal
  And  I enter a username

  # this will launch multiple scenarios
  @LoginPortal
  Scenario: Login to account with a valid password
  And I enter a "valid" password
  And I click on the submit button
  Then I should be presented with a successful validation alert


  @LoginPortal
  Scenario: Login to account with a valid password
    And I enter a "invalid" password
    And I click on the submit button
    Then I should be presented with a successful validation alert