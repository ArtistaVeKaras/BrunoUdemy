package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features/"},
                 glue = "steps",
                 tags = {"@Loginweb"},
                 monochrome = true,
                 plugin = {"pretty", "html:target/cucumber", "json:target/cucumber/json", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber"}
				 
)

public class MainRunner {
	

}
