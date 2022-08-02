
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('vb6', function() {
                    it('ruleharvestingpage', function() { 
						console.log('Application_name : vb6, Scenario_name : ruleharvestingpage');
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vb6");
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="BOOKING"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="BOOKING"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="BOOKING"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="BOOKING"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="BOOKING"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookingReportForm.frm"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="PhoneBookingForm.frm"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`))), delay);
element(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Combo2"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Combo2"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="screen"]//option[@value="Combo2"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="screen"]//option[@value="Combo2"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="screen"]//option[@value="Combo2"]`)).click();

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[6]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[6]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[6]/div[1]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[2]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img is not present in current page. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[1]/label is not present in current page. :Assertion Failed`);
browser.quit();
}
});

browser.sleep(5000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `COMPONENT_NAME`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is equal toCOMPONENT_NAME. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] But has COMPONENT_NAME. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `FUNCTION_NAME`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is equal toFUNCTION_NAME. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] But has FUNCTION_NAME. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `SCREENFIELD`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is equal toSCREENFIELD. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] But has SCREENFIELD. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `RULE_STATEMENT`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4] is equal toRULE_STATEMENT. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4] But has RULE_STATEMENT. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[5]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `RULE_DESCRIPTION`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[5] is equal toRULE_DESCRIPTION. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[5] But has RULE_DESCRIPTION. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[6]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `RULE_ID`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[6] is equal toRULE_ID. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[6] But has RULE_ID. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[7]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `RULE_RELATION`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[7] is equal toRULE_RELATION. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[7] But has RULE_RELATION. :Assertion Failed`);
browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[8]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `FUNCTION_CALLS`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[8] is equal toFUNCTION_CALLS. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[8] But has FUNCTION_CALLS. :Assertion Failed`);
browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[9]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[9] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[9] is not present in current page. :Assertion Failed`);
browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 2 of 2 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4] contain Showing 1 to 2 of 2 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4] But has Showing 1 to 2 of 2 entries. :Assertion Failed`);
browser.quit();
}
});

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
browser.takeScreenshot().then(function (png) {var dir="D:\\iTAP\\Recorded_Scenarios\\vb6\\ruleharvestingpage";
                        var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vb6/login"]`)).click();
});
});