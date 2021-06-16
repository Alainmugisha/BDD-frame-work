$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Alain Mickey/Desktop/All Java project____eclipse/maven projects/BDD/src/test/java/features/TF_login.feature");
formatter.feature({
  "line": 1,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 6162679500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "user should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user will land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_username_as(String)"
});
formatter.result({
  "duration": 289152100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_password_as(String)"
});
formatter.result({
  "duration": 105800100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_signin_button()"
});
formatter.result({
  "duration": 1780869600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_will_land_on_dashboard_page()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
});