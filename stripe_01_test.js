var Factory = require('rosie').Factory;
var faker = require('faker');
Feature('wemail_stripe');
// Scenario('Stripe Webhook enable', ({ I }) => {
//     I.loginAsAdmin();
//     I.moveCursorTo('#toplevel_page_wemail > a > div.wp-menu-name');
//     I.click('Lists');
//     I.wait(8);
//     I.forceClick('Stripe for test');
//     I.wait(3);
//     I.click('Options');
//     I.click('#wemail-admin > div > h1 > span > div > a:nth-child(4)');
//     I.click('tbody > tr:nth-child(9) > td > div > label > input[type=checkbox]');
//     I.click('Save Changes');
//     I.see('List settings saved.');
//   });
  Scenario('Stripe Webhook purchase', ({ I }) => {
    I.amOnPage('https://stagingwp.getwemail.io/shop/');
    I.click('//ul//a[@href="https://stagingwp.getwemail.io/product/a-magni-eaque-saepe-hic/"]/h2[@class="woocommerce-loop-product__title"]');
    I.click('Add to cart');
    I.click('#content > div > div.woocommerce > div > a');
    I.click('#post-157 > div.entry-content > div > div.cart-collaterals > div > div > a');
    I.fillField('First name',faker.name.firstName());
    I.fillField('Last name',faker.name.lastName());
    //I.fillField('Company name (optional)',faker.name.middleName());
    I.selectOption('Country / Region','United States (US)');
    I.fillField('Street address',faker.address.direction());
    I.fillField('Town / City',faker.address.city());
    I.selectOption('State','California');
    I.fillField('ZIP',faker.address.zipCode());
    I.fillField('Phone','4254674678');
    I.fillField('Email address',faker.internet.email());
    I.click('#payment > ul > li.wc_payment_method.payment_method_stripe > label');
    
    
    I.scrollPageToBottom();
    I.checkOption('#payment > ul > li.wc_payment_method.payment_method_stripe > label');

    I.click('Card Number');
    I.type('4242 4242 4242 4242',200);
    I.click('Expiry Date');
    I.type('02/22');
    I.click('Card Code (CVC)');
    I.type('135');
    I.click('//*[@id="place_order"]');
    I.wait(10);


  });
  
