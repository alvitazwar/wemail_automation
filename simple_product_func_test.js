var Factory = require('rosie').Factory;
var faker = require('faker');
const helpers = require("./helpers");

//const helper = require('./helpers');
Feature('Simple product fucntionality');

Scenario('simple product functional', ({ I }) => {
    I.amOnPage('http://dokan-pro.test/');
    I.checkError();
    I.click('Login / Register');
    I.fillField('Username or email address','alvitazwar@wedevs.com');
    I.fillField('Password','alvitazwar1122334456');
    I.click('.login > p:nth-child(4) > button:nth-child(3)');
    I.click('Products');
    I.click('simple_pro_1');
//Product Functionality Check
    //Product functionality with lower price than discount price
    // helpers.setregularprice();
    // helpers.checkWrongPrice();
    // helpers.checksinglecat();
    // helpers.checkmulticat();
    //helpers.checktags();
    //Category 
    //I.checkCategory();
    //Short Description + Description
    // helpers.shortDesc();
    // helpers.desc();
    // helpers.clearDesc();
    // helpers.shortDesc();
    // helpers.desc();
    // Wholesale product
    helpers.wholesale();
    helpers.clearwholesale();
    helpers.wholesale();

});
