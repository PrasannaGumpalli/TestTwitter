package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class AbstractTwitterPage{

	WebDriver driver;
	
	@Before 
	public void setUp() throws Throwable{
		if(driver==null){
			System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
			driver=new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(20L,TimeUnit.SECONDS);
			}
	}
	
	public WebDriver getDriver(){
		
		return driver;
		
	}
	
	 @After
		public void tearDown(Scenario scenario) {
			        try {
			            if (scenario.isFailed()) {
			                final byte[] screenshot = ((TakesScreenshot) driver)
			                        .getScreenshotAs(OutputType.BYTES);
			                scenario.embed(screenshot, "image/png");
			            }
			            else{
			            	final byte[] screenshot = ((TakesScreenshot) driver)
			                        .getScreenshotAs(OutputType.BYTES);
			                scenario.embed(screenshot, "image/png");
			            }
			        } finally {
			            driver.quit();
			        }
			    }
		
}
