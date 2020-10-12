Feature('wemail_list_create');

Scenario('list_Create', (I) => {
  I.loginAsAdmin();
  // I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  // //I.see('GitHub');
  // I.fillField('Username','alvitazwar');
  // I.fillField('Password','password');
  // I.click('Log In');
  //pause();
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  I.waitForElement('//*[@id="wemail-admin"]/div/h1/a',30);
  I.click('//*[@id="wemail-admin"]/div/h1/a');
  I.waitForElement('//*[@id="list-modal-name-input"]',30);
  I.fillField('//*[@id="list-modal-name-input"]','automated creation');
  I.click('Save');

});
