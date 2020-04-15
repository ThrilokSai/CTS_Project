$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoWebshop.feature");
formatter.feature({
  "line": 2,
  "name": "DemoWebshop Website",
  "description": "",
  "id": "demowebshop-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DemoWebshop"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Taking screenshot of order details in myorders",
  "description": "",
  "id": "demowebshop-website;taking-screenshot-of-order-details-in-myorders",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01_My_orders"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I logged into website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to My orders page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on order details",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "order details will be displayed and captured",
  "keyword": "Then "
});
formatter.match({
  "location": "MyOrders.i_logged_into_website()"
});
formatter.result({
  "duration": 55024679100,
  "status": "passed"
});
formatter.match({
  "location": "MyOrders.i_navigate_to_My_orders_page()"
});
formatter.result({
  "duration": 1211753000,
  "status": "passed"
});
formatter.match({
  "location": "MyOrders.i_click_on_order_details()"
});
formatter.result({
  "duration": 1359404300,
  "status": "passed"
});
formatter.match({
  "location": "MyOrders.order_details_will_be_displayed_and_captured()"
});
formatter.result({
  "duration": 535717400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Changing city and pincode in shipping address",
  "description": "",
  "id": "demowebshop-website;changing-city-and-pincode-in-shipping-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@tc_02_Edit_address"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I logged in to DemoWebshop website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to My_account page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click edit address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter the city and pincode",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "updated address is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "EditAddress.i_logged_in_to_DemoWebshop_website()"
});
formatter.result({
  "duration": 21572981500,
  "status": "passed"
});
formatter.match({
  "location": "EditAddress.i_navigate_to_My_account_page()"
});
formatter.result({
  "duration": 1155106200,
  "status": "passed"
});
formatter.match({
  "location": "EditAddress.i_click_add_address()"
});
formatter.result({
  "duration": 2357742000,
  "status": "passed"
});
formatter.match({
  "location": "EditAddress.i_enter_all_the_details()"
});
formatter.result({
  "duration": 561686800,
  "status": "passed"
});
formatter.match({
  "location": "EditAddress.i_click_submit_button()"
});
formatter.result({
  "duration": 4830790700,
  "status": "passed"
});
formatter.match({
  "location": "EditAddress.newly_added_address_is_displayed()"
});
formatter.result({
  "duration": 430613200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To review an item in demoshop website",
  "description": "",
  "id": "demowebshop-website;to-review-an-item-in-demoshop-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tc_03_Review_an_item"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I logged in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on an item from the list",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on write a review option",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter the message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will eceive feedback stating review is succesfully added message",
  "keyword": "Then "
});
formatter.match({
  "location": "Review.i_logged_in_to_the_website()"
});
formatter.result({
  "duration": 28394325400,
  "status": "passed"
});
formatter.match({
  "location": "Review.i_click_on_an_item_from_the_list()"
});
formatter.result({
  "duration": 3667044800,
  "status": "passed"
});
formatter.match({
  "location": "Review.i_click_on_write_a_review_option()"
});
formatter.result({
  "duration": 904862800,
  "status": "passed"
});
formatter.match({
  "location": "Review.i_enter_the_message()"
});
formatter.result({
  "duration": 1618408900,
  "status": "passed"
});
formatter.match({
  "location": "Review.i_click_on_submit()"
});
formatter.result({
  "duration": 1977925300,
  "status": "passed"
});
formatter.match({
  "location": "Review.i_will_eceive_feedback_stating_review_is_succesfully_added_message()"
});
formatter.result({
  "duration": 747737300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Changing password of logged in profile",
  "description": "",
  "id": "demowebshop-website;changing-password-of-logged-in-profile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tc_04_Change_Password"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I logged in to website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I navigate to My account page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click change password",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"\u003coldpwd\u003e\" \"\u003cnewpwd\u003e\" \"\u003cconfirmnewpwd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Password succesfully changed message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "demowebshop-website;changing-password-of-logged-in-profile;",
  "rows": [
    {
      "cells": [
        "oldpwd",
        "newpwd",
        "confirmnewpwd"
      ],
      "line": 44,
      "id": "demowebshop-website;changing-password-of-logged-in-profile;;1"
    },
    {
      "cells": [
        "demo123",
        "demo123",
        "demo123"
      ],
      "line": 45,
      "id": "demowebshop-website;changing-password-of-logged-in-profile;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Changing password of logged in profile",
  "description": "",
  "id": "demowebshop-website;changing-password-of-logged-in-profile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tc_04_Change_Password"
    },
    {
      "line": 1,
      "name": "@DemoWebshop"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I logged in to website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I navigate to My account page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click change password",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"demo123\" \"demo123\" \"demo123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Password succesfully changed message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePwd.i_logged_in_to_website()"
});
formatter.result({
  "duration": 22391369400,
  "status": "passed"
});
formatter.match({
  "location": "ChangePwd.i_navigate_to_My_account_page()"
});
formatter.result({
  "duration": 2288823900,
  "status": "passed"
});
formatter.match({
  "location": "ChangePwd.i_click_change_password()"
});
formatter.result({
  "duration": 852461600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo123",
      "offset": 9
    },
    {
      "val": "demo123",
      "offset": 19
    },
    {
      "val": "demo123",
      "offset": 29
    }
  ],
  "location": "ChangePwd.i_enter(String,String,String)"
});
formatter.result({
  "duration": 2393939700,
  "status": "passed"
});
formatter.match({
  "location": "ChangePwd.i_click_submit()"
});
formatter.result({
  "duration": 1413822900,
  "status": "passed"
});
formatter.match({
  "location": "ChangePwd.password_succesfully_changed_message_is_displayed()"
});
formatter.result({
  "duration": 682351600,
  "status": "passed"
});
});