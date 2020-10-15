Feature('wemail_list_insert');

Scenario('list_Insert', (I) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  //I.see('GitHub');
  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  //pause();
  I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  //I.click('#toplevel_page_wemail > a > div.wp-menu-name');
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  //I.moveCursorTo('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[2]/a');
  I.waitForElement('#wemail-admin > div > div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(2) > td.column-name.column-primary > a',50);
  I.forceClick('#wemail-admin > div > div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(2) > td.column-name.column-primary > a');
  //I.waitForElement('//*[@id="list-modal-name-input"]',30);
  I.doubleClick('#wemail-admin > div > div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(2) > td.column-name.column-primary > a');
  //I.refreshPage();
  //I.doubleClick('#wemail-admin > div > div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(2) > td.column-name.column-primary > a');
  //I.click('Edit');
  I.refreshPage();
  I.click('Add Subscribers');
  I.click('Create New Subscriber');
  I.fillField('//*[@id="subscriber-modal-email-input"]','edit@gm.com');
  I.fillField('First Name','edit');
  I.click('Save');

});
