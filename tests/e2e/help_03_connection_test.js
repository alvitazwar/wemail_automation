Feature('wemail_Helpmenu');

Scenario('help check connection', ({ I }) => {
  //I.loginAsAdmin();
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');

  //I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.wait(15);
  I.see('Good');
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/help/tools');
  I.click('Send request');
  I.wait(10);
  I.see('Server responded with 200 code.');


});
