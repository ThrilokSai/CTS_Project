package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ChangePassword {
	
WebDriver driver;
	
	public ChangePassword(WebDriver driver) {
		this.driver=driver;
		
	}
	
	By old_pwd= By.xpath("//*[@id=\"OldPassword\"]");
	By new_pwd= By.id("NewPassword");
	By cnfpwd= By.id("ConfirmNewPassword");
	By submit= By.xpath("/html/body/div[4]/div[1]/div[4]/div[2]/form/div/div[2]/div[3]/input");

public void change_password(String oldpwd, String newpwd, String confirmnewpwd) {
		
		
		driver.findElement(old_pwd).sendKeys(oldpwd);
		driver.findElement(new_pwd).sendKeys(newpwd);
		driver.findElement(cnfpwd).sendKeys(confirmnewpwd);
		//driver.findElement(submit).click();
	}
	public void click_change() {
		driver.findElement(submit).click();
	}
	
	
}
