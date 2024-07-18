Feature: Manage edit name project on BizDev

  Scenario: User edit the project on BizDev
    Given user login page and redirect to main page
    When user go to the project config page
    Then page redirect the project config page
    When user edit name the BizCRM solution
    Then the name project is changed
