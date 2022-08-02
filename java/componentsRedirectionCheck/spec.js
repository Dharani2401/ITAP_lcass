
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('java', function() {
                    it('componentsRedirectionCheck', function() { 
						console.log('Application_name : java, Scenario_name : componentsRedirectionCheck');
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `components`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[2] contain components. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[2] But has components. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//h2`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//h2`)).get(1)), delay);
element.all(by.xpath(`//h2`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//h2`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//h2[1]`, text );
    }
else
    {
    Get_Text.set(`//h2[1]`, text[0] );
    }  
});
element.all(by.xpath(`//h2`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//h2[1]`, text );
    }
else
    {
    Get_Attribute.set(`//h2[1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//h2`)).get(1).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `master inventory report`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] contain master inventory report. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] But has master inventory report. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay);
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `orphan/driver components`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[2] contain orphan/driver components. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[2] But has orphan/driver components. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(43)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(43)), delay);
element.all(by.xpath(`//div`)).get(43).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(43).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[43]`, text );
    }
else
    {
    Get_Text.set(`//div[43]`, text[0] );
    }  
});
element.all(by.xpath(`//div`)).get(43).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[43]`, text );
    }
else
    {
    Get_Attribute.set(`//div[43]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(43).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `orphan/driver reports`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] contain orphan/driver reports. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] But has orphan/driver reports. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay);
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `missing components`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2] contain missing components. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2] But has missing components. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//h2`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//h2`)).get(5)), delay);
element.all(by.xpath(`//h2`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//h2`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//h2[5]`, text );
    }
else
    {
    Get_Text.set(`//h2[5]`, text[0] );
    }  
});
element.all(by.xpath(`//h2`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//h2[5]`, text );
    }
else
    {
    Get_Attribute.set(`//h2[5]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//h2`)).get(5).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else
    {
    assert=text.toLowerCase();
    }
if (assert.indexOf( `missing component report`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2] contain missing component report. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2] But has missing component report. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay);
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).click();

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


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(59)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(59)), delay);
element.all(by.xpath(`//div`)).get(59).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(59).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[59]`, text );
    }
else
    {
    Get_Text.set(`//div[59]`, text[0] );
    }  
});
element.all(by.xpath(`//div`)).get(59).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[59]`, text );
    }
else
    {
    Get_Attribute.set(`//div[59]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(59).click();

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
if (assert.indexOf( `dead report`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-deadparaapp/div[1]/app-page-header/div/div/ol/li[2] contain dead report. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-deadparaapp/div[1]/app-page-header/div/div/ol/li[2] But has dead report. :Assertion Failed`);
browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1)), delay);
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Text.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text );
    }
else
    {
    Get_Attribute.set(`//a[@href="/java/dashboard"][1]`, text[0] );
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a[@href="/java/dashboard"]`)).get(1).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\java\\componentsRedirectionCheck";
                        var fname="page12.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/java/login"]`)).click();
});
});