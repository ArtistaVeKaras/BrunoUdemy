package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/featureLogin/"},
                 glue = "steps",
                 tags = {"@Staging"},
                 monochrome = true,
                 plugin = {"pretty", "html:target/cucumber",
                         "json:target/cucumber/json",
                         "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber"}
				 
)

public class MainRunnerStaging {
	

}