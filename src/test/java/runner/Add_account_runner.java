package runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="C:\\Users\\Alain Mickey\\Desktop\\All Java project____eclipse\\maven projects\\BDD\\src\\test\\java\\features\\Add_account.feature",
glue="",
tags ="@addAccount",
monochrome=true,
dryRun=false,
plugin= {
"pretty",
"html:target/cucumber",
"json:target/cucumber.json"
}
)

public class Add_account_runner {

}

