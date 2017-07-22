package stepDefinition;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.TwitterHomePage;

public class HomePage extends Testbase{
	WebDriver driver;
    private AbstractTwitterPage base;
  
    //Dependency Injection- Constructor Injection
   public HomePage(AbstractTwitterPage base){
	   this.base=base;
   }
	
	@Given("^the URL of the twitter site$")
	public void the_URL_of_the_twitter_site() throws Throwable {
		 driver=base.getDriver();
		 driver.get(Config().getProperty("url"));
		 driver.manage().window().maximize();	 
	
	}
	

	@Then("^the twitter page must be displayed$")
	public void the_twitter_page_must_be_displayed() throws Throwable {
	   if(driver.getTitle().equals("Twitter. It&#39;s what&#39;s happening.")){
		  System.out.println("Test Passed");
	   }
	  log.debug("The twitter HomePage is displayed");
	}

	@Then("^Click on the Sports tab$")
	public void click_on_the_Sports_tab() throws Throwable {
	  TwitterHomePage sport=PageFactory.initElements(driver, TwitterHomePage.class);
	  sport.sports();
	  log.debug("The sports tab is selected");
	}
	@Then("^Click on the Sports commentary$")
	public void click_on_the_Sports_commentary() throws Throwable {
	   TwitterHomePage sportC=PageFactory.initElements(driver, TwitterHomePage.class);
	   sportC.sportsCommentary();
	   log.debug("The Sports commentary page is displayed");
	}

	@Then("^Click on the News tab$")
	public void click_on_the_News_tab() throws Throwable {
		  TwitterHomePage news=PageFactory.initElements(driver, TwitterHomePage.class);
		   news.news();
		   log.debug("The News page is displayed");
	}

	@Then("^Click on the More drop down list$")
	public void click_on_the_More_drop_down_list() throws Throwable {
		TwitterHomePage menu=PageFactory.initElements(driver, TwitterHomePage.class);
		   menu.menu();
		   log.debug("The Menu dropdown list is selected");
	}

	@Then("^Select Science option$")
	public void select_Science_option() throws Throwable {
		TwitterHomePage science=PageFactory.initElements(driver, TwitterHomePage.class);
		science.science();
		log.debug("The Science page is displayed");
	}





}
