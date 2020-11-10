Feature('wemail_list_edit');

Scenario('list_edit', (I) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  I.wait(15);
  // I.see('Good');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  //I.click('#toplevel_page_wemail > a > div.wp-menu-name');
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  I.moveCursorTo('tr:nth-of-type(2) >.column-name.column-primary > .list-table-title');
  I.waitForElement('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[2]/td[2]/ul/li[1]/a',20);
  I.forceClick('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[2]/td[2]/ul/li[1]/a');
  I.fillField('Name','Automated creation edit');
  I.fillField('Description','Automated creation description edit');
  I.click('Save');

});
