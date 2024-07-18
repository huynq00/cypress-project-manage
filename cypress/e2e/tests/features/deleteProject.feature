Feature: Manage delete project on BizDev

  Scenario: User delete the project
    Given user login page and redirect to main page
    When user go to the project config page
    Then page redirect the project config page
    When user delete the project the BizCRM
    Then the project is deleted
