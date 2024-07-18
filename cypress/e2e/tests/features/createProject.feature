Feature: Manage project on BizDev

  Scenario: User create new project with no solution
    Given user login page and redirect to main page
    When user create new project
    Then page redirect to select solution page
    When user dont select solution
    Then new project is created with no solution

  Scenario: User create new project with 3 solution BizMail, BizCRM, BizflyChat
    Given user login page and redirect to main page
    When user create new project
    Then page redirect to select solution page
    When user select solution with BizMail, BizCRM, BizflyChat
    Then new project is created with BizMail, BizCRM, BizflyChat
  # Scenario: User edit name the project
  #   Given user go to the login page
  #   When user enters valid username then click continue
  #   Then page recognizes the exist user
  #   When user enters valid password and click continue
  #   Then user login successfully and redirect to main page
  #   When user edit name the project
  # Scenario: User edit desc the project
  #   Given user go to the login page
  #   When user enters valid username then click continue
  #   Then page recognizes the exist user
  #   When user enters valid password and click continue
  #   Then user login successfully and redirect to main page
  #   When user edit desc the project
  # Scenario: User delete the project
  #   Given user go to the login page
  #   When user enters valid username then click continue
  #   Then page recognizes the exist user
  #   When user enters valid password and click continue
  #   Then user login successfully and redirect to main page
  #   When user delete the project
