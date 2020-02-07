$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ebayCssSelectors.feature");
formatter.feature({
  "line": 1,
  "name": "Launch ebay and play with cssSelectors",
  "description": "",
  "id": "launch-ebay-and-play-with-cssselectors",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1254763495,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Find cssSelectors",
  "description": "",
  "id": "launch-ebay-and-play-with-cssselectors;find-cssselectors",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Ebay"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch ebay website",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayCssSelectors.i_launch_ebay_website()"
});
formatter.result({
  "duration": 4452474867,
  "status": "passed"
});
formatter.after({
  "duration": 181003966,
  "status": "passed"
});
});