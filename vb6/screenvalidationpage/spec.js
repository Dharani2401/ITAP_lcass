
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('vb6', function() {
                    it('screenvalidationpage', function() { 
						console.log('Application_name : vb6, Scenario_name : screenvalidationpage');
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
        

browser.wait(until.presenceOf(element(by.xpath('//input[@id="Uname"]'))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath('//input[@id="Uname"]')).clear();
element(by.xpath('//input[@id="Uname"]')).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//input[@id="Uname"]')).sendKeys("demouser");

browser.wait(until.presenceOf(element(by.xpath('//input[@id="Upwd"]'))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath('//input[@id="Upwd"]')).clear();
element(by.xpath('//input[@id="Upwd"]')).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//input[@id="Upwd"]')).sendKeys("demouser1");

browser.wait(until.presenceOf(element(by.xpath('//button[@id="loginBtn"]'))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath('//button[@id="loginBtn"]'))),delay);
element(by.xpath('//button[@id="loginBtn"]')).getText().then(function(text){ 
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_click',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//button[@id="loginBtn"]')).click();
browser.wait(until.presenceOf(element.all(by.xpath('//a')).get(15)), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element.all(by.xpath('//a')).get(15)), delay);
element.all(by.xpath('//a')).get(15).getText().then(function(text){
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_click',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//a')).get(15).click();
browser.wait(until.presenceOf(element.all(by.xpath('//span')).get(16)), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element.all(by.xpath('//span')).get(16)), delay);
element.all(by.xpath('//span')).get(16).getText().then(function(text){
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_click',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//span')).get(16).click();
browser.wait(until.presenceOf(element(by.xpath('//select[@id="appln"]//option[@value="All"]'))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath('//select[@id="appln"]//option[@value="All"]'))), delay);
element(by.xpath('//select[@id="appln"]//option[@value="All"]')).getText().then(function(text){
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_select',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//select[@id="appln"]//option[@value="All"]')).click();
browser.wait(until.presenceOf(element(by.xpath('//select[@id="fileln"]//option[@value="BookingReportForm.frm"]'))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath('//select[@id="fileln"]//option[@value="BookingReportForm.frm"]'))), delay);
element(by.xpath('//select[@id="fileln"]//option[@value="BookingReportForm.frm"]')).getText().then(function(text){
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_select',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//select[@id="fileln"]//option[@value="BookingReportForm.frm"]')).click();
browser.wait(until.presenceOf(element(by.xpath('//button[@id="submitBtn"]'))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath('//button[@id="submitBtn"]'))),delay);
element(by.xpath('//button[@id="submitBtn"]')).getText().then(function(text){ 
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_click',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//button[@id="submitBtn"]')).click();
browser.wait(until.presenceOf(element(by.xpath('//a[@href="/vb6/login"]'))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath('//a[@href="/vb6/login"]'))),delay);
element(by.xpath('//a[@href="/vb6/login"]')).getText().then(function(text){ 
var description =''; 
if( typeof text ==='object')
{ description=text[0];}
else{ description=text;} 
console.log('test_step_click',description);});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\screenvalidationpage";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//a[@href="/vb6/login"]')).click();});
});