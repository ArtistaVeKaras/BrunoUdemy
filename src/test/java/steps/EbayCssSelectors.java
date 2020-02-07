package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

public class EbayCssSelectors {

//    By username = @FindBy('#username');
    public  static WebDriver driver;

    @Before
    public WebDriver setup() {
        System.setProperty("webdriver.chrome.driver", "/home/claudio/Downloads/Drivers/chromedriver");
        this.driver = new ChromeDriver();
        //driver.manage().window().maximize();
        return driver;
    }

    @After
    public void tearDown(){
        driver.manage().deleteAllCookies();
        driver.quit();
    }

    //practicing csselectors
    @Given("^I launch ebay website$")
    public void i_launch_ebay_website() throws Throwable {
//        driver.get("https://www.ebay.co.uk/");
//        driver.findElement(By.cssSelector("#gh-ac")).sendKeys("book");
//        driver.findElement(By.cssSelector("#gh-btn")).click();
        driver.get("https://wordpress.com/start/user");

        //cssSelectors using the tagName+id
        driver.findElement(By.cssSelector("input#email")).sendKeys("Claudio@gmail.com");
        driver.findElement(By.cssSelector("input#username")).sendKeys("Akira");
        driver.findElement(By.cssSelector("input#password")).sendKeys("vegan is good");
    }
}
