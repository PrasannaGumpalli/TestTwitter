package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TwitterSignUpPage;

public class SignUpPage {

	WebDriver driver;
	private AbstractTwitterPage base;
	
	public SignUpPage(AbstractTwitterPage base){
		this.base=base;
	}
	
	@When("^user clicks the SignUp button$")
	public void user_clicks_the_SignUp_button() throws Throwable {
	   driver=base.getDriver();
	   TwitterSignUpPage signUp=PageFactory.initElements(driver, TwitterSignUpPage.class);
	   signUp.SignUp();
	   
	}

	@Then("^the signup page must be displayed$")
	public void the_signup_page_must_be_displayed() throws Throwable {
	  if(driver.getTitle().equals("Sign up for Twitter")){
		  System.out.println("SignUp page was successfully displayed");
	  }
	}

	
    @Then("^Enter the Full name, Phone/Email and Password \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void enter_the_Full_name_Phone_Email_and_Password(String arg1, String arg2, String arg3) throws Throwable {
      TwitterSignUpPage signUp=PageFactory.initElements(driver, TwitterSignUpPage.class);
      signUp.fullName(arg1, arg2, arg3);
    }

	@Then("^Click on the SignUp button$")
	public void click_on_the_SignUp_button() throws Throwable {
		 TwitterSignUpPage signUpbutton=PageFactory.initElements(driver, TwitterSignUpPage.class);
	      signUpbutton.signUp();
	}

}
