Feature('wemail_team');

Scenario('team check enable-disable button', (I) => {
  //I.loginAsAdmin();
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');

  //I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.wait(10);
  I.see('Good');
  I.waitForElement('//*[@id="toplevel_page_wemail"]/a/div[3]', 30);
  //I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/');
  I.click('//*[@id="toplevel_page_wemail"]/a/div[3]');
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin/admin.php?page=wemail#/teams');
  I.click('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[6]/button');
  I.see('User status updated for weMail');
  I.click('//*[@id="wemail-admin"]/div/div[1]/table/tbody/tr[1]/td[6]/button');
  I.see('User status updated for weMail');



});
