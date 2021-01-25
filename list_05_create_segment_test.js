Feature('wemail_list');

Scenario('list_Insert_segment', ({ I }) => {
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
  I.click('Manage Segment');
  I.click('#wemail-manage-segment-modal form fieldset > div.wemail-modal-header > h5 > a');
  I.selectOption('#wemail-admin div.conditions > div.condition > div:nth-child(1) > select','First Name');
  I.fillField(' div.conditions > div.condition > div:nth-child(3) > input','alvi');
  I.click('Create');
  I.fillField('div  form > div > div.mt-2 > input','automated_creation');
  I.click('Save');
  I.selectOption('div.list-table-filter-dropdowns.float-left > div:nth-child(2) > select','automated_creation');
  I.click('Filter');
  I.click('Clear Segment');

});
