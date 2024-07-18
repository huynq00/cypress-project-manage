Feature: Manage edit desc project on BizDev

  Scenario: User edit the project on BizDev
    Given user login page and redirect to main page
    When user go to the project config page
    Then page redirect the project config page
    When user edit desc the BizCRM
    Then the desc project is changed
