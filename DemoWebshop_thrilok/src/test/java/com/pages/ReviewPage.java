package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ReviewPage {
	WebDriver driver;
	public ReviewPage(WebDriver driver) {
	
		this.driver=driver;
	}
	
	By review_title= By.xpath("//*[@id=\"AddProductReview_Title\"]");
	By review_text= By.xpath("//*[@id=\"AddProductReview_ReviewText\"]");
	By rating=By.xpath("//*[@id=\"addproductrating_4\"]");
	By submit=By.xpath("//*[@id=\"review-form\"]/form/div[3]/input");
	
	
	public void review() {
		
		driver.findElement(review_title).sendKeys("Laptop battery");
		driver.findElement(review_text).sendKeys("Battery backup is very less");
		driver.findElement(rating).click();
		

}
	public void submit_review() {
		driver.findElement(submit).click();
	}
	
	
	
	
	

}
