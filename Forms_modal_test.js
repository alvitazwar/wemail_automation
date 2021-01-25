Feature('wemail_list_create');

Scenario('Form_Creation', ({ I }) => {
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');
  //I.see('GitHub');
  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');
  //pause();
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/forms');
  I.waitForElement('//*[@id="wemail-admin"]/div/h1/a[1]',30);
  I.click('//*[@id="wemail-admin"]/div/h1/a[1]');
  I.waitForElement('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[1]/input',30);
  I.fillField('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[1]/input','Modal');
  I.click('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[2]/div/div[4]/a/span[1]'); //Select form type
  I.click('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[3]/div/div/div[2]'); //Select list_Create
  //I.waitForElement('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[3]/div/div/div[3]/ul/li[12]/span',30);
  I.click('//*[@id="wemail-admin"]/div/div[2]/div/div/form/fieldset/div[2]/label[3]/div/div/div[3]/ul/li[12]/span');
  I.wait(2);
  I.click('Save');
  I.wait(5);
  I.waitForElement('//*[@id="wemail-form-customizer"]/div[1]/div[2]/button',30);
  I.click('//*[@id="wemail-form-customizer"]/div[1]/div[2]/button');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/forms');
  I.see('Modal');

});
