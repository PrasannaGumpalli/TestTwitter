$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "View the home page of Twitter site and validate multiple fields in there",
  "description": "",
  "id": "view-the-home-page-of-twitter-site-and-validate-multiple-fields-in-there",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4775974540,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the URL of the twitter site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the twitter page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.the_URL_of_the_twitter_site()"
});
formatter.result({
  "duration": 5529416357,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_twitter_page_must_be_displayed()"
});
formatter.result({
  "duration": 96822310,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate the Twitter home page and navigate to Sports tab and then to Sports commentary",
  "description": "",
  "id": "view-the-home-page-of-twitter-site-and-validate-multiple-fields-in-there;validate-the-twitter-home-page-and-navigate-to-sports-tab-and-then-to-sports-commentary",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Click on the Sports tab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on the Sports commentary",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.click_on_the_Sports_tab()"
});
formatter.result({
  "duration": 218244973,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.click_on_the_Sports_commentary()"
});
formatter.result({
  "duration": 4145239225,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2253151471,
  "status": "passed"
});
formatter.before({
  "duration": 2019314371,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the URL of the twitter site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the twitter page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.the_URL_of_the_twitter_site()"
});
formatter.result({
  "duration": 3872808798,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_twitter_page_must_be_displayed()"
});
formatter.result({
  "duration": 32003454,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Navigate to News tab",
  "description": "",
  "id": "view-the-home-page-of-twitter-site-and-validate-multiple-fields-in-there;navigate-to-news-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Click on the News tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.click_on_the_News_tab()"
});
formatter.result({
  "duration": 2195744250,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1768479704,
  "status": "passed"
});
formatter.before({
  "duration": 2192424780,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the URL of the twitter site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the twitter page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.the_URL_of_the_twitter_site()"
});
formatter.result({
  "duration": 4845893349,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_twitter_page_must_be_displayed()"
});
formatter.result({
  "duration": 67551233,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Navigate to More to select the Science option",
  "description": "",
  "id": "view-the-home-page-of-twitter-site-and-validate-multiple-fields-in-there;navigate-to-more-to-select-the-science-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Click on the More drop down list",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Science option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.click_on_the_More_drop_down_list()"
});
formatter.result({
  "duration": 193607928,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.select_Science_option()"
});
formatter.result({
  "duration": 2110432995,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1820986651,
  "status": "passed"
});
formatter.uri("SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up with user details",
  "description": "",
  "id": "sign-up-with-user-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "SignUp with user details",
  "description": "",
  "id": "sign-up-with-user-details;signup-with-user-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user clicks the SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the signup page must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Full name, Phone/Email and Password \"\u003cFull Name\u003e\", \"\u003cPhone or Email\u003e\", \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on the SignUp button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "sign-up-with-user-details;signup-with-user-details;",
  "rows": [
    {
      "cells": [
        "Full Name",
        "Phone or Email",
        "Password"
      ],
      "line": 14,
      "id": "sign-up-with-user-details;signup-with-user-details;;1"
    },
    {
      "cells": [
        "Swathi Sridharan",
        "267-798-5279",
        "abc123@1"
      ],
      "line": 15,
      "id": "sign-up-with-user-details;signup-with-user-details;;2"
    },
    {
      "cells": [
        "Anuvarsha Gumpalli",
        "anuvarsha95@gmail.com",
        "abctest1"
      ],
      "line": 16,
      "id": "sign-up-with-user-details;signup-with-user-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2027489316,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the URL of the twitter site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the twitter page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.the_URL_of_the_twitter_site()"
});
formatter.result({
  "duration": 5305239431,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_twitter_page_must_be_displayed()"
});
formatter.result({
  "duration": 56358472,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "SignUp with user details",
  "description": "",
  "id": "sign-up-with-user-details;signup-with-user-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user clicks the SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the signup page must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Full name, Phone/Email and Password \"Swathi Sridharan\", \"267-798-5279\", \"abc123@1\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on the SignUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpPage.user_clicks_the_SignUp_button()"
});
formatter.result({
  "duration": 2209846882,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPage.the_signup_page_must_be_displayed()"
});
formatter.result({
  "duration": 15031486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Swathi Sridharan",
      "offset": 47
    },
    {
      "val": "267-798-5279",
      "offset": 67
    },
    {
      "val": "abc123@1",
      "offset": 83
    }
  ],
  "location": "SignUpPage.enter_the_Full_name_Phone_Email_and_Password(String,String,String)"
});
formatter.result({
  "duration": 568295981,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPage.click_on_the_SignUp_button()"
});
formatter.result({
  "duration": 2739168093,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1510866573,
  "status": "passed"
});
formatter.before({
  "duration": 1994847140,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the URL of the twitter site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the twitter page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.the_URL_of_the_twitter_site()"
});
formatter.result({
  "duration": 3900939820,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_twitter_page_must_be_displayed()"
});
formatter.result({
  "duration": 70284464,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "SignUp with user details",
  "description": "",
  "id": "sign-up-with-user-details;signup-with-user-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user clicks the SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the signup page must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Full name, Phone/Email and Password \"Anuvarsha Gumpalli\", \"anuvarsha95@gmail.com\", \"abctest1\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on the SignUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpPage.user_clicks_the_SignUp_button()"
});
formatter.result({
  "duration": 2164851837,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPage.the_signup_page_must_be_displayed()"
});
formatter.result({
  "duration": 14408979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anuvarsha Gumpalli",
      "offset": 47
    },
    {
      "val": "anuvarsha95@gmail.com",
      "offset": 69
    },
    {
      "val": "abctest1",
      "offset": 94
    }
  ],
  "location": "SignUpPage.enter_the_Full_name_Phone_Email_and_Password(String,String,String)"
});
formatter.result({
  "duration": 476809997,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPage.click_on_the_SignUp_button()"
});
formatter.result({
  "duration": 2622671730,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1461563897,
  "status": "passed"
});
});