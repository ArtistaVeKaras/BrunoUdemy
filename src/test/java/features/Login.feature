@Login
Feature: Login into account 
		Existing user should be able to login into account with correct credentials
		
Scenario: Login into account with correct credentials
	Given User navigates to GitHub website
	And User clicks on the sign in button
	And User enters a valid username
	And User enters a valid password
	And Usser clicks the login button
	Then User should be taken to the successfull login page		