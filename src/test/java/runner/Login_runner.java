package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
features="C:\\Users\\Alain Mickey\\Desktop\\New eclipse 2021-06\\BDD_scenario_outline\\src\\test\\java\\features\\TF_login_ScenarioOutline.feature",
glue="",
tags ="@loginPage",
monochrome=true,
dryRun=false,
plugin= {
"pretty",
"html:target/cucumber",
"json:target/cucumber.json"
}
)


public class Login_runner {
	
	
}
