
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('java', function() {
                    it('redirectionCheck', function() {
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/java");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[1]`, text );
    }
else
    {
    Get_Text.set(`//span[1]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text );
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
    Get_Text.set(`//span[2]`, text );
    }
else
    {
    Get_Text.set(`//span[2]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[2]`, text );
    }
else
    {
    Get_Attribute.set(`//span[2]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(3)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(3)), delay);
element.all(by.xpath(`//span`)).get(3).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(3).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[3]`, text );
    }
else
    {
    Get_Text.set(`//span[3]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(3).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[3]`, text );
    }
else
    {
    Get_Attribute.set(`//span[3]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(3).click();


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
    Get_Text.set(`//span[4]`, text );
    }
else
    {
    Get_Text.set(`//span[4]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text );
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[5]`, text );
    }
else
    {
    Get_Text.set(`//span[5]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text );
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[6]`, text );
    }
else
    {
    Get_Text.set(`//span[6]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(6).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[6]`, text );
    }
else
    {
    Get_Attribute.set(`//span[6]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[7]`, text );
    }
else
    {
    Get_Text.set(`//span[7]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(7).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[7]`, text );
    }
else
    {
    Get_Attribute.set(`//span[7]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[8]`, text );
    }
else
    {
    Get_Text.set(`//span[8]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(8).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[8]`, text );
    }
else
    {
    Get_Attribute.set(`//span[8]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[9]`, text );
    }
else
    {
    Get_Text.set(`//span[9]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(9).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[9]`, text );
    }
else
    {
    Get_Attribute.set(`//span[9]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[10]`, text );
    }
else
    {
    Get_Text.set(`//span[10]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text );
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[11]`, text );
    }
else
    {
    Get_Text.set(`//span[11]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[11]`, text );
    }
else
    {
    Get_Attribute.set(`//span[11]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page14.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/screenDefnitionReport"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/screenDefnitionReport"]`))), delay);
element(by.xpath(` //a[@href="/java/screenDefnitionReport"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/screenDefnitionReport"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/screenDefnitionReport"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/screenDefnitionReport"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/screenDefnitionReport"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/screenDefnitionReport"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/screenDefnitionReport"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page15.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/screenDefnitionReport"]`)).click();


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
    Get_Text.set(`//span[13]`, text );
    }
else
    {
    Get_Text.set(`//span[13]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text );
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page16.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/CRUD"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/CRUD"]`))), delay);
element(by.xpath(` //a[@href="/java/CRUD"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/CRUD"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/CRUD"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/CRUD"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/CRUD"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/CRUD"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/CRUD"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page17.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/CRUD"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/glossary"]`))), delay);
element(by.xpath(` //a[@href="/java/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/glossary"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/glossary"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/glossary"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/glossary"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page18.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/glossary"]`)).click();


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
    Get_Text.set(`//span[16]`, text );
    }
else
    {
    Get_Text.set(`//span[16]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(16).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[16]`, text );
    }
else
    {
    Get_Attribute.set(`//span[16]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[17]`, text );
    }
else
    {
    Get_Text.set(`//span[17]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(17).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[17]`, text );
    }
else
    {
    Get_Attribute.set(`//span[17]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[18]`, text );
    }
else
    {
    Get_Text.set(`//span[18]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(18).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[18]`, text );
    }
else
    {
    Get_Attribute.set(`//span[18]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
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
    Get_Text.set(`//span[19]`, text );
    }
else
    {
    Get_Text.set(`//span[19]`, text[0] );
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text );
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page22.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/orphanApplication"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/orphanApplication"]`))), delay);
element(by.xpath(` //a[@href="/java/orphanApplication"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/orphanApplication"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/orphanApplication"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/orphanApplication"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/orphanApplication"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/orphanApplication"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/orphanApplication"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page23.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/orphanApplication"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/userguide"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/userguide"]`))), delay);
element(by.xpath(` //a[@href="/java/userguide"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/userguide"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/userguide"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/userguide"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/userguide"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/userguide"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/userguide"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page24.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/userguide"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/java/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/java/login"]`))), delay);
element(by.xpath(` //a[@href="/java/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/java/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/java/login"]`, text );
    }
else
    {
    Get_Text.set(` //a[@href="/java/login"]`, text[0] );
    }  
});
element.all(by.xpath(` //a[@href="/java/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/login"]`, text );
    }
else
    {
    Get_Attribute.set(` //a[@href="/java/login"]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\redirectionCheck";
                        var fname="page25.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/login"]`)).click();
});
});