Feature('wemail_list_create');

Scenario('Form_Creation', (I) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  //I.see('GitHub');
  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  //pause();
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/campaigns');


});
