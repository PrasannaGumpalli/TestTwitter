package pages;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;




public class TwitterHomePage{

WebDriver driver;
public TwitterHomePage(WebDriver driver){
	this.driver=driver;
	driver.manage().timeouts().implicitlyWait(20L, TimeUnit.SECONDS);
}
	@FindBy(css="a[data-nav='686639666771046402']>span.StreamsCategoryBar-itemName")
	public WebElement sports;
	@FindBy(css="a[href='https://twitter.com/i/streams/stream/879738045985116164']")
	public WebElement sportsCommentary;
	@FindBy(css="a[data-nav='686639666779394057']")
	public WebElement news;
	@FindBy(css="span.StreamsCategoryBar-itemName > span.StreamsCategoryBar-moreIcon.Icon.Icon--caretDown")
	public WebElement menu;
	@FindBy(css="a[data-nav='841388582518562816']")
	public WebElement science;

	
	public void sports(){
		sports.click();
	
	}
	public void sportsCommentary() throws Throwable{
		Thread.sleep(2000);
		sportsCommentary.click();
		Thread.sleep(2000);
	}
	
	public void news() throws Throwable{
		news.click();
		Thread.sleep(2000);
	}
	
	public void menu(){
		menu.click();
		}
	public void science() throws Throwable{
		science.click();
		Thread.sleep(2000);
	}
	
}
	


