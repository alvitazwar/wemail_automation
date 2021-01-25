Feature('wemail_users');

Scenario('user add new User', ({ I }) => {
  //I.loginAsAdmin();
  I.amOnPage('https://stagingwp.getwemail.io/wp-admin');

  I.fillField('Username','alvitazwar');
  I.fillField('Password','password');
  I.click('Log In');

  //I.seeElement({xpath: '//*[@id="wpbody-content"]/div[3]/h1'});
  I.wait(15);
  I.click('Users');
  I.click('//*[@id="wpbody-content"]/div[3]/a');
  I.fillField('//*[@id="user_login"]','test_user3');
  I.fillField('//*[@id="email"]','test_user3@gmail.com');
  I.fillField('//*[@id="first_name"]','test');
  I.fillField('//*[@id="last_name"]','user3');
  I.click('Show password');
  I.fillField('//*[@id="pass1"]','test_user3');
  I.click('//*[@id="createuser"]/table/tbody/tr[8]/td/label/input');
  //I.click('Add New User');
  I.selectOption('Role','Author');
  I.click('//*[@id="createusersub"]');
  




});
