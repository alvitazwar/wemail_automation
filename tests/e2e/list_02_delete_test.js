Feature('wemail_list_insert');

Scenario('list_delete', ({ I }) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  I.wait(15);
  I.see('Good');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  //I.click('#toplevel_page_wemail > a > div.wp-menu-name');
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  I.moveCursorTo('tr:nth-of-type(2) .list-table-title');
  I.waitForElement('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[2]/ul/li[3]/a',50);
  I.forceClick('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[2]/ul/li[3]/a');
  //I.waitForElement('//*[@id="list-modal-name-input"]',30);
  //I.doubleClick('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[2]/ul/li[3]/a');
  I.wait(5);
  I.doubleClick('//*[@id="wemail-delete-list-modal"]/div/div/form/fieldset/div[3]/button[2]');
  I.wait(5);

  //I.seeElement({xpath:'//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[2]/a'});
  //I.click('Edit');
  //I.doubleClick('#wemail-admin > div > div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(2) > td.column-name.column-primary > a');


});
