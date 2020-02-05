package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.*;

public class Loginsteps {

	WebDriver driver = null;

	@Before
	public WebDriver setup(){
		String projPathString = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
		this.driver = new ChromeDriver();
		//driver.manage().window().maximize();
				return driver;
	}

	@After
	public void tearDown() {
		driver.manage().deleteAllCookies();
		driver.quit();
		driver.close();
	}

	@Given("^User navigates to GitHub website$")
	public void user_navigates_to_GitHub_website() throws Throwable {
		driver.get("https://github.com/");
	}
	
	@And("^User clicks on the sign in button$")
	public void user_clicks_on_the_sign_in_button() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/header/div/div[2]/div[2]/a[1]")).click();
	}

	@And("^User enters a valid username$")
	public void user_enters_a_valid_username() throws Throwable {
		driver.findElement(By.name("login")).sendKeys("claudiooartista@hotmail.co.uk");
	}

	@And("^User enters a valid password$")
	public void user_enters_a_valid_password() throws Throwable {
		driver.findElement(By.name("password")).sendKeys("hip-poptuga01");

	}

	@And("^Usser clicks the login button$")
	public void usser_clicks_the_login_button() throws Throwable {
		driver.findElement(By.name("commit")).click();
	}

	@Then("^User should be taken to the successfull login page$")
	public void user_should_be_taken_to_the_successfull_login_page() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "GitHub");
	}
}
