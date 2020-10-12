Feature('wemail_list_insert');

Scenario('list_Insert', (I) => {
  I.loginAsAdmin();
  // I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  // //I.see('GitHub');
  // I.fillField('Username','alvitazwar');
  // I.fillField('Password','password');
  // I.click('Log In');
  //pause();
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  I.click('automated creation');
  //I.waitForElement('//*[@id="list-modal-name-input"]',30);
  I.click('Add Subscribers');
  I.click('Create New Subscriber');
  I.fillField('Email','adc@gm.com');
  I.fillField('First Name','adc');
  I.click('Save');

});
