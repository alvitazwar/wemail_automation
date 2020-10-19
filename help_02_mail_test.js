Feature('wemail_Helpmenu');

Scenario('link check Mailsend', ({ I }) => {
  //I.loginAsAdmin();
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');

  I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/help/support');
  I.fillField('//*[@id="wemail-admin"]/div//div[2]/input','abc@gmail.com');
  I.fillField('//*[@id="wemail-admin"]/div//div[2]/textarea','Demo Test');
  I.click('Send');
  I.wait(5);


});
