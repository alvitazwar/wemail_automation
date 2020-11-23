Feature('wemail_list');

Scenario('list_Insert_tag', (I) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  I.wait(5);
  I.see('Good');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/lists');
  I.forceClick('div.wemail-list-table-2.wp-list-table-lists > table > tbody > tr:nth-child(4) > td.column-name.column-primary > a');
  I.click('//*[@id="wemail-admin"]/div/h1/span');
  I.click('Manage Tag');
  I.click('#wemail-manage-tag-modal form > fieldset > div.wemail-modal-header > h5 > a');
  I.fillField('tr > td:nth-child(1) > div > input','Automated');
  I.click('tr > td.table-action-column.text-center > button.button.button-primary');
  I.see('New tag was created.');

});
