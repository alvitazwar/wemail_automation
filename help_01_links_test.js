Feature('wemail_Helpmenu');

Scenario('link check Helpmenu', ({ I }) => {
  //I.loginAsAdmin();
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  //I.see('GitHub');
  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  // /I.refreshPage();
  //pause();
  I.wait(5);
  I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/help/support');
  I.click('documentation');
  I.closeOtherTabs();
  I.click('Frequently Asked Questions');
  I.closeOtherTabs();
  I.click('YouTube channel');


});
