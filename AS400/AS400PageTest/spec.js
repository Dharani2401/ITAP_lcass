
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('AS400', function() {
                    it('AS400PageTest', function() { 
						console.log('Application_name : AS400, Scenario_name : AS400PageTest'); 
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/as400/");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/masterinvApplication"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/masterinvApplication"]`))), delay);
element(by.xpath(` //a[@href="/as400/masterinvApplication"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/masterinvApplication"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/masterinvApplication"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/masterinvApplication"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/masterinvApplication"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/masterinvApplication"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/masterinvApplication"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/masterinvApplication"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`))), delay);
element(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/xrefApplicationReport"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/xrefApplicationReport"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/xrefApplicationReport"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/formsApplication"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/formsApplication"]`))), delay);
element(by.xpath(` //a[@href="/as400/formsApplication"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/formsApplication"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/formsApplication"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/formsApplication"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/formsApplication"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/formsApplication"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/formsApplication"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/formsApplication"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/glossary"]`))), delay);
element(by.xpath(` //a[@href="/as400/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/glossary"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/as400/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/spiderchartApp"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(6)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(6)), delay);
element.all(by.xpath(`//span`)).get(6).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(6).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[6]`, text);
    }
else
    {
    Get_Text.set(`//span[6]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(6).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[6]`, text);
    }
else
    {
    Get_Attribute.set(`//span[6]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(6).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(7)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(7)), delay);
element.all(by.xpath(`//span`)).get(7).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(7).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[7]`, text);
    }
else
    {
    Get_Text.set(`//span[7]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(7).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[7]`, text);
    }
else
    {
    Get_Attribute.set(`//span[7]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(7).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(8)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(8)), delay);
element.all(by.xpath(`//span`)).get(8).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(8).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[8]`, text);
    }
else
    {
    Get_Text.set(`//span[8]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(8).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[8]`, text);
    }
else
    {
    Get_Attribute.set(`//span[8]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(8).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(9)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(9)), delay);
element.all(by.xpath(`//span`)).get(9).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(9).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[9]`, text);
    }
else
    {
    Get_Text.set(`//span[9]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(9).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[9]`, text);
    }
else
    {
    Get_Attribute.set(`//span[9]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page12.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(9).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(10)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(10)), delay);
element.all(by.xpath(`//span`)).get(10).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(10).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[10]`, text);
    }
else
    {
    Get_Text.set(`//span[10]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text);
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page13.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//a`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a`)).get(12)), delay);
element.all(by.xpath(`//a`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[12]`, text);
    }
else
    {
    Get_Text.set(`//a[12]`, text[0]);
    }  
});
element.all(by.xpath(`//a`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[12]`, text);
    }
else
    {
    Get_Attribute.set(`//a[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page14.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a`)).get(12).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(12)), delay);
element.all(by.xpath(`//span`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[12]`, text);
    }
else
    {
    Get_Text.set(`//span[12]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[12]`, text);
    }
else
    {
    Get_Attribute.set(`//span[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page15.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(12).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(13)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(13)), delay);
element.all(by.xpath(`//span`)).get(13).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(13).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[13]`, text);
    }
else
    {
    Get_Text.set(`//span[13]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text);
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page16.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(14)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(14)), delay);
element.all(by.xpath(`//span`)).get(14).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(14).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[14]`, text);
    }
else
    {
    Get_Text.set(`//span[14]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(14).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[14]`, text);
    }
else
    {
    Get_Attribute.set(`//span[14]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page17.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(14).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/cicsscreenApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/cicsscreenApp"]`))), delay);
element(by.xpath(` //a[@href="/as400/cicsscreenApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/cicsscreenApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/cicsscreenApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/cicsscreenApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/cicsscreenApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/cicsscreenApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/cicsscreenApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page18.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/cicsscreenApp"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page19.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(16).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(17)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(17)), delay);
element.all(by.xpath(`//span`)).get(17).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(17).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[17]`, text);
    }
else
    {
    Get_Text.set(`//span[17]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(17).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[17]`, text);
    }
else
    {
    Get_Attribute.set(`//span[17]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page20.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(17).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(18)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(18)), delay);
element.all(by.xpath(`//span`)).get(18).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(18).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[18]`, text);
    }
else
    {
    Get_Text.set(`//span[18]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(18).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[18]`, text);
    }
else
    {
    Get_Attribute.set(`//span[18]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page21.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(18).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(19)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(19)), delay);
element.all(by.xpath(`//span`)).get(19).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(19).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[19]`, text);
    }
else
    {
    Get_Text.set(`//span[19]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text);
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page22.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page23.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(20).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page24.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(21).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(22)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(22)), delay);
element.all(by.xpath(`//span`)).get(22).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(22).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[22]`, text);
    }
else
    {
    Get_Text.set(`//span[22]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(22).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[22]`, text);
    }
else
    {
    Get_Attribute.set(`//span[22]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page25.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(22).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/as400/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/as400/login"]`))), delay);
element(by.xpath(` //a[@href="/as400/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/as400/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/as400/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/as400/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/as400/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/as400/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/as400/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\AS400\\AS400PageTest";
                        var fname="page26.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/as400/login"]`)).click();
});
});