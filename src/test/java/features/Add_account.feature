@addAccount 
Feature: validate Techfios Add account functionality 

Background:
 Given User will open browser 
	
Scenario: 1 user will be able to login with the valid credentials 
    //When User land on the techfios login page    
	When user enter username as "demo@techfios.com"   
	When user enter password as "abc123"   
	And users click signin button  
	Then user will lands on dashboard page  

	When user will be able to click on bank and cash button 
	When user will be able to click on add account button 
	When user will enter account title as"saving_acc" 
	When user will enter description as "no more than 3 withdraw a month" 
	When user will enter initial balance as "200USD" 
	When user will enter account number as "123_SAV_4556" 
	When user will enter contact person as "Techfios_inc" 
	When user will enter phone as "123_abc_4556" 
	When user will enter internet banking as "www.techfios_saving_inc" 
	When user will click on submit button 
	And takeScreenshotAtEndOfTest(WebDriver driver)
	Then user will close the browser 