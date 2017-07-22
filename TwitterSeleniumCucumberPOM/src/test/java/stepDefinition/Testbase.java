package stepDefinition;

import java.io.FileInputStream;
import java.util.Properties;

import org.apache.log4j.Logger;


public class Testbase{
protected static Properties config=new Properties();
protected static FileInputStream fis;
protected static Logger log=Logger.getLogger("devpinoyLogger");
//protected static ExcelReader excel=new ExcelReader(System.getProperty("user.dir")+"\\src\\test\\resources\\excel\\TwitterData.xlsx");
public Properties Config() throws Throwable{
	fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\config.properties");
	config.load(fis);
	return config;
}


}
