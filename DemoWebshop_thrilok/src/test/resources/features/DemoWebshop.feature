@DemoWebshop
Feature: DemoWebshop Website
@tc_01_My_orders
Scenario: Taking screenshot of order details in myorders
Given I logged into website
When I navigate to My orders page
And I click on order details
Then order details will be displayed and captured


    
@tc_02_Edit_address
Scenario: Changing city and pincode in shipping address
Given I logged in to DemoWebshop website
When I navigate to My_account page
And I click edit address
Then I enter the city and pincode
And I click submit button
Then updated address is displayed

@tc_03_Review_an_item
Scenario: To review an item in demoshop website
Given I logged in to the website
When I click on an item from the list
And I click on write a review option
Then I enter the message
And I click on submit
Then I will eceive feedback stating review is succesfully added message


      
      
@tc_04_Change_Password
Scenario Outline: Changing password of logged in profile
Given I logged in to website
When I navigate to My account page
And I click change password
Then I enter "<oldpwd>" "<newpwd>" "<confirmnewpwd>"
And I click submit
Then Password succesfully changed message is displayed

Examples:

		|oldpwd		|newpwd	  |confirmnewpwd |
		|demo123|demo123|demo123|
		 
      
      
      
      
      #
