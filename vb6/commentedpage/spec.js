
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('vb6', function() {
                    it('commentedpage', function() { 
						console.log('Application_name : vb6, Scenario_name : commentedpage');
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vb6/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(20)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(20)), delay);
element.all(by.xpath(`//span`)).get(20).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(20).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[20]`, text);
    }
else
    {
    Get_Text.set(`//span[20]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(20).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[20]`, text);
    }
else
    {
    Get_Attribute.set(`//span[20]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(20).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(21)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(21)), delay);
element.all(by.xpath(`//span`)).get(21).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(21).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[21]`, text);
    }
else
    {
    Get_Text.set(`//span[21]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(21).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[21]`, text);
    }
else
    {
    Get_Attribute.set(`//span[21]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(21).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Commented Lines Report`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] contain Commented Lines Report. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] But has Commented Lines Report. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button is disabled. :Assertion Failed`);
    browser.quit();
    }
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `COMPONENT_NAME`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is equal toCOMPONENT_NAME. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] But has COMPONENT_NAME. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `COMPONENT_TYPE`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is equal toCOMPONENT_TYPE. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] But has COMPONENT_TYPE. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `APPLICATION`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is equal toAPPLICATION. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] But has APPLICATION. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[1]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4] is not present in current page. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[1]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `First`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[1] is equal toFirst. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[1] But has First. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Previous`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[2] is equal toPrevious. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[2] But has Previous. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[3]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Next`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[3] is equal toNext. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[3] But has Next. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Last`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4] is equal toLast. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4] But has Last. :Assertion Failed`);
browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/login"]`))), delay);
element(by.xpath(` //a[@href="/vb6/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\commentedpage";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/login"]`)).click();
});
});