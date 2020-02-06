package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginToPortal {

    public static WebDriver driver;
//    	@Before
//	public WebDriver setup(){
//		String projPathString = System.getProperty("user.dir");
//		System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
//		this.driver = new ChromeDriver();
//		//driver.manage().window().maximize();
//				return driver;
//	}

    @Given("^I acces webdriveruniversity portal$")
    public void i_acces_webdriveruniversity_portal() throws Throwable {
    	    driver.get("https://webdriveruniversity.com/");
    }

    @When("^I click on the login portal$")
    public void i_click_on_the_login_portal() throws Throwable {
            driver.findElement(By.ByXPath.xpath("//h1[contains(text(),'LOGIN PORTAL')]")).click();
    }

    @When("^I enter a username$")
    public void i_enter_a_username() throws Throwable {
        //Store the current windown handle
        @SuppressWarnings("unused")
        String windownBefore = driver.getWindowHandle();
        //Perform the click operation the opens the new windown
        //Switch to the window opened
        for (String winHnadle : driver.getWindowHandles()) {
            driver.switchTo().window(winHnadle);
        }
        driver.findElement(By.xpath("//html//body")).sendKeys("Tom");
    }

    @And("^I enter a \"([^\"]*)\" password$")
    public void i_enter_a_password(String password) throws Throwable {
    	Thread.sleep(3000);
        driver.findElement(By.cssSelector("#password")).sendKeys(password);
    }

    @And("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
    	//driver.findElement(By.id("#login-button")).click();
        driver.findElement(By.xpath("//button[@id='login-button']")).click();
    }

    @Then("^I should be presented with a successful validation alert$")
    public void i_should_be_presented_with_a_successful_validation_alert() throws Throwable {

    }
}
