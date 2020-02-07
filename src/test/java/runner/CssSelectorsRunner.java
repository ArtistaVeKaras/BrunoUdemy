package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features/"},
                 glue = "steps",
                 tags = {"@Ebay"},
                 monochrome = true,
                 plugin = {"pretty", "html:target/cucumber",
                         "json:target/cucumber/json",
                         "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber"}
				 
)

public class CssSelectorsRunner extends AbstractTestNGCucumberTests {

}

