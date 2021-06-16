package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import all_pages.Login_page_elements;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.BrowserFactory;



public class LoginSteps {
	WebDriver driver;
	Login_page_elements login;

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {

		driver = BrowserFactory.startBrowser();

	}
	
	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String Username)  {
		login = PageFactory.initElements(driver, Login_page_elements.class );
		login.enterUserName(Username);
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String Password) {
		login.enterPassword(Password);
	
	}

	@When("^user click signin button$")
	public void user_click_signin_button() {
		login.clickOnSignInButton();
	   
	}

	@Then("^user will land on dashboard page$")
	public void user_will_land_on_dashboard_page()  {
	   
	}


}
