// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    loginAsAdmin: function () {
    this.amOnPage('https://stagingwp.getwemail.io/wp-admin');
    //this.click('Log in');
    this.fillField('Username', 'alvitazwar');
    this.fillField('Password','password');
    this.click('Log In');
  }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    
  });
}
