package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class ProductPage {

    WebDriver driver;

    @Before
	public WebDriver setup() {
        String projPathString = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
        this.driver = new ChromeDriver();
//		this.driver =  new FirefoxDriver();
        //driver.manage().window().maximize();
        return driver;
    }

    @Given("^User navigates \"([^\"]*)\" website$")
    public void user_navigates_website(String url)  {
        driver.get("https://webdriveruniversity.com/Page-Object-Model/products.html");
    }

    @When("^User clicks on \"([^\"]*)\"$")
    public void user_clicks_on(String button) {
        driver.findElement(By.cssSelector(button)).click();
    }

    @Then("^User should be presented with a promo alert$")
    public void user_should_be_presented_with_a_promo_alert() throws InterruptedException {
            driver.findElement(By.xpath("//button[contains(text(),'Proceed')]")).click();
            Thread.sleep(3000);

    }

}
