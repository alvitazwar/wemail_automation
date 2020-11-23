Feature('wemail_list_feature');

Scenario('list_bulk_delete', (I) => {
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
  I.checkOption('div tbody > tr:nth-child(1) > td.column-checkbox.check-column > input[type=checkbox]');
  I.checkOption('div tbody > tr:nth-child(2) > td.column-checkbox.check-column > input[type=checkbox]');
  I.checkOption('div tbody > tr:nth-child(3) > td.column-checkbox.check-column > input[type=checkbox]');
  I.selectOption('div.wemail-list-table-2.wp-list-table-lists > div:nth-child(2) > div.list-table-filter-dropdowns.float-left > div > select','Delete');
  I.click('Apply');
  I.click('div.wemail-modal-footer > button.button.button-error');
  I.see('Lists deleted successfully');

});
