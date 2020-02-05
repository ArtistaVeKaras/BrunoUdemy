$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUsReset.feature");
formatter.feature({
  "line": 1,
  "name": "If  auser cicks on the rest button then all information should be removed from the contact us form",
  "description": "",
  "id": "if--auser-cicks-on-the-rest-button-then-all-information-should-be-removed-from-the-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1076233343,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Enter the information in the contact us form, when click on reset  button then information should be removed",
  "description": "",
  "id": "if--auser-cicks-on-the-rest-button-then-all-information-should-be-removed-from-the-contact-us-form;enter-the-information-in-the-contact-us-form,-when-click-on-reset--button-then-information-should-be-removed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@contacUs"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "A acces webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click in the contact us form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a first name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a last name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comments",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "All information which was listed by user on the contact us form should be removed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 88252733,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027akira\u0027, ip: \u0027192.168.43.186\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.3.0-7625-generic\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\n\tat steps.Loginsteps.tearDown(Loginsteps.java:31)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
});