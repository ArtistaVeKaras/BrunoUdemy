$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPortal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to account at webuniversity.com using login portal",
  "description": "",
  "id": "login-to-account-at-webuniversity.com-using-login-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#  Given I acces webdriveruniversity portal"
    },
    {
      "line": 5,
      "value": "#  When I click on the login portal"
    },
    {
      "line": 6,
      "value": "#  And  I enter a username"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#  # this will launch multiple scenarios"
    },
    {
      "line": 9,
      "value": "#  @LoginPortal"
    },
    {
      "line": 10,
      "value": "#  Scenario: Login to account with a valid password"
    },
    {
      "line": 11,
      "value": "#  And I enter a \"valid\" password"
    },
    {
      "line": 12,
      "value": "#  And I click on the submit button"
    },
    {
      "line": 13,
      "value": "#  Then I should be presented with a successful validation alert"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#  @LoginPortal"
    },
    {
      "line": 17,
      "value": "#  Scenario: Login to account with a valid password"
    },
    {
      "line": 18,
      "value": "#    And I enter a \"invalid\" password"
    },
    {
      "line": 19,
      "value": "#    And I click on the submit button"
    },
    {
      "line": 20,
      "value": "#    Then I should be presented with a successful validation alert"
    }
  ],
  "line": 23,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Usser clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters a \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters a \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user should be presented with a following prompt \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 32,
      "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "https://webdriveruniversity.com/",
        "Claudio",
        "pass",
        "validationfailed"
      ],
      "line": 33,
      "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "https://webdriveruniversity.com/",
        "BOb",
        "passwo",
        "validationfailed"
      ],
      "line": 34,
      "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2960841930,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to \"https://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Usser clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters a \"Claudio\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters a \"pass\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user should be presented with a following prompt \"validationfailed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://webdriveruniversity.com/",
      "offset": 19
    }
  ],
  "location": "LoginToPortal.user_navigates_to(String)"
});
formatter.result({
  "duration": 2162110468,
  "status": "passed"
});
formatter.match({
  "location": "LoginToPortal.usser_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 326763858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Claudio",
      "offset": 15
    }
  ],
  "location": "LoginToPortal.user_enters_a_username(String)"
});
formatter.result({
  "duration": 557431631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 15
    }
  ],
  "location": "LoginToPortal.user_enters_a_password(String)"
});
formatter.result({
  "duration": 243102531,
  "status": "passed"
});
formatter.match({
  "location": "LoginToPortal.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 248191343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validationfailed",
      "offset": 54
    }
  ],
  "location": "LoginToPortal.the_user_should_be_presented_with_a_following_prompt(String)"
});
formatter.result({
  "duration": 21725758,
  "status": "passed"
});
formatter.before({
  "duration": 1086264770,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-to-account-at-webuniversity.com-using-login-portal;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@scenarioOutline"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User navigates to \"https://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Usser clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters a \"BOb\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters a \"passwo\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user should be presented with a following prompt \"validationfailed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://webdriveruniversity.com/",
      "offset": 19
    }
  ],
  "location": "LoginToPortal.user_navigates_to(String)"
});
formatter.result({
  "duration": 1769058673,
  "status": "passed"
});
formatter.match({
  "location": "LoginToPortal.usser_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 250376344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOb",
      "offset": 15
    }
  ],
  "location": "LoginToPortal.user_enters_a_username(String)"
});
formatter.result({
  "duration": 561819819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwo",
      "offset": 15
    }
  ],
  "location": "LoginToPortal.user_enters_a_password(String)"
});
formatter.result({
  "duration": 276556017,
  "status": "passed"
});
formatter.match({
  "location": "LoginToPortal.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 238488707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validationfailed",
      "offset": 54
    }
  ],
  "location": "LoginToPortal.the_user_should_be_presented_with_a_following_prompt(String)"
});
formatter.result({
  "duration": 24876928,
  "status": "passed"
});
});