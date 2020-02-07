Feature: Product page

  @Product
  Scenario Outline: Validate promo code alert is visible when clicking on the special offers link
      Given User navigates "<url>" website
      And User clicks on "<button>"
      Then User should be presented with a promo alert

    Examples:
      |                                              url                 |                  button             |
      |https://webdriveruniversity.com/Page-Object-Model/products.html   |               #amp-img              |