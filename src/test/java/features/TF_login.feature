@loginPage 
Feature: validate Techfios login functionality 

Background: 
	Given User is opening browser 
	
Scenario: 1 user should be able to login with the valid credentials 
	When User is on the techfios login page 
	When user enters username as "demo@techfios.com" 
	When user enters password as "abc123" 
	And user click signin button 
	Then user will land on dashboard page 
	
	