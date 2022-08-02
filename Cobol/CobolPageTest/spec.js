
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('Cobol', function() {
                    it('CobolPageTest', function() { 
						console.log('Application_name : Cobol, Scenario_name : CobolPageTest');
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/cobol/");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //span`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //span`))), delay);
element(by.xpath(` //span`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //span`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //span`, text);
    }
else
    {
    Get_Text.set(` //span`, text[0]);
    }  
});
element.all(by.xpath(` //span`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span`, text);
    }
else
    {
    Get_Attribute.set(` //span`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //span`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`))), delay);
element(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/spiderchartAppNat"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/spiderchartAppNat"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/spiderchartAppNat"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/spiderchartAppNat"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/spiderchartAppNat"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(6).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`))), delay);
element(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/controlFlowAppNat"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/controlFlowAppNat"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/controlFlowAppNat"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/controlFlowAppNat"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/controlFlowAppNat"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page12.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page13.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(9).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="varsubmit"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="varsubmit"]`))), delay);
element(by.xpath(` //button[@id="varsubmit"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="varsubmit"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="varsubmit"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="varsubmit"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="varsubmit"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="varsubmit"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="varsubmit"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page14.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="varsubmit"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//a`)).get(11)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a`)).get(11)), delay);
element.all(by.xpath(`//a`)).get(11).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a`)).get(11).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[11]`, text);
    }
else
    {
    Get_Text.set(`//a[11]`, text[0]);
    }  
});
element.all(by.xpath(`//a`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[11]`, text);
    }
else
    {
    Get_Attribute.set(`//a[11]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page15.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a`)).get(11).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page16.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page17.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page18.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/sankey"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/sankey"]`))), delay);
element(by.xpath(` //a[@href="/cobol/sankey"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/sankey"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/sankey"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/sankey"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/sankey"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/sankey"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/sankey"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page19.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/sankey"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//a`)).get(16)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a`)).get(16)), delay);
element.all(by.xpath(`//a`)).get(16).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a`)).get(16).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[16]`, text);
    }
else
    {
    Get_Text.set(`//a[16]`, text[0]);
    }  
});
element.all(by.xpath(`//a`)).get(16).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[16]`, text);
    }
else
    {
    Get_Attribute.set(`//a[16]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page20.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a`)).get(16).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`))), delay);
element(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/cicsscreenAppProd"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/cicsscreenAppProd"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/cicsscreenAppProd"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/cicsscreenAppProd"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page21.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/cicsscreenAppProd"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page22.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page23.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(18).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`))), delay);
element(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/formsApplicationNat"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/formsApplicationNat"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/formsApplicationNat"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/formsApplicationNat"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page24.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/formsApplicationNat"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page25.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page26.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page27.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page28.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(23).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(24)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(24)), delay);
element.all(by.xpath(`//span`)).get(24).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(24).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[24]`, text);
    }
else
    {
    Get_Text.set(`//span[24]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(24).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[24]`, text);
    }
else
    {
    Get_Attribute.set(`//span[24]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page29.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(24).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(25)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(25)), delay);
element.all(by.xpath(`//span`)).get(25).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(25).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[25]`, text);
    }
else
    {
    Get_Text.set(`//span[25]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(25).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[25]`, text);
    }
else
    {
    Get_Attribute.set(`//span[25]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page30.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(25).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(26)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(26)), delay);
element.all(by.xpath(`//span`)).get(26).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(26).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[26]`, text);
    }
else
    {
    Get_Text.set(`//span[26]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(26).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[26]`, text);
    }
else
    {
    Get_Attribute.set(`//span[26]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page31.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(26).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(27)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(27)), delay);
element.all(by.xpath(`//span`)).get(27).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(27).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[27]`, text);
    }
else
    {
    Get_Text.set(`//span[27]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(27).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[27]`, text);
    }
else
    {
    Get_Attribute.set(`//span[27]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page32.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(27).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/cobol/userguide"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/cobol/userguide"]`))), delay);
element(by.xpath(` //a[@href="/cobol/userguide"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/cobol/userguide"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/cobol/userguide"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/cobol/userguide"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/cobol/userguide"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/userguide"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/cobol/userguide"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page33.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/userguide"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(29)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(29)), delay);
element.all(by.xpath(`//span`)).get(29).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(29).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[29]`, text);
    }
else
    {
    Get_Text.set(`//span[29]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(29).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[29]`, text);
    }
else
    {
    Get_Attribute.set(`//span[29]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page34.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(29).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1)), delay);
element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[@href="/cobol/dashboard"][1]`, text);
    }
else
    {
    Get_Text.set(`//a[@href="/cobol/dashboard"][1]`, text[0]);
    }  
});
element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/cobol/dashboard"][1]`, text);
    }
else
    {
    Get_Attribute.set(`//a[@href="/cobol/dashboard"][1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page35.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a[@href="/cobol/dashboard"]`)).get(1).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\CobolPageTest";
                        var fname="page36.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/login"]`)).click();
});
});