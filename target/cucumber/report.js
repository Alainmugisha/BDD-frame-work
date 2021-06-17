$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Add_account.feature");
formatter.feature({
  "line": 2,
  "name": "validate Techfios Add account functionality",
  "description": "",
  "id": "validate-techfios-add-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addAccount"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User will open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "New_account_steps.user_will_open_browser()"
});
formatter.result({
  "duration": 4964543600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "1 user will be able to login with the valid credentials",
  "description": "  //When User land on the techfios login page",
  "id": "validate-techfios-add-account-functionality;1-user-will-be-able-to-login-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user enter username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "users click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user will lands on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user will be able to click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user will be able to click on add account button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user will enter account title as\"saving_acc\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user will enter description as \"no more than 3 withdraw a month\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user will enter initial balance as \"200USD\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user will enter account number as \"123_SAV_4556\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user will enter contact person as \"Techfios_inc\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user will enter phone as \"123_abc_4556\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user will enter internet banking as \"www.techfios_saving_inc\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user will click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "takeScreenshotAtEndOfTest(WebDriver driver)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user will close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 24
    }
  ],
  "location": "New_account_steps.user_enter_username_as(String)"
});
formatter.result({
  "duration": 240050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "New_account_steps.user_enter_password_as(String)"
});
formatter.result({
  "duration": 117184900,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.users_click_signin_button()"
});
formatter.result({
  "duration": 1761836400,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.user_will_lands_on_dashboard_page()"
});
formatter.result({
  "duration": 11804900,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.user_will_be_able_to_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 97575100,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.user_will_be_able_to_click_on_add_account_button()"
});
formatter.result({
  "duration": 1586587800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving_acc",
      "offset": 33
    }
  ],
  "location": "New_account_steps.user_will_enter_account_title_as(String)"
});
formatter.result({
  "duration": 139246600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no more than 3 withdraw a month",
      "offset": 32
    }
  ],
  "location": "New_account_steps.user_will_enter_description_as(String)"
});
formatter.result({
  "duration": 158155800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200USD",
      "offset": 36
    }
  ],
  "location": "New_account_steps.user_will_enter_initial_balance_as(String)"
});
formatter.result({
  "duration": 126101500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123_SAV_4556",
      "offset": 35
    }
  ],
  "location": "New_account_steps.user_will_enter_account_number_as(String)"
});
formatter.result({
  "duration": 131346200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios_inc",
      "offset": 35
    }
  ],
  "location": "New_account_steps.user_will_enter_contact_person_as(String)"
});
formatter.result({
  "duration": 146233100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123_abc_4556",
      "offset": 26
    }
  ],
  "location": "New_account_steps.user_will_enter_phone_as(String)"
});
formatter.result({
  "duration": 125124700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.techfios_saving_inc",
      "offset": 37
    }
  ],
  "location": "New_account_steps.user_will_enter_internet_banking_as(String)"
});
formatter.result({
  "duration": 147012400,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.user_will_click_on_submit_button()"
});
formatter.result({
  "duration": 1065415600,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.takescreenshotatendoftest_WebDriver_driver()"
});
formatter.result({
  "duration": 2294501900,
  "status": "passed"
});
formatter.match({
  "location": "New_account_steps.user_will_close_the_browser()"
});
formatter.result({
  "duration": 5883139700,
  "status": "passed"
});
});