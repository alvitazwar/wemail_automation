const {I}= inject();
module.exports =  {
    
    setregularprice()
    { 
      I.fillField('Price','20');
      I.fillField('Discounted Price','15');
      I.click('input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right');
    },
    checkWrongPrice()
    { 
      I.fillField('Price','12');
      //this.fillField('Discounted Price','15');
      I.click('input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right');  
      I.see('Success! The product has been saved successfully.');
      console.log('Price should not be lower than discount price. Validation neededs');
    },
    checkmulticat()
  { 
     
    I.click('#select2-product_cat-container');
    I.click('span > span.select2-search.select2-search--dropdown > input');
    I.fillField(' span > span.select2-search.select2-search--dropdown > input','For multiple');
    I.pressKey('Enter');
    I.click('input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right');
    I.see('For multiple');  
  },
  checksinglecat:function()
  {
    I.click('#select2-product_cat-container');
    I.click('span > span.select2-search.select2-search--dropdown > input');
    I.fillField('span > span.select2-search.select2-search--dropdown > input','For single');
    I.pressKey('Enter');
    I.click('input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-righ');
    I.see('For single');
  }, 
  checktags()
  { 
    I.click('div:nth-child(6) > span > span.selection > span');
    I.type('div:nth-child(6) > span > span.selection > span','single');
    I.pressKey('Enter');
    return ;
    console.log("executed it");
    console.log(retur)
  }

}  

