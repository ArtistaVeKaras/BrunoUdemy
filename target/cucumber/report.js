$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit ssata to webdriveruniversity.com using the contact us form",
  "description": "A user should ne aacle to submit information via the contact us form",
  "id": "submit-ssata-to-webdriveruniversity.com-using-the-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3222061623,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Submit information using the contact us form",
  "description": "",
  "id": "submit-ssata-to-webdriveruniversity.com-using-the-contact-us-form;submit-information-using-the-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Loginweb"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I acces webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click in the contact us form",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter a first name",
  "rows": [
    {
      "cells": [
        "Claudio",
        "Akira",
        "Jones"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter a last name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "this is the 1st comment",
        "this is the 2nd comment!",
        "This is 3rd and the final comment of the day!!"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "contactUsSteps.i_acces_webdriveruniversity()"
});
formatter.result({
  "duration": 2114660914,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_click_in_the_contact_us_form()"
});
formatter.result({
  "duration": 295415656,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_enter_a_first_name(DataTable)"
});
formatter.result({
  "duration": 945590499,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_enter_a_last_name()"
});
formatter.result({
  "duration": 211458643,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_enter_email_address()"
});
formatter.result({
  "duration": 316692298,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 1503386757,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 4194440904,
  "status": "passed"
});
formatter.match({
  "location": "contactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 142870,
  "status": "passed"
});
formatter.after({
  "duration": 22890067,
  "status": "passed"
});
});