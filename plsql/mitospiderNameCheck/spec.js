
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('plsql', function() {
                    it('mitospiderNameCheck', function() { 
						console.log('Application_name : plsql, Scenario_name : mitospiderNameCheck');
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.sleep(3000);element.all(by.xpath(`//span`)).get(1).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element.all(by.xpath(`//span`)).get(1).getText().then(function (text){
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
assert=Get_Text.get(`//span[2]`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`//span[2]`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
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
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(2)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(2)), delay);
element.all(by.xpath(`//span`)).get(2).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(2).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[2]`, text);
    }
else
    {
    Get_Text.set(`//span[2]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[2]`, text);
    }
else
    {
    Get_Attribute.set(`//span[2]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();

browser.sleep(3000);element.all(by.xpath(`//span`)).get(2).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element.all(by.xpath(`//span`)).get(2).getText().then(function (text){
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
assert=Get_Text.get(`//span[3]`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`//span[3]`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
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
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/plsql/formsApplication"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/plsql/formsApplication"]`))), delay);
element(by.xpath(` //a[@href="/plsql/formsApplication"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/plsql/formsApplication"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/plsql/formsApplication"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/plsql/formsApplication"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/plsql/formsApplication"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/plsql/formsApplication"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/plsql/formsApplication"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/plsql/formsApplication"]`)).click();
element(by.xpath(`//a[@href="/plsql/formsApplication"]`)).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element(by.xpath(`//a[@href="/plsql/formsApplication"]`)).getText().then(function (text){
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
assert=Get_Text.get(`//a[@href="/plsql/formsApplication"]`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`//a[@href="/plsql/formsApplication"]`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
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
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/plsql/glossary-application"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/plsql/glossary-application"]`))), delay);
element(by.xpath(` //a[@href="/plsql/glossary-application"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/plsql/glossary-application"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/plsql/glossary-application"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/plsql/glossary-application"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/plsql/glossary-application"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/plsql/glossary-application"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/plsql/glossary-application"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/plsql/glossary-application"]`)).click();

browser.sleep(3000);element(by.xpath(`//a[@href="/plsql/glossary-application"]`)).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element(by.xpath(`//a[@href="/plsql/glossary-application"]`)).getText().then(function (text){
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
assert=Get_Text.get(`//a[@href="/plsql/glossary-application"]`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`//a[@href="/plsql/glossary-application"]`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
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
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/plsql/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/plsql/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/plsql/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/plsql/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/plsql/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/plsql/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/plsql/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/plsql/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/plsql/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/plsql/spiderchartApp"]`)).click();

browser.sleep(3000);element(by.xpath(`//a[@href="/plsql/spiderchartApp"]`)).isPresent().then(function (text) {
console.log("presence");
var assert='';
if (text == true){
console.log('xpath in same page');
element(by.xpath(`//a[@href="/plsql/spiderchartApp"]`)).getText().then(function (text){
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
assert=Get_Text.get(`//a[@href="/plsql/spiderchartApp"]`)  }
if(`getText()`=="getAttribute('value')"){
assert=Get_Attribute.get(`//a[@href="/plsql/spiderchartApp"]`)  }
if( typeof assert ==='object')
    {
    assert=assert[0];
    }
else
    {
    assert=assert;
    }
}
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
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
console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] contain `, assert, '. :Assertion Passed');
}else{
console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] But has`, assert , '. :Assertion Failed');
browser.quit();
}
});
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
    Get_Text.set(` //a[@href="/plsql/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/plsql/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/plsql/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/plsql/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/plsql/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\plsql\\mitospiderNameCheck";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/plsql/login"]`)).click();
});
});