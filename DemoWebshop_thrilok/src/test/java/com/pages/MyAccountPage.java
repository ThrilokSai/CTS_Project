package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccountPage {
	
	WebDriver driver;
	
	public MyAccountPage(WebDriver driver) {
		this.driver=driver;
		
	}
	
	
	By change_password= By.xpath("/html/body/div[4]/div[1]/div[4]/div[1]/div/div[2]/ul/li[7]/a");
	By address= By.xpath("/html/body/div[4]/div[1]/div[4]/div[1]/div/div[2]/ul/li[2]/a");
	By edit_add= By.xpath("/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div/div[2]/input[1]");
	
	
	
	
	public void click_changepwd() {
		driver.findElement(change_password).click();
	}
	public void edit_address() {
		driver.findElement(address).click();
		driver.findElement(edit_add).click();
	}
	

}
