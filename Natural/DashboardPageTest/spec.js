
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('Natural', function() {
                    it('DashboardPageTest', function() { 
						console.log('Application_name : Natural, Scenario_name : DashboardPageTest');
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/natural/");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Natural\\DashboardPageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Natural\\DashboardPageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Natural\\DashboardPageTest";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[2]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[6]/div[2]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[2]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[1]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[7]/div[1]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[1]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[1] is not present in current page. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `49`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to49. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 49. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `18529`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to18529. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 18529. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `12`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to12. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 12. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `17`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to17. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 17. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `51`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to51. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 51. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `187`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to187. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 187. :Assertion Failed`);
browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/natural/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/natural/login"]`))), delay);
element(by.xpath(` //a[@href="/natural/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/natural/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/natural/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/natural/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/natural/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/natural/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/natural/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Natural\\DashboardPageTest";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/natural/login"]`)).click();
});
});