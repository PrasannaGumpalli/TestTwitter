package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TwitterSignUpPage {

	@FindBy(css="a[data-element='buttons']")
	private WebElement signup;
	@FindBy(css="input#full-name")
	private WebElement fullName;
	@FindBy(css="input#email")
	private WebElement phoneEmail;
	@FindBy(css="input#password")
	private WebElement password;
	@FindBy(css="input[value='Sign up']")
	private WebElement signUpbutton;
	
	public void SignUp() throws Throwable{
		signup.click();
		Thread.sleep(2000);
	}
	
	public void fullName(String fullName, String phoneEmail, String password){
		//for validations we need to connect to the database and validate whether the fullName is in database or not .. if it is present the user must not be signed in.
		this.fullName.sendKeys(fullName);
		
		this.phoneEmail.sendKeys(phoneEmail);
		this.password.sendKeys(password);
	}
	
	public void signUp() throws Throwable{
		signUpbutton.click();
		Thread.sleep(2000);
	}
}

