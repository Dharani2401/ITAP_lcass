
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('vb6', function() {
                    it('allreportname', function() {
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`))), delay);
element(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/xrefApplicationReport"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/xrefApplicationReport"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/xrefApplicationReport"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/vb6/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/spiderchartApp"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page13.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(11)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(11)), delay);
element.all(by.xpath(`//span`)).get(11).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(11).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[11]`, text);
    }
else
    {
    Get_Text.set(`//span[11]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[11]`, text);
    }
else
    {
    Get_Attribute.set(`//span[11]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page14.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page15.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(12).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/sankey"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/sankey"]`))), delay);
element(by.xpath(` //a[@href="/vb6/sankey"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/sankey"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/sankey"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/sankey"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/sankey"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/sankey"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/sankey"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page16.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/sankey"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page17.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(14).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page18.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page19.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(16).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/CRUD"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/CRUD"]`))), delay);
element(by.xpath(` //a[@href="/vb6/CRUD"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/CRUD"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/CRUD"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/CRUD"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/CRUD"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/CRUD"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/CRUD"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page20.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/CRUD"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/glossary"]`))), delay);
element(by.xpath(` //a[@href="/vb6/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page21.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/glossary"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/impactReport"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/impactReport"]`))), delay);
element(by.xpath(` //a[@href="/vb6/impactReport"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/impactReport"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/impactReport"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/impactReport"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/impactReport"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/impactReport"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/impactReport"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page22.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/impactReport"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page25.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(22).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(23)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(23)), delay);
element.all(by.xpath(`//span`)).get(23).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(23).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[23]`, text);
    }
else
    {
    Get_Text.set(`//span[23]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(23).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[23]`, text);
    }
else
    {
    Get_Attribute.set(`//span[23]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page26.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(23).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vb6/userguide"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vb6/userguide"]`))), delay);
element(by.xpath(` //a[@href="/vb6/userguide"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vb6/userguide"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vb6/userguide"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vb6/userguide"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vb6/userguide"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vb6/userguide"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vb6/userguide"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page27.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/userguide"]`)).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\allreportname";
                        var fname="page28.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/login"]`)).click();
});
});