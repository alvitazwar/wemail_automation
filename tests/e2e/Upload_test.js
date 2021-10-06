Feature('upload');

Scenario('upload', ({ I }) => {
  I.amOnPage('http://www.csm-testcenter.org/test?do=show&subdo=common&test=file_upload');
  I.attachFile('/html/body/div/div[4]/div[1]/form/table/tbody/tr[1]/td[2]/input','/test.zip');
  I.click('/html/body/div/div[4]/div[1]/form/table/tbody/tr[3]/td[2]/input');

  I.click('Save');

});
