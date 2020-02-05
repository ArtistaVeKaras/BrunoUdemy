Feature: Submit ssata to wendriberuniversity.com using the contact us form
	A user should ne aacle to submit information via the contact us form 
	
Scenario: Submit information using the contact us form 
	Given A acces webdriveruniversity
	When I click in the contact us form 
	And I enter a first name
	And I enter a last name 
	And I enter email address
	And I enter comments
	And I click the submit button
	Then The information should successfully be submitted via the contact us form

		