
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('Cobol', function() {
                    it('SankeyDiagram', function() { 
						console.log('Application_name : Cobol, Scenario_name : SankeyDiagram');
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(14).click();

browser.sleep(1000);element.all(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[2]/select is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element.all(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[4]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[4]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[4]/select is not present in current page. :Assertion Failed`);
browser.quit();
}
});


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\Cobol\\SankeyDiagram";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/cobol/login"]`)).click();
});
});