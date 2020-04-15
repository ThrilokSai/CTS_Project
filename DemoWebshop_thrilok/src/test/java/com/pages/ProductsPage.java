package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ProductsPage {

		WebDriver driver;
		public ProductsPage(WebDriver driver) {
			this.driver=driver;
		}
		
				
		By myaccount=  By.xpath("/html/body/div[4]/div[2]/div[1]/div[3]/ul/li[1]/a");
		By orders= By.xpath("/html/body/div[4]/div[2]/div[1]/div[3]/ul/li[2]/a");
		By product= By.xpath("/html/body/div[4]/div[1]/div[4]/div[3]/div/div/div[3]/div[3]/div/div[2]/h2/a");
		By review= By.xpath("//*[@id=\"product-details-form\"]/div/div[1]/div[2]/div[4]/div[2]/a[2]");
		
		public void  my_account() {
			driver.findElement(myaccount).click();
		}
		public void myorders() {
			driver.findElement(orders).click();
			
			}
		public void select_product() {
			driver.findElement(product).click();
		}
		public void click_review() {
			driver.findElement(review).click();
		}
		
		
	}
	
	

