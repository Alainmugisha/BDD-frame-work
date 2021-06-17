package steps;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import all_pages.Login_page_elements;
import all_pages.New_account_elements;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.BrowserFactory;

public class New_account_steps {

	WebDriver driver;

	New_account_elements new_account;
	Login_page_elements login;

@Given("^User will open browser$")
public void user_will_open_browser() throws Throwable {
	driver = BrowserFactory.startBrowser();
}


@When("^user enter username as \"([^\"]*)\"$")
public void user_enter_username_as(String Username) throws Throwable {
	login = PageFactory.initElements(driver, Login_page_elements.class);
	login.enterUserName(Username);
}

@When("^user enter password as \"([^\"]*)\"$")
public void user_enter_password_as(String Password) throws Throwable {
	login.enterPassword(Password);
}

@When("^users click signin button$")
public void users_click_signin_button() throws Throwable {
	login.clickOnSignInButton();

}

@Then("^user will lands on dashboard page$")
public void user_will_lands_on_dashboard_page() throws Throwable {
   driver.getTitle();
}
	
//-------------------------------------------------------------------------------------------------------------------------------
	@When("^user will be able to click on bank and cash button$")
	public void user_will_be_able_to_click_on_bank_and_cash_button()  {
		new_account = PageFactory.initElements(driver, New_account_elements.class);
		new_account.clickBank_cash_button();
	}

	@When("^user will be able to click on add account button$")
	public void user_will_be_able_to_click_on_add_account_button() throws Throwable {
		new_account.click_new_account_button();
	}

	@When("^user will enter account title as\"([^\"]*)\"$")
	public void user_will_enter_account_title_as(String title) throws Throwable {
		new_account.enter_account_title(title);
	}

	@When("^user will enter description as \"([^\"]*)\"$")
	public void user_will_enter_description_as(String desc) throws Throwable {
		new_account.enter_account_description(desc);
	}

	@When("^user will enter initial balance as \"([^\"]*)\"$")
	public void user_will_enter_initial_balance_as(String initBalance) throws Throwable {
		new_account.enter_initial_balance(initBalance);
	}

	@When("^user will enter account number as \"([^\"]*)\"$")
	public void user_will_enter_account_number_as(String acc_number) throws Throwable {
		new_account.enter_account_number(acc_number); 
	}

	@When("^user will enter contact person as \"([^\"]*)\"$")
	public void user_will_enter_contact_person_as(String person) throws Throwable {
		new_account.enter_contact_person(person);
	}

	@When("^user will enter phone as \"([^\"]*)\"$")
	public void user_will_enter_phone_as(String phone) throws Throwable {
		new_account.enter_phone_number(phone);
	}

	@When("^user will enter internet banking as \"([^\"]*)\"$")
	public void user_will_enter_internet_banking_as(String url) throws Throwable {
		new_account.enter_internet_banking_url(url);
	}

	@When("^user will click on submit button$")
	public void user_will_click_on_submit_button() throws Throwable {
		new_account.click_submit_button();
	}

	
	@And("^takeScreenshotAtEndOfTest\\(WebDriver driver\\)$")
	public void takescreenshotatendoftest_WebDriver_driver() throws Throwable {
		

		Thread.sleep(2000);
		
		TakesScreenshot ts = ((TakesScreenshot) driver);
		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = formatter.format(date);
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);

		String currentDir = System.getProperty("user.dir");
		FileUtils.copyFile(sourceFile, new File(currentDir + "/screenshots/" + label +
		".png"));
	}
	
	@Then("^user will close the browser$")
	public void user_will_close_the_browser() throws Throwable {
		driver = BrowserFactory.tearDown();
	}
}

