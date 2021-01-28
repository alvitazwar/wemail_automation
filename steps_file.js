// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    loginAsAdmin: function () {
    this.amOnPage('https://stagingwp.getwemail.io/wp-admin');
    //this.click('Log in');
    this.fillField('Username', 'alvitazwar');
    this.fillField('Password','password');
    this.click('Log In');
  },
  checkError: function () {
    this.dontSee('Warning');
    this.dontSee('Fatal error');
    this.dontSee('Notice:');
  },checkWrongPrice:function(){
    this.fillField('Price','2');
    this.fillField('Discounted Price','15');
    this.click('input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right');
    this.see('Success! The product has been saved successfully.');
    console.log('Price should not be lower than discount price');
    
  }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    
  });
}
