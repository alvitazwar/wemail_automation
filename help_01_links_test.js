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
  I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/help/support');
  I.click('documentation');
  I.wait(2);
  I.closeOtherTabs();
  I.click('Frequently Asked Questions');
  I.wait(2);
  I.closeOtherTabs();
  // I.click('//*[@id="wemail-admin"]/div/div/div[2]/form/fieldset/section/div/div/div[1]/div[3]/a');
  // I.wait(2);
  // I.closeOtherTabs();


});
