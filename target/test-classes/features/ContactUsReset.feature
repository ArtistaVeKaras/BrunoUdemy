Feature: If  auser cicks on the rest button then all information should be removed from the contact us form
	
@contacUs	
Scenario: Enter the information in the contact us form, when click on reset  button then information should be removed 
	Given A acces webdriveruniversity
	When I click in the contact us form 
	And I enter a first name
	And I enter a last name 
	And I enter email address
	And I enter comments
	And I click the submit button
	Then All information which was listed should be removed  
		