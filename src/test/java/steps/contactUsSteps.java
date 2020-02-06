package steps;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.it.Data;
import org.joda.time.Seconds;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class contactUsSteps {

	WebDriver driver = null;

//	@Before
//	public WebDriver setup(){
//		String projPathString = System.getProperty("user.dir");
//		System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
//		this.driver = new ChromeDriver();
////		this.driver =  new FirefoxDriver();
//		//driver.manage().window().maximize();
//		return driver;
//	}
//
//	@After
//	public void tearDown() {
//		driver.manage().deleteAllCookies();
////		driver.quit();
//		driver.close();
//	}

	@Given("^I acces webdriveruniversity$")
	public void i_acces_webdriveruniversity() throws Throwable {
		driver.get("https://webdriveruniversity.com/");
	}

	@When("^I click in the contact us form$")
	public void i_click_in_the_contact_us_form() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"contact-us\"]/div/div[1]/h1")).click();
	}
	@And("^I enter a first name$")
	public void i_enter_a_first_name(DataTable name) throws Throwable {
		@SuppressWarnings("unused")
		String windownBefore = driver.getWindowHandle();
		for (String windHandle : driver.getWindowHandles()) {
			driver.switchTo().window(windHandle);
		}
		List<List<String>> data = name.raw();
		driver.findElement(By.cssSelector("[name='first_name']")).sendKeys(data.get(0).get(2));//will the third name from the list in the feature file
	}

	@And("^I enter a last name$")
	public void i_enter_a_last_name() throws Throwable {
		driver.findElement(By.ByXPath.xpath("//input[@placeholder='Last Name']")).sendKeys("Akira");
	}

	@And("^I enter email address$")
	public void i_enter_email_address() throws Throwable {
		driver.findElement(By.name("email")).sendKeys("akira@gmail.com");
	}

	@And("^I enter comments$")
	public void i_enter_comments(DataTable comment) throws Throwable {
		List<List<String>> data = comment.raw();
		driver.findElement(By.xpath("//textarea[@placeholder='Comments']")).sendKeys(data.get(0).get(0)+ "\n"); //will print the first comment
		driver.findElement(By.xpath("//textarea[@placeholder='Comments']")).sendKeys(data.get(0).get(1)+ "\n");//will print the second comment
		driver.findElement(By.xpath("//textarea[@placeholder='Comments']")).sendKeys(data.get(0).get(2)+ "\n");//will print the third comment
	}

	@And("^I click the submit button$")
	public void i_click_the_submit_button() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.cssSelector("[value='SUBMIT']")).click();
	}

	@Then("^The information should successfully be submitted via the contact us form$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {

	}

}
