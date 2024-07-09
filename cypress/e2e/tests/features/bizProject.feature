Feature: Manage project on BizDev

  Scenario: User create new project
    Given user go to the login page
    When user enters valid username then click continue
    Then page recognizes the exist user
    When user enters valid password and click continue
    Then user login successfully and redirect to main page
    When user create new project
    # When user select project BizCRM, BizMail and BizflyChat
    # When user click on selecting project dropdown then select bizFly EMarketing
    # When user select BizCRM in project overview page
    # Then redirect to BizCRM page
    # When user click on CRM sale tab
    # Then redirect to CRM sale tab
    # When user click on Follow sau ban then click on San Pham
    # Then redirect to Product List page
    # When user click on Them san pham moi then click them san pham moi
    # Then redirect to product detail page
    # When user type in productCode, productName, productPrice then click Save
    # # Then pop up succesfull message show up
    # When user click on Ok
    # # Then return to new created product page

  Scenario: User turn off the solution
    Given user go to the login page
    When user enters valid username then click continue
    Then page recognizes the exist user
    When user enters valid password and click continue
    Then user login successfully and redirect to main page
    When user turn off the solution

  Scenario: User turn on the solution
    Given user go to the login page
    When user enters valid username then click continue
    Then page recognizes the exist user
    When user enters valid password and click continue
    Then user login successfully and redirect to main page
    When user turn on the solution

  Scenario: User delete the project
    Given user go to the login page
    When user enters valid username then click continue
    Then page recognizes the exist user
    When user enters valid password and click continue
    Then user login successfully and redirect to main page
    When user delete the project
