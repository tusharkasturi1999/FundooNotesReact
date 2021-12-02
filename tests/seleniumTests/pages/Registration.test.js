const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
// let driver =  new Builder().forBrowser("chrome").build(); 
async function RegistrationTest(){
 
      
        var firstName = "Tushar";
        var lastName = "Kasturi";
        var emailId = "tuskkash@gmail.com";
        var password = "Test123#";
        var confirm = "Test123#";
      
       //To wait for browser to build and launch properly
       const driver = new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://localhost:3000/");
            
        //To send a search query by passing the value in searchString.
        // console.log("Driver value",driver);
        await driver.findElement(By.name("firstNameBox")).sendKeys(firstName);
        // await driver.sleep(1000);
        await driver.findElement(By.name("lastNameBox")).sendKeys(lastName);
        // await driver.sleep(1000);
        await driver.findElement(By.name("emailIdBox")).sendKeys(emailId);
        // await driver.sleep(1000);
        await driver.findElement(By.name("firstPasswordBox")).sendKeys(password);
        // await driver.sleep(1000);
        await driver.findElement(By.name("confirmBox")).sendKeys(confirm);
        // await driver.sleep(1000);
        await driver.findElement(By.id("signUp")).click();
        await driver.quit();


       
        // await driver.findElement(By.name("emailIdBoxEmailLogin")).sendKeys(emailId);
        // // await driver.sleep(1000);
        // await driver.findElement(By.name("firstPasswordBoxLogin")).sendKeys(password);
        // await driver.findElement(By.id("signIn")).clicl();
        // await driver.quit();
       

}
RegistrationTest()


