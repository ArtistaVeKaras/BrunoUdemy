package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginToPortal {

    public static WebDriver driver;
    	@Before
	public WebDriver setup(){
		String projPathString = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
		this.driver = new ChromeDriver();
		//driver.manage().window().maximize();
				return driver;
	}

    @Given("^User navigates to \"([^\"]*)\"$")
    public void user_navigates_to(String url) throws Throwable {
        driver.get(url);
    }

    @When("^Usser clicks on the login button$")
    public void usser_clicks_on_the_login_button() throws Throwable {
        driver.findElement(By.xpath("//h1[contains(text(),'LOGIN PORTAL')]")).click();
    }

    @And("^User enters a \"([^\"]*)\" username$")
    public void user_enters_a_username(String username) throws Throwable {
    	    //code to handle the windown tab
        for (String windHandle : driver.getWindowHandles()){
            driver.switchTo().window(windHandle);
        }
        driver.findElement(By.xpath("//html//body")).sendKeys(username);
    }

    @And("^User enters a \"([^\"]*)\" password$")
    public void user_enters_a_password(String password) throws Throwable {
        driver.findElement(By.cssSelector("#password")).sendKeys(password);
    }

    @And("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        driver.findElement(By.cssSelector("#login-button")).click();
    }

    @Then("^The user should be presented with a following prompt \"([^\"]*)\"$")
    public void the_user_should_be_presented_with_a_following_prompt(String message) throws Throwable {
    	    //switching to alert
        Alert alert = driver.switchTo().alert();
        Assert.assertEquals(alert.getText().toLowerCase().replaceAll("\\s", ""), message.toLowerCase().replaceAll("\\s", ""));
    }
}
