
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('Cobol', function() {
                    it('ScreenDefinitionTotalEntriesRecord', function() {
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/cobol");
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
console.log('test_step_inputadmin');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`admin`);
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
console.log('test_step_inputadmin1');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`admin1`);
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(15)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(15)), delay);
element.all(by.xpath(`//span`)).get(15).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(15).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[15]`, text);
    }
else
    {
    Get_Text.set(`//span[15]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(15).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[15]`, text);
    }
else
    {
    Get_Attribute.set(`//span[15]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(15).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(16)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(16)), delay);
element.all(by.xpath(`//span`)).get(16).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(16).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[16]`, text);
    }
else
    {
    Get_Text.set(`//span[16]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(16).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[16]`, text);
    }
else
    {
    Get_Attribute.set(`//span[16]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(16).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`))), delay);
element(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="ADPG005"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="ADPG005"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="fileln"]//option[@value="ADPG005"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="fileln"]//option[@value="ADPG005"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="fileln"]//option[@value="ADPG005"]`)).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/li/ul/li[1]/a/span`)).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/li/ul/li[1]/a/span`)).getText().then(function (text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
console.log("assert",assert);});
}
else{
if(`getText()`=="getText()"){
assert=Get_Text.get(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/li/ul/li[1]/a/span`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/li/ul/li[1]/a/span`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
var assert1='';
if( typeof text ==='object')
    {
    assert1=text[0];
    }
else
    {
    assert1=text;
    }
console.log(assert);
if (assert1.indexOf(assert)!== -1){
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Showing 1 to 10 of 558 entries`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] is equal toShowing 1 to 10 of 558 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] But has Showing 1 to 10 of 558 entries. :Assertion Failed`);
browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ACCOUNTS PAYABLE"]`)).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Showing 1 to 10 of 42 entries`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] is equal toShowing 1 to 10 of 42 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] But has Showing 1 to 10 of 42 entries. :Assertion Failed`);
browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/login"]`))), delay);
element(by.xpath(` //a[@href="/cobol/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\ScreenDefinitionTotalEntriesRecord";
                        var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/login"]`)).click();
});
});