
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('plsql', function() {
                    it('deadreportRedirection', function() { 
						console.log('Application_name : plsql, Scenario_name : deadreportRedirection');
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/plsql");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\deadreportRedirection";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text );
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0] );
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text );
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0] );
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\deadreportRedirection";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text );
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0] );
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text );
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0] );
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
    Get_Text.set(` //button[@id="loginBtn"]`, text );
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0] );
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text );
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\deadreportRedirection";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `lines of dead code`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[2] contain lines of dead code. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[2] But has lines of dead code. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(55)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(55)), delay);
element.all(by.xpath(`//div`)).get(55).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(55).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[55]`, text );
    }
else
    {
    Get_Text.set(`//div[55]`, text[0] );
    }  
});
element.all(by.xpath(`//div`)).get(55).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[55]`, text );
    }
else
    {
    Get_Attribute.set(`//div[55]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\deadreportRedirection";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(55).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-deadparaapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `dead para`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-deadparaapp/div[1]/app-page-header/div/div/ol/li[2] contain dead para. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-deadparaapp/div[1]/app-page-header/div/div/ol/li[2] But has dead para. :Assertion Failed`);
browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/plsql/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/plsql/login"]`))), delay);
element(by.xpath(` //a[@href="/plsql/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/plsql/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/plsql/login"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/plsql/login"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/plsql/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/plsql/login"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/plsql/login"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\deadreportRedirection";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/plsql/login"]`)).click();
});
});