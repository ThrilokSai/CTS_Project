package com.pages;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.seleniumutil.SeleniumUtil;

public class OrdersPage {
	
WebDriver driver;
	
	public OrdersPage(WebDriver driver) {
		this.driver=driver;
		
	}
	
	By details= By.xpath("/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div/div/div[2]/input");

	public void order_details() {
		driver.findElement(details).click();
	}
	
	public void screenshot() throws IOException {
		SeleniumUtil sp= new SeleniumUtil(driver);
		sp.take_screenshot("C:\\Users\\3lok\\Desktop\\selenium\\DemoWebshop_thrilok\\src\\test\\resources\\screenshots\\orderdetails.png");
		
	}
	
	

}
