package com.testrunner;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(   features = "src/test/resources/features/",
	  glue = "com.stepdefinition",
	  plugin = {"pretty","html:target/cucumber-html-report",
	             "json:target/cucumber-json-report",
	             "junit:target/cucumber-junit-report",
	             "com.cucumber.listener.ExtentCucumberFormatter:target/Extentreports/Extentreport.html"},
	 tags = {"@tc_01_My_orders,@tc_02_Edit_address,@tc_03_Review_an_item,@tc_04_Change_Password"}
	// monochrome = true
)
	

public class testrunner {

}
