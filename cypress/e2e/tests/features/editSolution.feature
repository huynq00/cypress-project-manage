Feature: Manage turn on and off solution of project on BizDev

  Scenario: User turn off the BizCRM solution
    Given user login page and redirect to main page
    When user go to the project overview page
    Then page redirect the project overview
    When user turn off the BizCRM solution
    Then the BizCRM solution is turned off

  Scenario: User turn on the BizCRM solution
    Given user login page and redirect to main page
    When user go to the project overview page
    Then page redirect the project overview
    When user turn on the BizCRM solution
    Then the BizCRM solution is turned on
